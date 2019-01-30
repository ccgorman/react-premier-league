import React from 'react';
import classes from './Blog.css';

const blog = (props) => (
    <div className={classes.Blog} onClick={props.clicked}>
   		<div>
    		<img src={props.imageUrl} alt={props.name} />
    	</div>
        <div>
            <div className={classes.Name}>{props.name}</div>
        </div>
    </div>
);

export default blog;