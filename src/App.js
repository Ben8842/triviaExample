import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startButton: true,
      categoryDisplay: false,
    };
  }
  //constructor(props) {}
  //componentDidMount() {}
  handleStart() {
    this.setState({
      startButton: false,
      categoryDisplay: true,
    });
  }

  render() {
    var { startButton, categoryDisplay } = this.state;
    const triviaStartButton = (
      <div>
        <button onClick={() => this.handleStart()}>Start Trivia</button>
      </div>
    );

    const categoryChoices = (
      <div>
        <h3>Choose Category</h3>
      </div>
    );

    return (
      <div>
        {startButton ? triviaStartButton : null}
        {categoryDisplay ? categoryChoices : null}
      </div>
    );
  }
}

export default App;
