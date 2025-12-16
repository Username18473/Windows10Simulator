function updateNetworkIcon() {
    const icon = document.getElementById('network-icon');
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
        const Speed = connection.downlink;

        if (Speed > 10) {
            icon.src = 'Network/Strong.ico';
        } else if (Speed > 5) {
            icon.src = 'Network/Average.ico';
        } else if (Speed > 2.5) {
            icon.src = 'Network/Weak.ico';
        } else {
            icon.src = 'Network/None.ico';
        }
    } else {
        console.log('Network Information API is not supported in your browser.');
    }
}

setInterval(updateNetworkIcon, 1000);
updateNetworkIcon();

