import React from 'react'
import './SidebarOption.css'
function SideBarOption({ option = "test", Icon }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__Icon" />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>);
}

export default SideBarOption;