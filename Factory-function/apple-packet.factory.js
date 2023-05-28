function ApplePacket(){
    var boxPrice = 0;
    var numInBox = 0;
    var percentage = 0;
    var numInPacket = 0

function costOfBox(boxInputCost){
    boxPrice = boxInputCost
    return boxPrice;
}
function numApplesInBox(applesInBoxInput){
    numInBox = applesInBoxInput
    return numInBox
}
function appleNumInPacket(appleNumInPacketInput){
    numInPacket = appleNumInPacketInput
    return numInPacket;
}
function percentegeReq(percentegeInput){
    percentage = percentegeInput
}


return{
    costOfBox,
    numApplesInBox,
    appleNumInPacket,
    percentegeReq
}
}