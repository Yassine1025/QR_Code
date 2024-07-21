import React, { useEffect, useState } from 'react'
import './QR_Code.css'
import axios from 'axios'

export default function QR_Code() {
    const [Api, setApi] = useState('')
    const [inp, setInp] = useState('')
    const [end, setEnd] = useState(false)

    useEffect(() => {
        axios.get('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example')
            .then(res => setApi(res.config.url)) // use res.config.url to get the URL of the QR code
    }, []) // Add an empty dependency array to only run once

    function QR() {
        setEnd(true);
    }
    function Reset(){
        setEnd(false);
        setInp('');
    }
    return (
        <div className='container'>
            <p>Enter your text or URL</p>
            <input type='text' placeholder='Text or URL' onChange={(e) => setInp(e.target.value)} />
            {end && <div className='imgBox'>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp}`} alt='QR_Image' />
            </div>
            }
            <button onClick={QR}>Generate QR Code</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
