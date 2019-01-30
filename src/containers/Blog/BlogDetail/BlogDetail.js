import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from '../../../axios';
import classes from './BlogDetail.css';

class BlogDetail extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id) ) {
            axios.get( '/cakes/' + this.props.match.params.id )
                .then( response => {
                    this.setState( { loadedPost: response.data } );
                } );
        }
    }

    returnHandler = ( ) => {
        this.props.history.push( '/' );
    }

    render () {
        console.log(this.props);
        let blog = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        if ( this.state.loadedPost ) {
            blog = (
                <div className={classes.BlogDetail}>
                    <h1>{this.state.loadedPost.name}</h1>
                    <p><img src={this.state.loadedPost.imageUrl} alt={this.state.loadedPost.name} /></p>
                    <p>{this.state.loadedPost.comment}</p>
                    <p><a onClick={this.returnHandler}>return to list</a></p>
                </div>

            );
        }
        return blog;
    }
}

BlogDetail.propTypes = {
    match: PropTypes.object
};

export default BlogDetail;
