import React from 'react'

export default function ShowTime({seconds, minutes, hours}) {
        return (
        <div>
            <h2>
            User Worked on the task for: {hours}hours: {minutes}mins: {seconds}sec
            </h2>
        </div>
    )
}
