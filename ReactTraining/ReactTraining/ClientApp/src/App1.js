import React, { Component } from 'react';


class App1 extends Component {

    constructor() {
        super();
        this.state = {
            "Character": {}, 
            "isLoading": false
        }
    }

    componentDidMount() { 

        this.setState({"isLoading" : true})

        // fetch data 
        fetch("https:////swapi.co/api/people/1")
            .then(response => response.json()) // promise, turn to json
            .then(data => this.setState({ "Character": data, "isLoading": false }))  // print out the data
    }

    render() {
        const text = this.state.isLoading ? " Loading" : " " + this.state.Character.name; 

        return (
            <h1> Hello World! {text} </h1>
        );
    }
}


export default App1;   