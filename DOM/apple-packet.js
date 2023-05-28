var calculateBtn = document.querySelector(".calculate")
var priceOfBox = document.getElementById("cost")
var applesInBox = document.getElementById("number")
var applesInPacket = document.getElementById("packet")
var percentage = document.getElementById("percent")
var costAppleDisplay = document.querySelector(".costApple")
var costPacketDisplay = document.querySelector(".costPacket")
var numPacketsDisplay = document.querySelector(".numPackets")
var recommendedDisplay = document.querySelector(".recommended")
var remainderDisplay = document.querySelector(".remainder")
var applePacket = ApplePacket()

var costOfApple = 0;
var costPacket = 0;
var numPackets = 0;
var packetPercentValue = 0;
var totalValue = 0;
var remainder = 0;
calculateBtn.addEventListener("click", function(){

   costOfApple= applePacket.costOfBox(priceOfBox.value) / applePacket.numApplesInBox(applesInBox.value)
   costAppleDisplay.innerHTML= costOfApple.toFixed(2)

   costPacket = applePacket.appleNumInPacket(applesInPacket.value) * costOfApple
   costPacketDisplay.innerHTML = costPacket.toFixed(2)

   numPackets = applesInBox.value / applesInPacket.value
   remainder = applesInBox.value % applesInPacket.value
numPacketsDisplay.innerHTML = Math.floor(numPackets)
remainderDisplay.innerHTML = "    Remaining apples:  " + remainder;

packetPercentValue= costPacket * (percentage.value/100)
totalValue = costPacket + packetPercentValue
recommendedDisplay.innerHTML = totalValue.toFixed(2)

})