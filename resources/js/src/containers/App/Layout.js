import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './Nav';
import RenderRoute from './RenderRoute';
import { LOGOUT_USER } from '../../actions/Auth';

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false
        };
        this.logout = this.logout.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isAuthenticated != this.props.isAuthenticated) {
            this.setState({ isAuthenticated });
        }
    }

    logout() {
        this.props.logout;
        console.log('dfs');
        // this.props.history.push('/login');
        return <Redirect to="/login" />;
    }

    render(){
        return(
            <Router>
                <Nav isAuthenticated={this.state.isAuthenticated} logout={this.logout} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <RenderRoute />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        token_details: state.userReducer.token_details,
        loading: state.userReducer.loading,
        error: state.userReducer.error,
        isAuthenticated: state.userReducer.isAuthenticated
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch({type: LOGOUT_USER})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
