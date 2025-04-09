import React from 'react'
import { stationSummary } from '../../../usefulData/MTR_stationSummary'
import { calculateTimeDiff } from '../../../scripts/MTR-page/calculateTimeDiff'
import checkDest from '../../../scripts/MTR-page/checkDest'
import { lineSummary } from '../../../usefulData/MTR_lineSummary'

const TimeListRender = ({Line, ListData, dataRemark}) => {

  const numToChinese = (num) => {
    const chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    return chineseNumbers[num];
  }

  return (
  <>
    <span className='text-center text-2xl font-bold px-1.5'>
      往
      {stationSummary[ lineSummary[Line][dataRemark] ].name_tc}
      方向
    </span>

    {
      ListData.map((item,index)=>{
        return (
        <p key={index} className='flex items-center justify-center min-h-[35px] border-1'>
          <span>
            {checkDest(Line,item.dest)}
            第{numToChinese(index+1)}班車：{calculateTimeDiff(item.time)}
          </span>
        </p>
        )
      })
    }
  </>
  )
}

export default TimeListRender