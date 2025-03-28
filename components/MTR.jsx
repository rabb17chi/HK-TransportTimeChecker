import '../src/app/globals.css'

import React, { useEffect, useState } from 'react'

import StationButton from './MTR-map/StationButton'
import { stationNameList } from '../usefulData/MTR_stationNameList'
import ListDisplayBlock from './MTR-map/ListDisplayBlock'
import Image from 'next/image'

const MTR = () => {
    const nameList = stationNameList

    const [stationInfoObject,setStationInfoObject] = useState([])

useEffect(()=>{
    console.log('MTR Page Loaded.')
},[])
  return (
    <>
        <div id="mtr-map" className='w-[full] max-w-[800px] overflow-scroll'>
            <div className='w-[800px] relative'>
                <Image
                width={800}
                height={800}
                src='./MTR_Map.svg'
                className='max-w-[800px] w-auto' 
                alt='MTR full map.' 
                onContextMenu={(e)=>{e.preventDefault(); return false}}
                onPointerDown={(e)=>{e.preventDefault(); return false}}
                />
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


        <ListDisplayBlock 
        id='ListDisplayBlock'
        data={stationInfoObject} />
    </>
  )
}

export default MTR