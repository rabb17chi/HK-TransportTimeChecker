import React from 'react'

import { lineSummary } from '../../usefulData/MTR_lineSummary'
import TimeListRender from './TimeListRender'

const ListRender = ({ListData}) => {

  return (
    <div>
      <h3>{lineSummary[ListData.Line].name_tc}</h3>
      <section style={{backgroundColor:'rgba(200,200,200,0.6)'}}>
      { ListData.Up[0]    != 'No Data' ? <TimeListRender ListData={ListData.Up}/>     : null }
      </section>
      <hr></hr>
      <section style={{backgroundColor:'rgba(200,200,200,0.6)'}}>
      { ListData.Down[0]  != 'No Data' ? <TimeListRender ListData={ListData.Down}/>   : null }
      </section>
    </div>
  )
}

export default ListRender