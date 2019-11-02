import React, { Component } from 'react';


class App2 extends Component {

    constructor() {
        super();
        this.state = {
            "Name": "Nothing Entered", 
            "Age": -1
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(
            { [event.target.name]: event.target.value }
        )
    }
    

    render() {
        return (
            <form>
                <input type="Text" name="Name" placeHolder="Enter your name" onChange={this.handleChange} />
                <input type="Text" name="Age" placeHolder="Enter your age" onChange={this.handleChange} />
                <h1>{this.state.Name}</h1>
                <h1>{this.state.Age}</h1>
            </form>    
        )
    }

}


export default App2;   