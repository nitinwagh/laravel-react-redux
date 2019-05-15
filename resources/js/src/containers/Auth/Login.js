import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/Auth';
import { PropTypes } from 'prop-types';
import { setToken } from '../../services/token';

class Login extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
        email: '',
        password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleInputChange (e) {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const data = {
        email, password
    };
    this.props.loginUser(data);
  };

  componentDidUpdate(prevProps) {
    if (!this.props.loading) {
      this.props.setToken(this.props.token_details);
    }
  }

  handleRegister() {
    this.props.history.push('/register');
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
            <h1>Login Form</h1>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Username"
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
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p>Don't have account? <a href="#" onClick={ this.handleRegister }>Register here</a></p>
                </div>
          </form>
      </div>
    );
  }
}

Login.propTypes = {
    token_details: PropTypes.any,
    error: PropTypes.any,
    loading: PropTypes.bool,
};
  
Login.defaultProps = {
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
        loginUser: (data) => dispatch(loginUser(data)),
        setToken: (data) => setToken(data)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);