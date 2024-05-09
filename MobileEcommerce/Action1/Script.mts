Device("Device").App("Home").MobileButton("Advantage Shopping").Tap
Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 1,0
Device("Device").App("Advantage Shopping").MobileList("MobileList_2").Select 0,0
Device("Device").App("Advantage Shopping").MobileObject("MobileObject").LongPress 116,497,1.008333
Device("Device").App("Advantage Shopping").MobileButton("Back").Tap
Device("Device").InsightObject("InsightObject").Click @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf1.xml_;_
Device("Device").InsightObject("InsightObject_2").Click @@ hightlight id_;_8_;_script infofile_;_ZIP::ssf2.xml_;_
Device("Device").App("Advantage Shopping").MobileButton("Menu").Check CheckPoint("Menu")
