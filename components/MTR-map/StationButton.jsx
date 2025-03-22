import React from 'react'
import axios from 'axios'
// https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${lines}&sta=${stationId}

import '../../styles/stationBtn.css'
import '../../src/app/globals.css'
import { stationSummary } from '../../usefulData/MTR_stationSummary'
import { lineSummary } from '../../usefulData/MTR_lineSummary'

const StationButton = ({ id, setAction }) => {
  let stationInfoObject = [];

  const fetchAction = async (stationId, lines) => {
    stationInfoObject = [];

    const promises = lines.map(item=>
      axios.get(`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${item}&sta=${stationId}`)
      .then(result => {
        return result.data.data
      })
    )
    const results = await Promise.all(promises)
    
    results.map(item=>{
      let Line = Object.keys(item) // Line-Station
      let DownList = item[Line].DOWN || ['No Data'];
      let UpList = item[Line].UP || ['No Data'];
      stationInfoObject.push({
        Line: Line[0].slice(0,3),
        Station: stationId,
        Down: DownList,
        Up: UpList
      })
    })
    
    setAction(stationInfoObject)
  };

  const getLinesTitle = (id) => {
    return stationSummary[id].line.map(item => lineSummary[item].name_tc);
  };

  const buttonCircleColor = (id) => {
    let colorArray = []
    const lineArray = stationSummary[id].line
    lineArray.forEach(item=>{
      colorArray.push(lineSummary[item].color)
    })

    let count = colorArray.length
    if (count == 1) { return colorArray[0] }
    if (count == 2) {
      return `conic-gradient(${colorArray[0]} 0deg, ${colorArray[0]} 180deg,${colorArray[1]} 180deg, ${colorArray[1]} 360deg)`
  }
    if (count == 3) {
      return `conic-gradient(${colorArray[0]} 0deg, ${colorArray[0]} 120deg,${colorArray[1]} 120deg, ${colorArray[1]} 240deg,${colorArray[2]} 240deg, ${colorArray[2]} 360deg)`
    }
    if (count == 4) {
      return `conic-gradient(${colorArray[0]} 0deg, ${colorArray[0]} 90deg,${colorArray[1]} 90deg, ${colorArray[1]} 180deg,${colorArray[2]} 180deg,${colorArray[2]} 270deg,${colorArray[3]} 270deg, ${colorArray[3]} 360deg)`
    }
  }

  return (
    <button
      className='station-btn border-0 z-10 absolute p-0 m-0 -scale-150 text-[10px]'
      id={id}
      onClick={() => fetchAction(id, stationSummary[id].line)}
      style={{
        top: `${stationSummary[id].topPos}%`,
        left: `${stationSummary[id].leftPos}%`,
        background: `${buttonCircleColor(id)}`
      }}
      title={`${stationSummary[id].name_tc} - ${stationSummary[id].fullName} - (${getLinesTitle(id)})`}
    >
      O
    </button>
  );
};

export default StationButton;