import axios from 'axios'
import React from 'react'

const FilteredRoute = ({item, setRouteStopArray, setSelectedRoute, selectedRoute}) => {

    const FetchRouteAllStop = (route,bound) => {
        setRouteStopArray([])
        setSelectedRoute({route:route,bound:bound})
        bound = bound == 'I' ? 'inbound' : 'outbound'
        axios.get(`https://data.etabus.gov.hk/v1/transport/kmb/route-stop/${route}/${bound}/1`)
        .then(data=> setRouteStopArray(data.data.data))
        .catch(err=>console.log(err))
    }

  return (
    <>
        {
            item.service_type == '1' 
            ?
                 <div className='bg-gray-300 px-2 py-1 min-w-full'>
                    <button 
                    onClick={()=>FetchRouteAllStop(item.route,item.bound)} 
                    className={`
                        ${selectedRoute.route == item.route && selectedRoute.bound == item.bound ? ' bg-pink-300' : 'bg-green-200'} 
                        w-full min-h-10 border-2 cursor-pointer
                        `}
                    >
                        <h3>{item.route} 前往 - {item.dest_tc}</h3>
                    </button>
                </div>
            :
            null   
        }
    </>
  )
}

export default FilteredRoute