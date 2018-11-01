const express = require('express')
const app = express()
const axios = require('axios')

app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

app.get('/', async(request, response) => {
    const content = await axios.get('https://como-fazer-dvp.firebaseio.com/teste.json')
    console.log(content.data)
    response.render('index', { i: content.data})
})

app.get('/categorias/nova', (req, res) => {
    res.render('categorias/nova')
})

/*
await axios.port('https://como-fazer-dvp.firebaseio.com/categorias.json', {
    categoria: 'Receitas'
})
*/


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Server is running on port: ', port)
    }
})