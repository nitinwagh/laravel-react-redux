import React from 'react';
import NewPost from './Posts/NewPost';
import PostList from './Posts/PostList';

export default class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <NewPost />
                    </div>
                    <div className="col-md-6">
                        <PostList />
                    </div>
                </div>
            </div>
        );
    }
}
