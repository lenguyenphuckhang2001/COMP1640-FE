import React from "react";
import { BsFillTagFill } from 'react-icons/Bs';
import './Tagbar-left.scss'
export const TagbarLeft = () => {
    return(
        <div className="tagbar">
            <h4 className="tag"><BsFillTagFill/>Tag</h4>
            <a className="tagname">#java</a>
            <a className="tagname">#reactjs</a>
            <a className="tagname">#chatgpt</a>
            <a className="tagname">#htmlcss</a>
        </div>
    ) 
};