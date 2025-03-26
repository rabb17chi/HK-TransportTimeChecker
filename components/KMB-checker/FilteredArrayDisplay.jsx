import React, { useEffect, useState } from 'react'

const FilteredArrayDisplay = ({routeInput, routeArray, stopArray}) => {

    const [filteredArray,setFilteredArray] = useState([])
    
    useEffect(()=>{
        setFilteredArray(routeArray.filter(item=>item.route.includes(routeInput)))
    },[routeInput])
  return (
    <div>
        {
           filteredArray.map((item,index)=>{
            while (index < 11) {
                return <p key={index}>{item.route}</p>
            }
            return
           })
        }
    </div>
  )
}

export default FilteredArrayDisplay