import React from "react";
import axios from "axios";
import Btn from "./components/btn";
import "./App.css";

class App extends React.Component {
  state = { jokeText: null };
  randomClick = async () => {
    const results = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ jokeText: results.data.value });
  };
  categoryClick = async (value) => {
    const results = await axios.get("https://api.chucknorris.io/jokes/random", {
      params: { category: value },
    });
    this.setState({ jokeText: results.data.value });
  };
  render() {
    return (
      <div className="App">
        <Btn value="random" onClick={this.randomClick} />
        <div className="categories">
          <Btn value="animal" onClick={this.categoryClick} />
          <Btn value="career" onClick={this.categoryClick} />
          <Btn value="celebrity" onClick={this.categoryClick} />
          <Btn value="fashion" onClick={this.categoryClick} />
          <Btn value="movie" onClick={this.categoryClick} />
          <Btn value="money" onClick={this.categoryClick} />
          <Btn value="sport" onClick={this.categoryClick} />
          <Btn value="travel" onClick={this.categoryClick} />
        </div>
        <div className="JokeText">
          {this.state.jokeText}
        </div>
      </div>
    );
  }
}

export default App;
