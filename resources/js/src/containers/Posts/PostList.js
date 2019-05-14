import React from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Posts/Post';
import { deletePost } from '../../actions';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.posts !== nextProps.posts) {
      this.setState({ posts: nextProps.posts });
    }
  }

  render() {

    const onDelete = this.props.onDelete;
    const { posts } = this.state;

    return (
      <div>
        {posts.map(post => {
          return (
            <Post post={ post } onDelete={ onDelete } key={ post.id } />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);