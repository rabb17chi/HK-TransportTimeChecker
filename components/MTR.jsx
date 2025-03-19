import 'tailwindcss'

import React, { useEffect, useState } from 'react'

import StationButton from './MTR-map/StationButton'
import { stationNameList } from '../usefulData/MTR_stationNameList'
import ListDisplayBlock from './MTR-map/ListDisplayBlock'

const MTR = () => {
    const nameList = stationNameList

    const [stationInfoObject,setStationInfoObject] = useState([])

useEffect(()=>{
    console.log('MTR Page Loaded.')
},[])
  return (
    <>
        <div id="mtr-map">
            <div style={{minWidth:'800px',maxWidth:'1200px',position:'relative'}}>
                <img src='./MTR_Map.svg' width={'100%'} height={'100%'} alt='MTR full map.' />
                {
                nameList.map((ListItem,index)=>
                    <StationButton 
                    id={ListItem} 
                    key={`${ListItem}_${index}`} 
                    setAction={setStationInfoObject} 
                    />
                )}
            </div>
        </div>


        <ListDisplayBlock data={stationInfoObject} />
    </>
  )
}

export default MTR