import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPost from '../Posts/NewPost';
import PostList from '../Posts/PostList';
import Main from './Main';
import NotFound from './NotFound';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

const RenderRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/posts" component={PostList} />
            <Route path="/post/add" component={NewPost} />
            
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}

export default RenderRoute;