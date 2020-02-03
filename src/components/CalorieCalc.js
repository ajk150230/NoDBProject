import React from 'react'
import axios from 'axios'

export default class CalorieCalc extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <input onChange={(e)=>this.props.calc(e.target.value)}
                placeholder='Enter Number of Servings'></input>
            </div>
        )
    }
}