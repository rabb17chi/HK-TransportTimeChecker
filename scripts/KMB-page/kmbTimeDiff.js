export const KMBTimeDiff = (busTime,busIndex) => {
    if (busTime) {
        busTime = parseInt(busTime)
        let date = new Date()
        let currentMin = date.getMinutes()
        if (busTime === currentMin) {
            return `巴士接近埋站/已埋站`
        }
        if (busTime > currentMin) {         
            return `下班巴士： ${busTime - currentMin}分鐘`
        }
        if (busIndex == 0 && busTime+60 - currentMin > 0) {
            return `巴士已離站。`
        }
        return `下班巴士： ${busTime+60-currentMin}分鐘`
    }
    return 'error? 數據錯誤，請重新運行應用程式。'
}