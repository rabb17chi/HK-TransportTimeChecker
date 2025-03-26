import axios from 'axios'
import React from 'react'

const FilteredRoute = ({item, setRouteStopArray}) => {

    const FetchRouteAllStop = (route,bound) => {
        bound = bound == 'I' ? 'inbound' : 'outbound'
        axios.get(`https://data.etabus.gov.hk/v1/transport/kmb/route-stop/${route}/${bound}/1`)
        .then(data=>
            setRouteStopArray(data.data.data)
        )
        .catch(err=>console.log(err))
    }

  return (
    <>
        {
            item.service_type == '1' 
            ?
                 <div className='bg-gray-300 p-2 min-w-full'>
                    <button 
                    onClick={()=>FetchRouteAllStop(item.route,item.bound)} 
                    className='bg-green-200 w-full min-h-10'
                    >
                        <h1>{item.route} 前往 - {item.dest_tc}</h1>
                    </button>
                </div>
            :
            null   
        }
    </>
  )
}

export default FilteredRoute