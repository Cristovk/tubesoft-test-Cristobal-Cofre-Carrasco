import React, {useState, useEffect} from 'react'
import './chronometer.css'
import { getAll } from '../timeTable/timeTable.js'
import axios from 'axios'

const Chronometer = () =>{

    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [saveTimes, setSaveTimes] = useState([{}])

   


    let minu = "0" + Math.floor((time / 60000) % 60)
    let minute = minu.slice(-2)
    
    let sec = "0" + Math.floor((time / 1000) % 60)
    let second = sec.slice(-2)
    
    let mill = "0" + Math.floor((time / 10) % 100)
    let millisecond = mill.slice(-2)
    
    
    let total = `${minute}:${second}:${millisecond}`
    
    
    
    //////USEeffect//////////
    
    const stoptime = async (saveTimes) => {
      
     
        const url = 'http://localhost:4000/api/post'

        axios.post(url, {times: total})  
          .then(res => {
            setSaveTimes([res.data])
          })
          .catch((erro) => {
            console.log(erro)
          })

        

          setTime(0)

    }

    useEffect(() => {
      let interval = null
      
     
      
      if(start){
        interval = setInterval(() => {
          setTime(pTime => pTime + 10)
        }, 10)
        
      }else{
        
        clearInterval(interval)
        
      }
      return () => clearInterval(interval)
      
    }, [start])
    
    
          
    
    return (
      <div className="App">
          
        <div className='timeNumber'>

          <span  id='minute'  >{minute}:</span>
          <span id='second' >{second}:</span>
          <span id='millisecond' >{millisecond}</span>

        </div>


      <div className='bx'>

        <div >

          {!start && time === 0 && (
            <a href='#' className='bxstart' onClick={() => setStart(true)}><h3>START</h3></a>
          )}
        </div>

        <div>
          {start && (
            <a href='#' className='bxpause' onClick={() => setStart(false)}><h3>PAUSE</h3></a>
          )}
        </div>

        <div>
            {!start && time !== 0 && (
              <a href='#' className='bxresumen' onClick={() => setStart(true)}>RESUMEN</a>
            )}


        </div>

        <div >
        {!start && (
            <a href='#' className='bxstop' onClick={stoptime}><h3>STOP</h3></a>
          )}

        </div>


       </div>

      </div>
    );
}

export default Chronometer;