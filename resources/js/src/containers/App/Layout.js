import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import NewPost from '../Posts/NewPost';
import PostList from '../Posts/PostList';
import Main from './Main';
import NotFound from './NotFound';

export default class Layout extends React.Component{
    render(){
        return(
            <Router>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                    <Link to="/post/add">New Post</Link>
                    </li>
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <Route exact path="/" component={Main} />
                                <Route path="/posts" component={PostList} />
                                <Route path="/post/add" component={NewPost} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
