import React from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Posts/Post';
import { PropTypes } from 'prop-types';
import { getPosts } from '../../actions/Post';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const posts = this.props.posts;
    this.setState({posts});
    this.props.fetchPosts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.posts !== this.props.posts) {
      const posts = this.props.posts;
      this.setState({ posts });
    }
  }

  render() {

    const { loading } = this.props;
    const onDelete = this.props.onDelete;
    const { posts } = this.state;
    return (
      <div>
        <h1>Posts List</h1>
        {loading && <div>Loading</div>}
        {(posts.length > 0) && posts.map(post => {
          return (
            <Post post={ post } onDelete={ onDelete } key={ post.id } />
          );
        })}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.any,
  error: PropTypes.any,
  loading: PropTypes.bool,
};

PostList.defaultProps = {
  error: {},
  loading: false,
  posts: [],
};

function mapStateToProps(state) {
  return {
    posts: state.postReducer.posts,
    loading: state.postReducer.loading,
    error: state.postReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(getPosts()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);