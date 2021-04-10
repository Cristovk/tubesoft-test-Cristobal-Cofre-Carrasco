
import Stamps from '../Model/stamp.js'

export  async function createStamp(req, res) {
    const times = req.body.times
    console.log(times)
    try {
    const newStamps = await Stamps.create({
        times : times
    });

    if(newStamps){
       return res.status(200).json({
            message: 'New timestamp',
            data: newStamps
        })
    }
 } catch(e) {
     console.log(e)
    res.status(500).json({
        message:'Something goes wrong',
        data: {}
    })
 } 
};

export  async function getAllData(req, res){
    
    try {
    const allStamps = await Stamps.findAll({
        
        order: [
            ['id','DESC']
        ], 
        limit: 10
    });

    if(allStamps){
       return res.json({
            message: 'All timestamps',
            data: allStamps
        })
    }
 } catch(e) {
     console.log(e)
    res.status(500).json({
        message:'Something goes wrong',
        data: {}
    })
 } 
}
   

