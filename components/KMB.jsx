import React, { useEffect, useState } from 'react'
import FilteredArrayDisplay from './KMB-checker/FilteredArrayDisplay'
import RouteStopArrayDisplay from './KMB-checker/RouteStopArrayDisplay'

const KMB = ({routeDataArray,stopDataArray}) => {
  const [routeInput,setRouteInput] = useState('')

  const [routeStopArray, setRouteStopArray] = useState([])

  return (
    <div className='p-3'>
      <input 
      type='text'
      name='kmb-route-input'
      value={routeInput}
      placeholder='請輸入路線...' 
      onChange={(e)=>setRouteInput(e.target.value)}
      maxLength={4}
      className='w-full text-center text-2xl bg-pink-200 mb-4 py-2 h-10'
      />

        {/* 根據RouteInput > Map and filter Route-Array > return route-button */}
          {routeInput.length > 0 ?
          <FilteredArrayDisplay 
          routeInput={routeInput.replace(/\s+/g,'').toUpperCase()} 
          routeArray={routeDataArray} 
          setRouteStopArray={setRouteStopArray}
          /> 
          : 
          null
          }

      <div>
        {/* 根據route-button > Map and return All stations-button */}
        {/* by stations-button > call 3-incoming-bus api */}

        {routeStopArray.length > 0 ?
         <RouteStopArrayDisplay routeStopArray={routeStopArray} fullStopArray={stopDataArray} />
         : 
         null 
        }
        
      </div>

    </div>
  )
}

export default KMB