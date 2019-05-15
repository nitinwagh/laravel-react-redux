import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPost from '../Posts/NewPost';
import PostList from '../Posts/PostList';
import Main from './Main';
import NotFound from './NotFound';

const RenderRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/posts" component={PostList} />
            <Route path="/post/add" component={NewPost} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default RenderRoute;