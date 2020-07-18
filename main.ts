radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -20, -2, 0, 7),
    7
    )
})
let signal = 0
radio.setGroup(2)
