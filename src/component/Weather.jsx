import React from 'react'
import "./weather.css"
import react, {useState} from 'react'
import axios from 'axios'


function Weather() {

    const [data,setData]=useState({})
    const [location,setLocation]=useState('')

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f349a1ef303f64aa0ba927b49b2c1570`

    const searchLocation = (event) =>{
        if (event.key==='Enter'){
            axios.get(url)
            .then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')
        }
     
    }

  return (
    <div className='body'>
        <div className="container">
            <div className="top">
                <div className="topheading">
                <input className='headinginput' value={location}
        onChange={events=>setLocation(events.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
         type="text" />
                    <p className='location'>{data.name}</p>
                </div>
                <div className="topbody">
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    
                   

                </div>
            </div>

        {data.name != undefined && 
            <div className="bottom">
                <div className="feel">
                    {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
                    <p>Feels like</p>
                </div>
                <div className="humidity">
                    {data.main ? <p>{data.main.humidity}%</p> : null}
                    <p>Humidity</p>
                </div>
                <div className="wind">
                    {data.wind ? <p>{data.wind.speed}MPH</p> : null}
                    <p>Wind Speed</p>
                </div>
            </div>
        }
        </div>
    </div>
  )
}

export default Weather