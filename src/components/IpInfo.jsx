import React, { Component } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import Info from './Info';
import getInfo from '../services/getInfo'

export default class IpInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: null,
            isLoading: true
        }
    }

    componentDidMount() {
        getInfo().then((data) => {
            this.setState({
                info: data,
                isLoading: false
            })
        })
    }

    render() {
        const isLoading = this.state.isLoading;

        return (
            <>
                {isLoading ?
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    /> :
                    <Info data={this.state.info} />
                }
            </>

        )
    }
}
