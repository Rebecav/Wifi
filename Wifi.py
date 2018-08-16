import json

wifiFile = open("wifidata.json" , "r")
wifiData =json.load(wifiFile)
wifiFile.close()

wifiFile2 = open("HotSpotdata2.json", "r")
wifiData2 = json.load(wifiFile2)
wifiFile2.close()

for booth in wifiData["data"]:
    print(booth[10])
for booth2 in wifiData2["data"]:
    print(booth2[10])
