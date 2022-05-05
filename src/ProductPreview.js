import React from 'react';
import ProductData from './ProductData';
import classes from './ProductPreview.module.css';
const ProductPreview = (props) => {
    return (
        <div className={classes.showcase}>
            <img src={props.url} alt="smartwatch_showcase" />
            {
                props.showHeartBeatSection ?
                    <div className={classes.HeartBeatSection}><i className="fas fa-heartbeat"></i><p>78</p></div>
                    :
                    <div className={classes.TimeSection}><p>{props.time}</p></div>
            }
        </div>
        )
}
export default ProductPreview;