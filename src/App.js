import React, { Component, useEffect } from 'react';
import TopBar from './TopBar';
import ProductData from './ProductData';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import './App.css';

class App extends Component {
    state = {
        ProductData: ProductData,
        url: ProductData.colorOptions[0].imageUrl,
        flag: [true, false, false, false],
        showHeartBeatSection: false,
        featurePos: 0,
        time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    }

    componentDidMount() {
        setInterval(() => {
            const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
            const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
            const currentSeconds = new Date().getSeconds() > 9 ? new Date().getSeconds() : '0' + new Date().getSeconds();
            this.setState({
                time: `${currentHour}:${currentMinutes}:${currentSeconds}`
            })
        }, 1000)
    }

    onSelectColorClick = (pos) => {
        const flag1 = this.state.flag.map((item, j) => {
            if (j !== pos) {
                if (item !== false) {
                    return false;
                }
                else {
                    return item;
                }
            }
            else {
                return true;
            }
        })
        this.setState({
            flag: flag1,
            url: ProductData.colorOptions[pos].imageUrl
        });
    }

    onFeatureBtnClick = (pos) => {
        if (pos === 1) this.state.showHeartBeatSection = true;
        else this.state.showHeartBeatSection = false;
        this.setState({ featurePos: pos })
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('Next State=> ', nextState.flag);
        console.log('Current State=> ', this.state.flag);
        console.log(`${nextState.flag===this.state.flag}`)
        console.log('Inside shouldComponentUpdate');
        if (nextState.flag === this.state.flag) {
            return false;
        }
        return true;
    }*/

    render() {
        console.log('Rendering AppJS');
        return (
            <div className="App">
                <TopBar></TopBar>
                <div className="showcase">
                    <ProductPreview url={this.state.url} showHeartBeatSection={this.state.showHeartBeatSection} time={this.state.time}/>
                </div>
                <div className="Details">
                    <ProductDetails data={this.state.ProductData} flag={this.state.flag} onSelectColorClick={this.onSelectColorClick} onFeatureBtnClick={this.onFeatureBtnClick} featurePos={this.state.featurePos} />
                </div>
            </div>
        );
    }
}

export default App;
