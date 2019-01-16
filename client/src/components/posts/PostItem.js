import React, {Component} from 'react';
import {connect} from 'react-redux';


class PostItem extends Component {
  render() {
    const {post} = this.props;
    return (
       <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img className="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt="" />
            </a>
            <br />
            <p className="text-center">John Doe</p>
            </div>
            <div className="col-md-10">
            <p className="lead">{post.text}</p>
            <button type="button" className="btn btn-light mr-1">
              <i className="text-info fas fa-thumbs-up"></i>
            <span className="badge badge-light">4</span>
            </button>
            <button type="button" className="btn btn-light mr-1">
              <i className="text-secondary fas fa-thumbs-down"></i>
            </button>
            <a href="post.html" className="btn btn-info mr-1">
              Comments
            </a>
          </div>
        </div>
      </div>
    );
    
  }  
  
}

export default PostItem;