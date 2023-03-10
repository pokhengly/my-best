import React, { Component} from "react";
import logo from './logo.svg';
import './App.css';
import Greet from './componets/Greet'
import Welcome from './componets/Welcome';
import Hello from "./componets/Hello";
import Message from "./componets/Message";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Message/>
                {/*<Greet name="Bruce"  heroName="Batman">*/}
                {/*    <p>This is children props</p>*/}
                {/*</Greet>*/}
                {/*<Greet name="Clark"  heroName="Superman">*/}
                {/*    <button>Action</button>*/}
                {/*</Greet>*/}
                {/*<Greet name="Diana"  heroName="Wonder Woman"/>*/}
                {/*<Welcome name="Bruce"  heroName="Batman"/>*/}
                {/*<Welcome name="Clark"  heroName="Superman"/>*/}
                {/*<Welcome name="Diana"  heroName="Wonder Woman"/>*/}
                {/* <Hello /> */}
            </div>
        )
    }
}
export default App;
