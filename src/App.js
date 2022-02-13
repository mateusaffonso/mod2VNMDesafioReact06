import React, { Component } from "react"
import "./App.css"
class App extends Component {

  state = {
    number: 0

  }

  score = () => {
    
    this.setState ({
      number: this.state.number <= 9 ? this.state.number + 1 : 0
    })
    }
  


  render() {
    return(
      <div className="containerOn">
        <div className="containerIn">

        <h1>Contador Vai na Web</h1>
        <p><strong>{this.state.number}</strong></p>
        <button onClick={this.score}>Contar</button>

        </div>
      </div>
    )
  }
}

export default App