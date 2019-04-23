
// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {

    getCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render () {
        return (
            <div>
                <button type="submit" value="button" onClick={this.getCoordinates}></button>
            </div>

        )
    }

}
