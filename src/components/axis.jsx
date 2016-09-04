import React from 'react';
import {axisLeft, axisBottom} from 'd3-axis';
import {select} from 'd3-selection';

export default class Axis extends React.Component {
  componentDidUpdate() {
    this.renderAxis();
  }

  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
    var node = this.refs.axis;
    var axis = (this.props.orient === 'bottom' ? axisBottom(this.props.scale) : axisLeft(this.props.scale)).ticks(5);
    select(node).call(axis);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}
