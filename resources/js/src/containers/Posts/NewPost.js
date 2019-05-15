import React from 'react';
import { connect } from 'react-redux';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      post: {
        title: '',
        body: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInputChange (e) {
    let post = this.state.post;
    post[e.target.name] = e.target.value;
    this.setState({post});
  };

  handleSubmit(e) {
    e.preventDefault();
    let post = this.state.post;
    if (post.title.trim() && post.body.trim()) {
      // this.props.onAddPost(post);
      this.handleReset();
      this.props.history.push('/posts')
    }
  };

  handleReset() {
    this.setState({
      post: {
        title: '',
        body: ''
      }
    });
  };

  render() {
    const {post} = this.state;
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
                value={ post.title }
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
                value={ post.body }>
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
      // dispatch(createPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);