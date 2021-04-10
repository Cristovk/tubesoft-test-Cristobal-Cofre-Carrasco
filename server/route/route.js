import express from 'express'
const Router = express.Router()

import {createStamp, getAllData} from '../controller/stamp.controller.js'

//api 
Router.post('/post', createStamp)

Router.get('/all', getAllData)


export default Router