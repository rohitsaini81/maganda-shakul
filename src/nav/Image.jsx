import React from 'react'
const onlineimage = "https://cdn.animaapp.com/projects/6560374d16a8a1edc69dea3f/releases/656038ab33de24a54f80d66c/img/group-1.png"

import imgs from '../photos/profilemaganda.jpg' 
export default function Image() {
    return (

        <div className="mywrapperclass">
            {/* 1- this image is main */}
            <img
                className="img"
                alt="It's me"
                src={imgs}
            />
        </div>
    )
}
