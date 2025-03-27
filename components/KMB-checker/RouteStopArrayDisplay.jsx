import axios from 'axios'
import React, { useState } from 'react'
import { KMBTimeDiff } from '../../scripts/KMB-page/kmbTimeDiff'

const RouteStopArrayDisplay = ({routeStopArray,fullStopArray}) => {

    const [selectedStop,setSelectedStop] = useState('')
    const [seq,setSeq] = useState('')
    const [busETA,setBusETA] = useState([])

    const getChineseName = (stopId) => {
        return fullStopArray.filter(item=>item.stop==stopId)[0].name_tc
    }

    const fetchStopBusTime = (stopId,route,seqId) => {
        setBusETA([])
        setSelectedStop(stopId)
        setSeq(seqId)
        console.log(seqId)
        axios.get(`https://data.etabus.gov.hk/v1/transport/kmb/eta/${stopId}/${route}/1`)
        .then(data=>setBusETA(data.data.data))
        .catch(err=>console.log(err))
    }
  return (
    <div className='pt-1 bg-gray-300 max-h-[640px] overflow-auto'>
        {
            routeStopArray.map((item,index)=>{
                return <div key={index} className='m-2 border-2'>

                            <button 
                            onClick={()=>fetchStopBusTime(item.stop, item.route, item.seq)}
                            className='w-full min-h-10 bg-yellow-100'
                            id={item.seq}
                            >
                                {getChineseName(item.stop)}
                            </button>

                            { item.stop == selectedStop && seq == item.seq ?
                                <ul>
                                { 
                                busETA.map((ETAitem,index)=>{
                                    if (ETAitem.seq == seq) {
                                        if (ETAitem.eta !== null) {
                                            return <li 
                                            key={index} 
                                            className='bg-green-200 list-none px-4'>
                                                {KMBTimeDiff(ETAitem.eta.slice(14,-9),index)}
                                            </li> 
                                        }  
                                            return <li key={index}><span className='font-bold'>無資料</span></li>
                                    }
                                })
                                }
                                </ul>
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