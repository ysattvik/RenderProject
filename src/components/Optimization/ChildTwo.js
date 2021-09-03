import React, { Children } from 'react'

export const ChildTwo = () => {
    console.log('ChildTwo Render')
    return (
        <div>
            ChildTwo Render
        </div>
    )
}
export const MemoizedChildTwo = React.memo(ChildTwo)