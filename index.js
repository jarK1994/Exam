const express =  require("express")
const app = express()
const bodyParser = require("body-parser")
var cors = require('cors')
var firebase = require('firebase')
var config = {
    apiKey: "AIzaSyD8jfh6YkD_4cinbmYGQvNtC9YX6lwHx6Y",
    authDomain: "exam-a2e9d.firebaseapp.com",
    databaseURL: "https://exam-a2e9d.firebaseio.com",
    projectId: "exam-a2e9d",
    storageBucket: "exam-a2e9d.appspot.com",
    messagingSenderId: "526322600214"
  }
  firebase.initializeApp(config);
var database = firebase.database()
app.use(cors())
app.use(bodyParser.json())
app.get('/',async(req,res) => {
    let province = []
    await database.ref('peopleIncome').once('value').then(snapshot => {
        province = snapshot.val()
    })
    res.send(province)
})

app.listen(3000,() => console.log('Example app listenning on Port 3000!'))