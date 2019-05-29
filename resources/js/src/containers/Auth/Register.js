import React from 'react';
import { connect } from 'react-redux';
import { saveUser } from '../../actions/Auth';
import { PropTypes } from 'prop-types';

class Register extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
        name: '',
        email: '',
        password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.token_details != this.props.token_details) {
      // setToken(this.props.token_details);
    }
  }

  handleInputChange (e) {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    const data = {
        name, email, password
    };
    this.props.saveUser(data);
    this.props.history.push('/login');
  };

  handleLogin(e) {
    e.preventDefault();
    this.props.history.push('/login');
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
            <h1>SignUp Form</h1>
            <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="FullName"
                    className="form-control"
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ name }
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="Email address"
                    className="form-control"
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ email }
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ password }
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Register</button>
                <p>Already have account? <a href="#" onClick={ this.handleLogin }>Login here</a></p>
            </div>
          </form>
      </div>
    );
  }
}

Register.propTypes = {
    token_details: PropTypes.any,
    error: PropTypes.any,
    loading: PropTypes.bool,
};
  
Register.defaultProps = {
    error: {},
    loading: false,
    token_details: [],
};
  
function mapStateToProps(state) {
    return {
        token_details: state.userReducer.token_details,
        loading: state.userReducer.loading,
        error: state.userReducer.error
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        saveUser: (user) => dispatch(saveUser(user)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
