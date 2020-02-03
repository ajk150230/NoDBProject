let id=1
const user=[
    {   
        id: 0,
        imgURL: 'https://i0.wp.com/www.artifacting.com/blog/wp-content/uploads/2010/11/Arrow.jpg?fit=200%2C126',
        name: 'Alex',
        weight: 160,
        height: 68,
        activitylevel: 'active',
        dailycalorie: 2800,
        caloriegoal: 3000,
    }
]

module.exports ={
    showInfo: (req, res) =>{
        res.status(200).json(user)
    },
    changeInfo: (req, res) =>{
        const id = user.findIndex(user => user.id === +req.params.id)
        const updateInfo={
            id,
            ...req.body
        }
        user.splice(id,1,updateInfo)
        res.status(200).json(user)
    }
}