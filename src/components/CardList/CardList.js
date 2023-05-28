import React, { Component } from "react";
import { Card } from "../Card/Card";
import "./CardList.css";

export class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map((monster, i) => {
                    return (
                        <Card
                            key={i}
                            id={monsters[i].id}
                            name={monsters[i].name}
                            email={monsters[i].email}
                        />
                    );
                })}
            </div>
        );
    }
}
