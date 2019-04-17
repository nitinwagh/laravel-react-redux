import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>User Authentication System</h3>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
