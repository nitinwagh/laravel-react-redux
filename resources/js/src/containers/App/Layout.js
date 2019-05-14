import React from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
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
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts" activeClassName="active">Posts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/post/add" activeClassName="active">New Post</NavLink>
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
