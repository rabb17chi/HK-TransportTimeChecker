import React from 'react'

import { lineSummary } from '../../../usefulData/MTR_lineSummary'
import TimeListRender from './TimeListRender'
import { stationSummary } from '../../../usefulData/MTR_stationSummary'

const ListRender = ({ListData}) => {
  return (
    <div className='my-2'>

      <div id="Line Title with Dist" 
      className='flex flex-row justify-around' 
      style={{backgroundColor:`${lineSummary[ListData.Line].color}95`}}>
        {/* <p className="md:text-start text-center text-2xl font-bold min-w-[200px]">
          往
          {stationSummary[lineSummary[ListData.Line]['Up'] ].name_tc}
        </p> */}
        <h3 className='text-center text-3xl font-extrabold m-auto flex-1' >
          {lineSummary[ListData.Line].name_tc}
        </h3>
        {/* <p className="md:text-start text-center text-2xl font-bold min-w-[200px]">
          往
          {stationSummary[lineSummary[ListData.Line]['Down'] ].name_tc}
        </p> */}
      </div>
      
      <div className='md:flex flex-row justify-between items-center '>
        <section className="flex-1" style={{backgroundColor:'rgba(200,200,200,0.4)'}}>
        { ListData.Up[0]    != 'No Data' ? <TimeListRender Line={ListData.Line} ListData={ListData.Up} dataRemark='Up'/>     : null }
        </section>

        <section className="flex-1" style={{backgroundColor:'rgba(200,200,200,0.4)'}}>
        { ListData.Down[0]  != 'No Data' ? <TimeListRender Line={ListData.Line} ListData={ListData.Down} dataRemark='Down'/>   : null }
        </section>
      </div>
    </div>
  )
}

export default ListRender