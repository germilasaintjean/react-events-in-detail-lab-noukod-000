// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends React.Component {

  handleDelayedClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)},
      this.props.delay
        )
  }

  render () {
    return (
      <div>
      <bunton type="submit" value="button" onClick={this.handleDelayedClick}></button>
      </div>
    )
  }

}
