import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import classes from './Blog.css';
import Blogs from './Blogs/Blogs';
import UploadBlog from './UploadBlog/UploadBlog';
import BlogDetail from './BlogDetail/BlogDetail';

class Blog extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav className={classes.Blog}>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                            >Blogs</NavLink></li>
                            <li><NavLink
                            	to='/upload-blog'
                            >Upload Blog</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                	<Route path="/upload-blog" component={UploadBlog} />
                    <Route path="/blog/:id" component={BlogDetail} />
                    <Route path="/" component={Blogs} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
