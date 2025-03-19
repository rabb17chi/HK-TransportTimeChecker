import React from 'react'

import { lineSummary } from '../../usefulData/MTR_lineSummary'
import TimeListRender from './TimeListRender'

const ListRender = ({ListData}) => {
  console.log(lineSummary[ListData.Line].color)

  return (
    <div style={{
      backgroundColor:`${lineSummary[ListData.Line].color}95`,
      width:600,
      paddingBottom:'auto'
      }}>

      <h3 style={{textAlign:'center',margin:0,marginBottom:10}}>{lineSummary[ListData.Line].name_tc}</h3>
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
        <section style={{backgroundColor:'rgba(200,200,200,0.4)'}}>
        { ListData.Up[0]    != 'No Data' ? <TimeListRender ListData={ListData.Up}/>     : null }
        </section>
        <section style={{backgroundColor:'rgba(200,200,200,0.4)'}}>
        { ListData.Down[0]  != 'No Data' ? <TimeListRender ListData={ListData.Down}/>   : null }
        </section>
      </div>
    </div>
  )
}

export default ListRender