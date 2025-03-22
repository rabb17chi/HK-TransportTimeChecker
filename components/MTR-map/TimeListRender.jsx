import React from 'react'
import { stationSummary } from '../../usefulData/MTR_stationSummary'
import { calculateTimeDiff } from '../../scripts/MTR-page/calculateTimeDiff'

const TimeListRender = ({ListData}) => {

  return (
  <>
    {
      ListData.map((item,index)=>{
        return (
        <p key={index} style={{margin:0,minHeight:50,textAlign:'center'}}>
          {index == 0 ? 
          `往${stationSummary[item.dest].name_tc}`
          : 
          false
          } 
          <br></br>
          <span>下班車時間：{calculateTimeDiff(item.time,)}</span>
        </p>
        )
      })
    }
  </>
  )
}

export default TimeListRender