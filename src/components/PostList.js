import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostList extends Component {

    
    renderList = () => {
        return this.props.posts.map((post) => {
            return (
                <div className="item" key = {post.title}>
                    <i className="large middle aligned icon user"></i>
                    <div className='content'>
                        <div className='description'>
                            <h2>
                                {post.title}
                            </h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            );
        });
    };


    render() {
        return (
            <div className="ui relaxed divided list">
                <button onClick={this.props.fetch}></button>
                {
                    this.renderList()
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetch: fetchPosts })(PostList);