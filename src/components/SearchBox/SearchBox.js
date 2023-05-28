import React, { Component } from "react";
import "./SearchBox.css";

export class SearchBox extends Component {
    render() {
        const { onChangeHandler, placeholder, className } = this.props;
        return (
            <>
                <input
                    className={`search-box ${className}`}
                    type="search"
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </>
        );
    }
}
