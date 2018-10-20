import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  constructor(){
    super();
  }

  renderPosts() {
    
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        {this.props.posts
        ?
          <ul className="list-group">{this.renderPosts()}</ul>
        :
          <div>Posts Loading...</div>
        }
      </div>
    );
  }
}

function mapStateToProps({posts}) {
  return {posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);