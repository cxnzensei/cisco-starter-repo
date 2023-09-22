import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
const client = new W3CWebSocket('ws://localhost:55455');

function PylonConnector() {
    const [latency, setLatency] = useState(null);

    useEffect(() => {
        client.onmessage = (message) => {
            console.log(message);
            setLatency(new Date().getTime() - message.data)
        }
    }, [])

    return (
        <div>{latency}</div>
    )
}

export default PylonConnector