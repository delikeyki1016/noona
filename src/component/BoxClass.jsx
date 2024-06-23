import React, { Component } from "react";

export default class BoxClass extends Component {
    render() {
        // console.log("전달받은프롭스", this.props);
        let resultClass;
        this.props.result === "win"
            ? (resultClass = "win")
            : this.props.result === "lose"
            ? (resultClass = "lose")
            : (resultClass = "tie");

        return (
            <div className={`box ${resultClass}`}>
                <h2>{this.props.title}</h2>
                <div>{this.props.item && this.props.item.name}</div>
                <img
                    src={this.props.item && this.props.item.img}
                    alt={this.props.item && this.props.item.name}
                />
                <div>{this.props.result && this.props.result}</div>
            </div>
        );
    }
}
