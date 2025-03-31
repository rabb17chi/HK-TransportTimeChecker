import { lineSummary } from "../../usefulData/MTR_lineSummary"
import { stationSummary } from "../../usefulData/MTR_stationSummary";

export default function checkDest(line,itemDest) {
    if (lineSummary[line].Up == itemDest || lineSummary[line].Down == itemDest) {
        return
    }
    return `(${stationSummary[itemDest].name_tc})`
}