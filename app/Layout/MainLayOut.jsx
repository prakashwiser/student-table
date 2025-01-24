import React from 'react'

function MainLayOut({ children, style }) {
    return (
        <div className={style}>{children}</div>
    )
}

export default MainLayOut