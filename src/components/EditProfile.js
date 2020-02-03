import React, { Component } from 'react'
import axios from 'axios'


export default class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            weight: 0,
            height: 0,
            activitylevel: '',
            dailycalorie: 0,
            caloriegoal: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
    }
    componentDidMount(){
        const {name, weight, height, activitylevel, dailycalorie, caloriegoal}=this.props.user
        this.setState({name, weight, height, activitylevel, dailycalorie, caloriegoal})
    }
    handleChange(inp) {
        this.setState({ [inp.target.name]: inp.target.value })
    }
    updateProfile() {
        axios
            .put(`/api/user/${this.props.user.id}`, this.state)
            .then(res => this.props.putInfo(res.data))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <input
                    name='weight'
                    type = 'number'
                    placeholder="Enter New Weight"
                    onChange={this.handleChange} />
                <input
                    name='height'
                    type = 'number'
                    placeholder="Enter New Height"
                    onChange={this.handleChange} />
                <input
                    name='activitylevel'
                    type = 'text'
                    placeholder="Enter New Activity Level"
                    onChange={this.handleChange} />
                <input
                    name='dailycalorie'
                    type = 'number'
                    placeholder="Enter New Daily intake"
                    onChange={this.handleChange} />
                <input
                    name='caloriegoal'
                    type = 'number'
                    placeholder="Enter New Calorie Goal"
                    onChange={this.handleChange} />
                <button onClick={this.updateProfile}>Edit</button>
            </div>
        )
    }
}
