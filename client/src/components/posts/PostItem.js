import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  onDeleteClickHandler = id => {
    this.props.deletePost(id);
  };

  onAddLikeHandler = id => {
    this.props.addLike(id);
  };

  onRemoveLikeHandler = id => {
    this.props.removeLike(id);
  };

  findUserLike = likes => {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { post, auth, showActions } = this.props;
    const iconDefaulClass = 'fas fa-thumbs-up';
    return (
      <div className='card card-body mb-3'>
        <div className='row'>
          <div className='col-md-2'>
            <a href='profile.html'>
              <img
                className='rounded-circle d-none d-md-block'
                src={post.avatar}
                alt=''
              />
            </a>
            <br />
            <p className='text-center'>{post.name}</p>
          </div>
          <div className='col-md-10'>
            <p className='lead'>{post.text}</p>
            {showActions ? (
              <span>
                <button
                  onClick={() => this.onAddLikeHandler(post._id)}
                  type='button'
                  className='btn btn-light mr-1'
                >
                  <i
                    className={
                      this.findUserLike(post.likes)
                        ? `text-info ${iconDefaulClass}`
                        : iconDefaulClass
                    }
                  />
                  <span className='badge badge-light'>{post.likes.length}</span>
                </button>
                <button
                  onClick={() => this.onRemoveLikeHandler(post._id)}
                  type='button'
                  className='btn btn-light mr-1'
                >
                  <i className='text-secondary fas fa-thumbs-down' />
                </button>
                <Link to={`/post/${post._id}`} className='btn btn-info mr-1'>
                  Comments
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    onClick={() => this.onDeleteClickHandler(post._id)}
                    className='btn btn-danger mr-1'
                  >
                    <i className='fas fa-times' />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTyepes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
