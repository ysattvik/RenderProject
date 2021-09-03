import React,{useState} from 'react'


const initState = ['Bruce','Wayne']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)
    const handleClick = () =>{
    //     persons.push('Clerk')
    //     persons.push('Kent')
    //     setPersons(persons)
            const newPersons=[...persons]//array object in []
            newPersons.push('Clerk')
            newPersons.push('Kent')
            setPersons(newPersons)
     }
     console.log('ArrayUseState render')
        return (
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person =>(
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}
