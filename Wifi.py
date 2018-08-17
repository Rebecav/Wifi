import json

wifiFile2 = open("HotSpotdata2.json", "r")
wifiData2 = json.load(wifiFile2)
wifiFile2.close()

for booth2 in wifiData2["data"]:
    print(booth2[16])
