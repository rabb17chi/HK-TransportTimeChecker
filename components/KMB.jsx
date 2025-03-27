// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'

// const HomePage = () => {
//   const [stationArray, setStationArray] = useState([]);

//   const [inboundList, setInboundList] = useState([]);
//   const [outboundList, setOutboundList] = useState([]);

//   const [inboundEnd, setInboundEnd] = useState('')
//   const [outboundEnd, setOutboundEnd] = useState('')
  
//   const [routeText,setRouteText] = useState('')


//   const resetListsAction = () => {
//     setInboundList([])
//     setOutboundList([])
//   }
//   const resetDirectionAction = () => {
//     setInboundEnd('')
//     setOutboundEnd('')
//   }
//   const getChineseName = (stopId) => {
//     return stationArray.map(item=>{if (item.stop === stopId) {return item.name_tc}})
//   }
//   const fetchRouteInbound = (route) => {
//     fetch(`https://data.etabus.gov.hk/v1/transport/kmb/route-stop/${route}/inbound/1`)
//     .then(res=>res.json())
//     .then(data=>{
//         if (data.data.length != 0) {
//             fetch(`https://data.etabus.gov.hk/v1/transport/kmb/stop/${data.data[0].stop}`)
//             .then(res=>res.json())
//             .then(data=>setOutboundEnd(data.data.name_tc))
//           data.data.map(item=>{
//            setInboundList(inboundList=>([...inboundList, item.stop]))
//           })
//           return
//         }
//         setInboundErrorText('No List')
//     })
//     .catch(err=>console.log(err))
// }
//   const fetchRouteOutbound = (route) => {
//     fetch(`https://data.etabus.gov.hk/v1/transport/kmb/route-stop/${route}/outbound/1`)
//     .then(res=>res.json())
//     .then(data=>{
//         if (data.data.length != 0) {
//           fetch(`https://data.etabus.gov.hk/v1/transport/kmb/stop/${data.data[0].stop}`)
//           .then(res=>res.json())
//           .then(data=>setInboundEnd(data.data.name_tc))
//         data.data.map(item=>{
//           setOutboundList((outboundList)=>[...outboundList, item.stop])
//         })
//         return
//         }
//         setOutboundErrorText('No List')
//     })
//     .catch(err=>console.log(err))
// }
//   const fetchRoute = (route) => {
//     resetDirectionAction()
//     console.log(`Now Checking Route-${route}...`)
//     fetchRouteInbound(route)
//     fetchRouteOutbound(route)
// }
//   const getRouteData = (e) => {
//     e.preventDefault()
//     resetListsAction()
//     if (routeText) {
//       fetchRoute(routeText.toUpperCase())
//       return false
//     }
//     console.log('Plaese check input')
//   }

//     useEffect(()=>{
//       console.log('KMB-page loaded.')
//       const KMBAPIcall = () => 
//         fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop")
//         .then(res=>res.json())
//         .then(data=>{
//             console.log('Station arrry data.data',data.data)
//             setStationArray(data.data)
//         })
//         .catch(err=>{
//             console.log('err',err)
//             KMBAPIcall()
//         })
//         KMBAPIcall()
//     },[])
//   return (
//     <>
//       <div>
//         <input 
//         name='routeInput' 
//         placeholder='KMB route here...'
//         onChange={e=>setRouteText(e.target.value)}
//         />
//         <button 
//         type='submit'
//         onClick={(e)=>{
//           getRouteData(e)
//          }}>
//             Check!
//           </button>
//       </div>

//       <div style={{display: 'flex'}}>

//         <div style={{margin:20}}>
//         Inbound-前往:{inboundEnd}
//           { 
//             inboundList.map((boundItem)=>{
//               return <div key={boundItem}>
//                       <Link
//                        key={boundItem}
//                        href={`./stopId/${boundItem}?route=${routeText.toUpperCase()}&bound=I`}
//                       >
//                        {getChineseName(boundItem)}
//                       </Link>
//                      </div>
//             })
//           }
//          </div>
          
//         <div style={{margin:20}}>
//         Outbound-前往:{outboundEnd}
//           {
//             outboundList.map((boundItem)=>{
//               return <div key={boundItem}>
//                       <Link 
//                        key={boundItem}
//                        href={`./stopId/${boundItem}?route=${routeText.toUpperCase()}&bound=O`}
//                        >
//                         {getChineseName(boundItem)}
//                       </Link>
//                      </div>
//             })
//           }
//          </div>

//       </div>
//     </>
//   )
// }

// export default HomePage

import React, { useEffect, useState } from 'react'
import FilteredArrayDisplay from './KMB-checker/FilteredArrayDisplay'
import RouteStopArrayDisplay from './KMB-checker/RouteStopArrayDisplay'

const KMB = ({routeDataArray,stopDataArray}) => {
  const [routeInput,setRouteInput] = useState('')

  const [routeStopArray, setRouteStopArray] = useState([])

  useEffect(()=>{
    console.log('KMB-page loaded.')
    },[])

  return (
    <div className='p-3'>
      <input 
      type='text'
      name='kmb-route-input'
      value={routeInput}
      placeholder='KMB-route here...' 
      onChange={(e)=>setRouteInput(e.target.value)}
      maxLength={4}
      className='w-full text-center text-2xl bg-pink-200 mb-4 py-2 h-10'
      />

        {/* 根據RouteInput > Map and filter Route-Array > return route-button */}
          {routeInput.length > 0 ?
          <FilteredArrayDisplay 
          routeInput={routeInput.replace(/\s+/g,'').toUpperCase()} 
          routeArray={routeDataArray} 
          setRouteStopArray={setRouteStopArray}
          /> 
          : 
          null
          }

      <div>
        {/* 根據route-button > Map and return All stations-button */}
        {/* by stations-button > call 3-incoming-bus api */}

        {routeStopArray.length > 0 ?
         <RouteStopArrayDisplay routeStopArray={routeStopArray} fullStopArray={stopDataArray} /> 
         : 
         null 
        }
        
      </div>

    </div>
  )
}

export default KMB