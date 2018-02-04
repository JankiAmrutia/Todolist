import React from 'react';

export default class TextField extends React.Component{
    render(){
        return(
            <input type="text" className="form-control" value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange}/>
        )
    }
}