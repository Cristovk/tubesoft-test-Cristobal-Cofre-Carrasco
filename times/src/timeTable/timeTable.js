import React, {useState, useEffect} from 'react'
import './timeTable.css'
import axios from 'axios'

// score 

const TimeTable = () =>{

   const [all, setAll] = useState([])
   const [showMarks, setShowMarks] = useState(false)

   let showM = () => setShowMarks(!showMarks)  


 const getAll= () => {
        axios.get('http://localhost:4000/api/all')
        .then(all => {
                    
            setAll(all.data.data)
                    
            }).catch(e => {
                    console.log(e)
            })
        }

useEffect(() =>{
    getAll()
    },[all]
)


let idx = ()  =>{

   let ids  = Array.from({length:11}, (l, i) =>i)
 
    return ids
    }

let value = idx().slice(1).values()

let index = () =>{

      for (let val of value)
      
       return val
 }



return (

    <div className='Marks'>
   
    
    <div className='timesMarks'>
        <div className='row'>
        {all.map((a) => (


            <div key={a.id}>
                <section className='tab'>
                    <h4> {index() + '.'} </h4>
                    <h4>{a.times}</h4>
                </section>
            </div>
        ))}
        </div>
    </div>
</div>
    );
}
// module.exports = {
//     getAll: getAll,
//     idx : idx,
//     index: index

// }
export default TimeTable;
