import React from 'react'
import { useRef, useEffect} from 'react';
import './../../style/image.scss'

export default function Image(){

    const ref = useRef(null)

    const loggedUserInfo = localStorage.getItem('UserData')

    const user = JSON.parse(loggedUserInfo);

    const getImageUrl = `https://api-nodejs-todolist.herokuapp.com/user/${user["_id"]}/avatar`;

    useEffect(() => getImage(), [])

    const getImage = () => {
        fetch(getImageUrl, {
            method: "GET", 
            redirect: 'follow'
        })
        .then(response => response.blob())

        .then(imageBlob => {
            const imageObjectURL = URL.createObjectURL(imageBlob)
            ref.current.src = imageObjectURL
        })
        .catch(error => console.error('error', error))
    }

    return (
        <div>
            <img ref={ref} width="100" height="100" className='userImage' alt='UserPhoto'/>
        </div>
    )
}
