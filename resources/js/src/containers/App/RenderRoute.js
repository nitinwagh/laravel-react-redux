import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPost from '../Posts/NewPost';
import PostList from '../Posts/PostList';
import Main from './Main';
import NotFound from './NotFound';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Logout from '../Auth/Logout';

function isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
}
  
function requireAuth(nextState, replace) {
    if (!isLoggedIn()) {
      replace({
        pathname: '/login'
      });
    }
}

const RenderRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/posts" component={PostList} onEnter={requireAuth} />
            <Route path="/post/add" component={NewPost} onEnter={requireAuth} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default RenderRoute;