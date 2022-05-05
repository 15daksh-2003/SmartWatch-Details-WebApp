import React from 'react';
import classes from './TopBar.module.css'
const TopBar = () => {
    return (
        <div className={classes.TopBar}>
            <img src={require("./amazon-logo.png")} alt="amazon-logo"/>
        </div>
        )
}
export default TopBar;