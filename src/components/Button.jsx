import React from 'react';
export default class Button extends React.Component{
    render(){
        return(
            <button type="button" className={this.props.className}>{this.props.buttonText}</button>
        )
    } 
}