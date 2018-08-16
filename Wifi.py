import json

wifiFile = open("wifidata.json" , "r")
wifiData =json.load(wifiFile)
wifiFile.close()

for booth in wifiData["data"]:
    print(booth[10])
