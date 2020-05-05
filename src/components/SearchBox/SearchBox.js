import React from 'react';

import classes from './SearchBox.module.scss';

const searchBox = (props) => {
    return (
        <div className={classes.SearchBox}>
            <input value={props.value} onChange={props.changed} placeholder="Search for Github Users" />
        </div>
    );
}

export default searchBox;