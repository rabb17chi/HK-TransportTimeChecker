import React from 'react'
import { stationSummary } from '../../usefulData/MTR_stationSummary'
import { calculateTimeDiff } from '../../scripts/MTR-page/calculateTimeDiff'

const TimeListRender = ({isUp,ListData}) => {
console.log(ListData.length,ListData[0])

  return (
    <div>
      {
        ListData.map((item,index)=>{
          return (
          <p key={index}>
            往{stationSummary[item.dest].name_tc} <br></br>
            下一班車時間：{calculateTimeDiff(item.time,)}
          </p>
          )
        })
      }
    </div>
  )
}

export default TimeListRender