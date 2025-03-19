import axios from 'axios'

export function fetchAction(stationId,lines,setAction) {
    dataObject = [] // reset everytime call FetchAction

    let lineArray=[];
    lines.map(item=>lineArray.push(item)) // ['Line1','Line2']

    const requests = lineArray.map(item=>{
        axios.get(`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${item}&sta=${stationId}`)
        .then(result => {
            if (result.status === 200) {
            return handleResultData(result.data)
        }
    }
        )
        .catch(err=>console.log('Something in ErrorCatching Section: '+err))
        .finally(()=>{console.log('-end-')})
    })

    Promise.all(requests).then(()=>{
        setAction(dataObject)
    })
    
}

function handleResultData(data) {
    const line_station = Object.keys(data.data)[0]
    return dataObject.push(
        {
            LineAndStation : line_station,
            List : {
                DownList: data.data[line_station].DOWN || 'NoData',
                UpList: data.data[line_station].UP || 'NoData'
            }
        }
    )
}