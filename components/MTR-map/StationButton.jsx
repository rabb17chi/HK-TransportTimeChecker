import React from 'react'
import axios from 'axios'
// https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${lines}&sta=${stationId}

import '../../styles/stationBtn.css'
import { stationSummary } from '../../usefulData/MTR_stationSummary'
import { lineSummary } from '../../usefulData/MTR_lineSummary'

const StationButton = ({ id, setAction }) => {

  const fetchAction = (stationId, lines) => {
    let stationInfoObject = [];

    lines.forEach((item, index) => {
      axios.get(`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${item}&sta=${stationId}`)
      .then(result => {
        let data = result.data.data[`${item}-${stationId}`];
        let DownList = data.DOWN || ['No Data'];
        let UpList = data.UP || ['No Data'];
        stationInfoObject.push({
          Line: item,
          Station: stationId,
          Down: DownList,
          Up: UpList
        });
        setTimeout(() => setAction(stationInfoObject), 1500);
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('Request canceled by user.');
        } else {
          console.log('Something error: ', err);
        }
      })
    });
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
      return `conic-gradient(
      ${colorArray[0]} 0deg, ${colorArray[0]} 180deg,
      ${colorArray[1]} 180deg, ${colorArray[1]} 360deg)`
  }
    if (count == 3) {
      return `conic-gradient(
      ${colorArray[0]} 0deg, ${colorArray[0]} 120deg,
      ${colorArray[1]} 120deg, ${colorArray[1]} 240deg,
      ${colorArray[2]} 240deg, ${colorArray[2]} 360deg)`
    }
    if (count == 4) {
      return `conic-gradient(
      ${colorArray[0]} 0deg, ${colorArray[0]} 90deg,
      ${colorArray[1]} 90deg, ${colorArray[1]} 180deg,
      ${colorArray[2]} 180deg,${colorArray[2]} 270deg,
      ${colorArray[3]} 270deg, ${colorArray[3]} 360deg)`
    }
  }

  return (
    <button
      className='station-btn'
      id={id}
      onClick={() => fetchAction(id, stationSummary[id].line)}
      style={{
        top: `${stationSummary[id].topPos}%`,
        left: `${stationSummary[id].leftPos}%`,
        // background : '#ff0000'
        background: `${buttonCircleColor(id)}`
      }}
      title={`
        ${stationSummary[id].name_tc} - ${stationSummary[id].fullName} - (${getLinesTitle(id)})`}
    >
      O
    </button>
  );
};

export default StationButton;