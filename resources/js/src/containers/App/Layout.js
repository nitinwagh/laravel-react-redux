import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import RenderRoute from './RenderRoute';

export default class Layout extends React.Component{
    render(){
        return(
            <Router>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <RenderRoute />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
