require ('dotenv').config()
const ctrl = require ('./products_controller')
const express = require('express')
const app = express ()
const massive = require ('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
app.use(express.json())


app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.put('/api/products/:id',ctrl.update)
app.post('/api/products',ctrl.create)
app.delete('/api/products/:id',ctrl.delete)


massive({
        connectionString: CONNECTION_STRING,
        ssl : {rejectUnauthorized: false}
    })
        .then( dbInstance => {
            app.set('db', dbInstance)
            app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`))
        })
        .catch(err => console.log(err))





