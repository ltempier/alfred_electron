var _ = require('lodash');

function scanWifi() {
	WifiUtilities.scan()
		.then(WifiUtilities.cleanApList)
		.then(function (wifiList) {

			var $list = $("#wifi-list")

			var list = document.getElementById("wifi-list");

			_.each(wifiList, function (wifiConfig) {
				var option = document.createElement("option");
				option.appendChild(document.createTextNode(wifiConfig.ssid));
				list.appendChild(option);
			});

			console.log('yo')
		});
}


// GET DEVICE LIST
//var serialCommand = new SerialCommand();
//serialCommand.findDevices(function (d) {
//	var device = d[0];
//
//	if (!device)
//		return;
//
//	var wifiConfig = {
//		channel: "1",
//		mac: "00:1c:7b:cd:56:25",
//		security: "WPA(PSK/AES,TKIP/TKIP) WPA2(PSK/AES,TKIP/TKIP)",
//		signal_level: "-33",
//		ssid: "NUMERICABLE-C93E",
//		password: 'baurentlaptistebangbang'
//	};
//
//	serialCommand.customSerialWifiConfig(device, wifiConfig)
//		.then(function (s) {
//			console.log(s)
//		}, function (e) {
//			console.log(e)
//		})
//});
