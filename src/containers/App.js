import { Component } from "react";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { CardList } from "../components/CardList/CardList";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    fetchData = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            this.setState(() => {
                return { monsters: data };
            });
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;
        const { onSearchChange } = this;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });
        return (
            <div className="App">
                <h1>Monsters Rolodex(Class-based)</h1>
                <SearchBox
                    className="monsters-search-box"
                    onChangeHandler={onSearchChange}
                    placeholder={"Search Monsters"}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;

// https://jsonplaceholder.typcode.com/users
