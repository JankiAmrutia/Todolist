import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import TextField from './components/TextField';
import List from './List';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }
    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({ 'term': "" });
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return ( < div className = "App" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-12" >
            <
            div className = "notes" >
            <
            form className = "App"
            onSubmit = { this.onSubmit } >
            <
            div className = "col-md-10" >
            <
            TextField value = { this.state.terms }
            onChange = { this.onChange }
            /> < /
            div > <
            div className = "col-md-2" > <
            Button className = "btn btn-warning"
            buttonText = "Add" / > < /div> < /
            form >
            <
            List items = { this.state.items }
            />   < /
            div > < /
            div > <
            /div> < /
            div > <
            /div >
        );
    }
}


export default App;