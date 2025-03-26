import axios from 'axios'
import React, { useState } from 'react'
import { KMBTimeDiff } from '../../scripts/KMB-page/kmbTimeDiff'

const RouteStopArrayDisplay = ({routeStopArray,fullStopArray}) => {

    const [selectedStop,setSelectedStop] = useState('')
    const [busETA,setBusETA] = useState([])

    const getChineseName = (stopId) => {
        return fullStopArray.filter(item=>item.stop==stopId)[0].name_tc
    }

    const fetchStopBusTime = (stopId,route) => {
        setBusETA([])
        setSelectedStop(stopId)
        axios.get(`https://data.etabus.gov.hk/v1/transport/kmb/eta/${stopId}/${route}/1`)
        .then(data=>setBusETA(data.data.data))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        {
            routeStopArray.map((item,index)=>{
                return <div key={index} className='m-2 border-2'>

                            <button 
                            onClick={()=>fetchStopBusTime(item.stop,item.route)}
                            className='bg-yellow-200 w-full min-h-10'
                            >
                                {getChineseName(item.stop)}
                            </button>

                            { item.stop == selectedStop ?
                                <div>
                                {
                                busETA.map((item,index)=>{
                                    return <h3 
                                            key={index} 
                                            className='bg-green-200'>
                                                {KMBTimeDiff(item.eta.slice(14,-9),index)}
                                            </h3>
                                    
                                })}
                                </div>
                                :
                                null
                            }
                        </div>
            })
        }
    </div>
  )
}

export default RouteStopArrayDisplay