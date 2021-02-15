const express = require('express')
const app = express()
const port = 3000

const toDoLists = ["운동하기"]

app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req,res) => {
    res.render('index', {toDoListTitle: '오늘의 할 일: ' + toDoLists.length, toDoLists: toDoLists})
})

// request, response
app.post('/add_list', (req,res) => {
    const newContent = req.body.content
    console.log(newContent + '추가')
    toDoLists.push(newContent)
    console.log(toDoLists)
    res.redirect('/')
})

app.post('/delete_work', (req, res) => {
    console.log(toDoLists.pop(), toDoLists)
    res.redirect('/')
})

app.post('/update_work', (req, res) => {
    console.log(req.get('id'))
    res.redirect('/')
})

app.listen(port, () => {
    console.log('connected!')
})
