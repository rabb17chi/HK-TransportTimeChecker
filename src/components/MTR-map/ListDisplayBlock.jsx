import React from 'react'
import ListRender from './ListRender'
import { stationSummary } from '../../../usefulData/MTR_stationSummary'

const ListDisplayBlock = ({data}) => {
  return (
    <>
    <h2 className='text-center text-2xl font-bold'>
      {
        data.length>0 ? 
          stationSummary[data[0].Station].name_tc
        : 
        null
      }
    </h2>
      {
        data.length > 0 ?
        data.map( (item,index)=> <ListRender ListData={item} key={index} /> )
        :
        <h3>Please select 1 station to check.</h3>
      }
    </>
  )
}

export default ListDisplayBlock