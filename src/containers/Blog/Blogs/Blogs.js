import React, { Component } from 'react';
import axios from '../../../axios';
import Blog from '../../../components/Blog/Blog';
import classes from './Blogs.css';

class Blogs extends Component {
	state = {
        blogs: [],
        error: false
    }

    componentDidMount () {
        axios.get( '/cakes' )
            .then(
            	response => {
                	this.setState({blogs: response.data});
           		}
           	)
            .catch(
            	error => {
                	this.setState({error: true});
            	}
            );
    }

    blogSelectedHandler = ( id ) => {
        this.props.history.push( '/blog/' + id );
    }
	
	render() {
		let blogs = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
        	blogs = this.state.blogs.map(blog => {
        		//just some basic validation there are a lot of bad URLs to images
        		if (blog.imageUrl.endsWith("jpg")) {
	        		return <Blog 
                        key={blog.id}
	                    name={blog.name} 
	                    imageUrl={blog.imageUrl}
                        clicked={() => this.blogSelectedHandler(blog.id)} />;
                }
                return null;
            });
        }
		
		return (
            <div>
                <p>Steps</p>
                <ul>
                    <li>npm run eject</li>
                    <li>Open files webpack.config.dev.js and webpack.config.prod.js and change test: cssRegex in loader: getStyleLoaders() add modules: true, localIdentName: '[name]__[local]__[hash:base64:5]'</li>
                    <li>npm install --save prop-types</li>
                    <li>npm install --save axios</li>
                    <li>npm install --save react-router-dom</li>
                    <li>Testing samples put in place - install enzyme as well as Jest, which is installed with create react app</li>
                    <li>npm install --save enzyme react-test-renderer enzyme-adapter-react-16</li>
                    <li>run npm test</li>
                </ul>
    			<section className={classes.Blogs}>
    				{blogs}
    			</section>
            </div>
		);
	}
}

export default Blogs;
