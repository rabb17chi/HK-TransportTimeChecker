export function calculateTimeDiff(trainTime) {
    const currTime = new Date().getMinutes()
    const trainMin = new Date(trainTime).getMinutes()
       let status;
       if (trainMin === currTime) {
            status = '已到站，請等候下一班列車。'
       }
       if (trainMin > currTime) {
            status = `將於 ${trainMin-currTime} 分鐘後到達。`
       } else if (trainMin < currTime) {
            status = `將於 ${trainMin+60-currTime} 分鐘後到達。`
       }
       return status
}