import React, { Component } from "react";

export default class BoxClass extends Component {
    render() {
        // console.log("전달받은프롭스", this.props);
        return (
            <div className="box">
                <h2>{this.props.title}</h2>
                {/* <img src={`${myProps.item.img}`} /> */}
                <div>{this.props.item && this.props.item.name}</div>
                <img
                    src={this.props.item && this.props.item.img}
                    alt={this.props.item && this.props.item.name}
                />
            </div>
        );
    }
}
