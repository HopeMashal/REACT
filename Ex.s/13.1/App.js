import React from "react";
import data from "./data";
import Name from "./components/Name";
import Card from "./components/Card";
import "./App.css";

class App extends React.Component {
  state = { names: [], beforeNinety: [] };

  componentDidMount() {
    this.setState({
      names: this.getNames(),
      beforeNinety: this.beforeNinety(),
    });
  }
  getNames = () => {
    return data.map(function (data) {
      return data.name;
    });
  };
  beforeNinety = () => {
    const nArr = [];
    data.forEach((person) => {
      if (person.birthday.split("-")[2] < 1990) {
        nArr.push(person);
      }
    });
    return nArr;
  };

  Names = () => {
    return this.state.names.map((pName, i) => {
      return <Name key={i} name={pName} />;
    });
  };

  BeforeNinety = () => {
    return this.state.beforeNinety.map((person, i) => {
      return <Card key={i} data={person} />;
    });
  };

  render() {
    return (
      <div className="App">
        <div className="names-container">{this.Names()}</div>
        <div className="people-container">{this.BeforeNinety()}</div>
      </div>
    );
  }
}

export default App;
