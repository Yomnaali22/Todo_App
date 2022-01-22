import React from 'react'

export default function Accountsettings(){
    
    let uploadUrl = 'https://api-nodejs-todolist.herokuapp.com/user/me/avatar'

    let deleteImageURL = 'https://api-nodejs-todolist.herokuapp.com/user/me/avatar'

    const token = localStorage.getItem('LoginToken');
    
    const uploadAvatar = event => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('avatar', event.target.files[0])
        fetch(uploadUrl, {
            method: 'POST',
            headers: {Authorization: 'Bearer ' + token },
            body: formData,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(response =>  JSON.stringify(response))
        .catch(error => console.error('An error occured:', error)
        )
    }

        const deleteAvatar = () => {
            fetch(deleteImageURL, {
                method: 'DELETE',
                headers: {Authorization: 'Bearer ' + token },
                redirect: 'follow', 
            })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
    
    return (
        <div>
            <div>
            <label className="label" htmlFor="actual-btn">Upload Picture</label>
            <input accept="image/*" type="file" id="actual-btn" onChange={uploadAvatar} hidden/>
            </div>
            <div>
                <button className="label" htmlFor="actual-btn" onClick={deleteAvatar}>Delete Picture</button>
            </div>
        </div>
    )
}
