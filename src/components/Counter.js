import React, {Component} from "react";

//  Class component for the counter app
class Counter extends Component {
    // intial state
    state = {
        count: 0
    };

    // Method using arrow syntax
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render(){
        return(
            <div>
                <h1>Counter with Class Component</h1>
                <button onClick={this.increment}>
                    Clicked {this.state.count} times
                </button>
            </div>
        );
    };
}

export default Counter;