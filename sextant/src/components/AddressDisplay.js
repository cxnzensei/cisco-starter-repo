import React from 'react'
import { useState, useEffect } from 'react'

const AddressDisplay = (props) => {

    const [url, setUrl] = useState(props.url)
    const [ip, setIp] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setIp(data.ip));
    }, []);

    return (
        <div>{ip}</div>
    )
}

export default AddressDisplay