import React from 'react'
import axios from 'axios'
import EditProfile from './EditProfile'

export default class UserProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            user: []
        }
        this.putInfo = this.putInfo.bind(this)
    }
    componentDidMount() {
        axios
            .get('/api/user')
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))
    }
    putInfo(param){
        this.setState({user: param})
    }
    render() {
        const {user}=this.state
        const userInfos = user.map(element => {
            return (
                <div id='profile'>
                    <img src={element.imgURL} />
                    <h1>{element.name}</h1>
                    <h4>{element.weight} pounds</h4>
                    <h4>{element.height} inches</h4>
                    <h4>Activity Level:{element.activitylevel} </h4>
                    <h4>Daily Calorie Intake:{element.dailycalorie}</h4>
                    <h4>Calorie Goal:{element.caloriegoal}</h4>
                </div>
            )
        })
        return (
            <div id='profilemenu'>
                {userInfos}
                <EditProfile user={this.state.user} putInfo={this.putInfo}/>
            </div>
        )
    }
}