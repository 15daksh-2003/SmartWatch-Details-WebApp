import React from 'react';

import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.btn_feature]
        if (pos === props.featurePos) {
            classArr.push(classes.SelectedBtnFeature);
        }
        return (
            <button key={pos} className={classArr.join(' ')} onClick={()=>props.onFeatureBtnClick(pos)} >{item}</button>
            );
    })
    const ColorOptions = props.data.colorOptions.map((item, pos) => <div key={pos} className={`${classes.watchColor} ${props.flag[pos] === false ? "" : classes.watchColor1}`} onClick={() => props.onSelectColorClick(pos)}><img src={item.imageUrl} alt={item.styleName} /></div>)
    return (
        <div className={classes.Details}>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            <h3>Select Color</h3>
            <div className={classes.Watch_styles}>{ColorOptions}</div>
            <h3>Features</h3>
            <div className={classes.btn_group}>{featureList}</div>
            <button className={classes.btn_buy}>Buy Now</button>
        </div>
        )
}
export default ProductDetails;