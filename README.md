webLink : https://hk-transport-time-checker.vercel.app/

----
香港公共運輸工具時間查詢工具。

目前可查到的工具：港鐵、九巴。

將來更新方向：城巴、UI/UX

----
組件解說：
1. 轉換模式按鈕: 於港鐵(MTR)和九巴(KMB)兩者切換 -> 右邊亦有當前模式的文字(Mode is MTR.)
  
   // 第一次切換KMB模式時候會呼叫一次 路線 和 停車站 的api，如無法正常獲取，需要使用者重新切換模式。
3. 根據模式以展示相應的組件

----
   2.1 港鐵-MTR
   
     展示方式以港鐵路線圖，使用者可按下地圖上相應的站名以查詢該站與所屬路線的地鐵列車時間訊息。
     
     2.1.1 地圖
       SVG採用：無損放大，一定程度上能確保清晰度增加使用者體驗。 -'目前正尋找方法改善渲染方式，避免過多流量的使用'
   
     2.1.2 站名按鈕
       採用Absolute定位，根據地圖relative-property再每個button調整相應位置。無法完整完美覆蓋是正常現象。
       顏色採用text-background，並根據所有路線而嘗試conic-gradient
   
     2.1.3 時間表
       公開api，使用方法及字典詳情可參考[政府公開數據集](https://data.gov.hk/)
       根據站名和其所屬路線，分別呼叫相應api。
       -'第一項的列車資訊有一定幾率出現“59分鐘”的資訊，作者目前並不清楚如何得出。'
       -'資訊未就尾班車之後的時間作處理，可能深夜2 3點查詢會呼叫出1小時內有車的資訊，但並不正確。'

---
   2.2 九巴-KMB
   
     展示方式以文字輸入搜尋，使用者可根據自己所知的路線搜尋相應的車輛路線。
	  
     2.2.1 路線過濾
       以array.includes()方式過濾，方法簡單但某種程度來說並不高效。 -'這部分期待使用者知道自己應該要哪條路線。'
       由於資料數量龐大，只取index至10的數據量。 -'一條路線兩個方向佔2個槽位，如追求優化可只佔用1個槽位，繼而可以再渲染多些路線。'
       使用者可按下該`路線-目的地`的部分，來呼叫api獲取該部分的所有停車站資料。
       並在使用者按下相應的`路線-目的地`，會有變色的效果，告知使用者目前所選的`路線-目的地`。
		 
     2.2.2 所有停車站
       該部分特別說明：停車站的seq, eta。
       以array方式來看，seq其實是index+1。 部分路線的起始點和終點會是同一個，利用seq可以避免呼叫起始站的時間會同時在終點站的部分顯示。
       eta: 預計到站時間。由於九巴api的更新速度偏慢(1分鐘1次)，使用者呼叫api的時候，得出結果可能與實際eta計算不一。此部分作者多設定了一個條件，不過準確率不能保證，只祈求不會像港鐵59分鐘情況。
       按下相應停車站：呼叫api並獲得接下來3輛巴士的eta。經過script的計算會直接得出巴士與現時的`分鐘差`，讓使用者得知並預留時間。

---
一些補充/題外話/是但抱怨:

九巴數據集幾時可以稍微改進下= = 有啲路線已經基本call唔郁eta點解唔直接從原本嘅route-list拎走

同埋個eta更新頻率可唔可以搞快半分鐘30s一次, update/min真係好慢, 人地港鐵可以做到10秒左右真係差距...

同埋seq方面, 頭尾站可唔可以backend個度直接幫手處理, seq-1就出seq-1, seq-last就出seq-last, 唔好call stop-id+route+bound就跳哂兩個站先得架寶寶
    
       
