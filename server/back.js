import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
//Importing routes
import stampRoute from './route/route.js'

//initialization
const ex = express();



//middlewares
ex.use( cors ( { origin: true}));
ex.use(express.urlencoded({ extended: true })); 



ex.use(morgan('dev'))

ex.use(express.json())

//routes
ex.use('/api', stampRoute)

export default ex