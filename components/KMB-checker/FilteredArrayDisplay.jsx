import React, { useEffect, useState } from 'react'
import FilteredRoute from './FilteredRoute'

const FilteredArrayDisplay = ({routeInput, routeArray, setRouteStopArray}) => {

    const [filteredArray,setFilteredArray] = useState([])
    
    useEffect(()=>{
        setFilteredArray(routeArray.filter(item=>item.route.includes(routeInput)))
    },[routeInput])
  return (
    <div className='overflow-y-scroll h-fit max-h-60 min-w-[300px]'>
        {
           filteredArray.map((item,index)=>{
            while (index < 10) {
                return <FilteredRoute 
                item={item} 
                key={index} 
                setRouteStopArray={setRouteStopArray}

                />
            }
           })
        }
    </div>
  )
}

export default FilteredArrayDisplay