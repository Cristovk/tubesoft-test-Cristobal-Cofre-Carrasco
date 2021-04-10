import Sequelize from 'sequelize'
import {sequelize} from '../database/database.js'

const Stamps = sequelize.define('stamps',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    times: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Stamps;