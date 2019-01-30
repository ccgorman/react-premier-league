import React, { Component } from 'react';
import axios from '../../../axios';
import classes from './UploadBlog.css';

class UploadBlog extends Component {
    state = {
        name: '',
        comment: '',
        yumFactor: 5,
        imageUrl: '',
        error: false,
        errorText: 'Something went wrong, try again!'
    }

    postDataHandler = () => {
        const data = {
            name: this.state.name,
            comment: this.state.comment,
            yumFactor: this.state.yumFactor,
            imageUrl: this.state.imageUrl
        };
        if (!this.state.name) {
            this.setState({error: true, errorText: 'Please supply a name!'});
        } else if (!this.state.imageUrl) {
            this.setState({error: true, errorText: 'Please supply an image!'});
        } else {
            axios.post('/cakes', data)
                .then(response => {
                    this.props.history.replace('/');
                })
                .catch(
                    error => {
                        this.setState({error: true});
                    }
                );
        }
    }

    render () {
        let title = <h1>Submit a Blog</h1>;
        if (this.state.error) {
            title = <h1 style={{color: 'red'}}>{this.state.errorText}</h1>;
        }
        return (
            <div className={classes.UploadBlog}>
                {title}
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>Comment</label>
                <textarea rows="4" value={this.state.comment} onChange={(event) => this.setState({comment: event.target.value})} />
                <label>URL</label>
                <input type="text" value={this.state.imageUrl} onChange={(event) => this.setState({imageUrl: event.target.value})} />
                <label>Yum Factor</label>
                <select value={this.state.yumFactor} onChange={(event) => this.setState({yumFactor: event.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <button onClick={this.postDataHandler}>Submit</button>
            </div>
        );
    }
}

export default UploadBlog;
