import React, { useState, useMemo, useCallback} from 'react'
import { MemoizedChildFive } from './ChildFive'
import { MemoizedChildFour } from './ChildFour'




export const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishwash')

    const person ={
        fname:'Bruce',
        lname:'Wayne'
    }
    const MemoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}
    
    const memoizedHandleClick = useCallback(handleClick, [])
    console.log('ParentFour Render')
    return (
        <div>
            <button onClick ={() => setCount((c) => c + 1)}>Count -{count} </button>
            <button onClick={() => setName('Codevolution')}>Change Name</button>
            <MemoizedChildFive name= {name} handleClick={memoizedHandleClick}/>
            {/* <MemoizedChildFive name= {name} person={MemoizedPerson}/> */}
        </div>
    )
}
