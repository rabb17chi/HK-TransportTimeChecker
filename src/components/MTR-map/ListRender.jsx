import React from 'react'

import { lineSummary } from '../../../usefulData/MTR_lineSummary'
import TimeListRender from './TimeListRender'

const ListRender = ({ListData}) => {
  return (
    <div style={{backgroundColor:`${lineSummary[ListData.Line].color}95`}}>

      <h3 className='text-center m-auto'>
        {lineSummary[ListData.Line].name_tc}
      </h3>
      
      <div>

        <section style={{backgroundColor:'rgba(200,200,200,0.4)'}}>
        { ListData.Up[0]    != 'No Data' ? <TimeListRender Line={ListData.Line} ListData={ListData.Up} dataRemark='Up'/>     : null }
        </section>

        <section style={{backgroundColor:'rgba(200,200,200,0.4)'}}>
        { ListData.Down[0]  != 'No Data' ? <TimeListRender Line={ListData.Line} ListData={ListData.Down} dataRemark='Down'/>   : null }
        </section>
        
      </div>
    </div>
  )
}

export default ListRender