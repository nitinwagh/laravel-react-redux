import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      title: '',
      body: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };

  handleReset() {
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
                <input
                type="text"
                placeholder="Title"
                className="form-control"
                name="title"
                onChange={ this.handleInputChange }
                value={ this.state.title }
              />
            </div>
            <div className="form-group">
              <textarea
                cols="19"
                rows="8"
                placeholder="Body"
                className="form-control"
                name="body"
                onChange={ this.handleInputChange }
                value={ this.state.body }>
              </textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Add Post</button>
              <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
                Reset
              </button>
            </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);