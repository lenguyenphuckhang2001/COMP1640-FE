import React from "react";
import './Tagbar-right.scss'
import { BsFillEyeFill } from 'react-icons/Bs';
import { AiFillFire } from 'react-icons/Ai';
import { MdFiberNew } from 'react-icons/Md';
export const TagbarRight = () => {
    return(
        <div className="tagbar-right">
            <div className="popular-post">
                <a><BsFillEyeFill/> Best</a>
                <a><AiFillFire/> Hot</a>
                <a><MdFiberNew/> New</a>
            </div>
            <div className="popular-tag">
                <a className="tagname">#java</a>
                <a className="tagname">#reactjs</a>
                <a className="tagname">#chatgpt</a>
                <a className="tagname">#htmlcss</a>
            </div>
        </div>

    )
};