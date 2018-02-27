import React, {Component} from 'react';
import './App.css';
import Chart from './components/chart'

const API_URL = "http://localhost:5000/";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        };
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => {
                if (response.ok) {
                    return  response.json()
                }
                else {
                    throw new Error ('something went wrong')
                }
            })
            .then(response => this.setState({
                results: response.results.filter((r)=>{
                        return r.name === 'JavaScript';
                    })
                })
            )}

    render() {
        const {results} = this.state;
        console.log(results);

        return (
            <div className="App">
                <Chart data={results}/>
            </div>
        );
    }
}

export default App;
