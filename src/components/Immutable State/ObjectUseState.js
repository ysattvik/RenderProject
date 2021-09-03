import React,{useState} from 'react'

const initState =  {
    fname:'Bruce',
    lname:'Kent'
}
export const ObjectUseState = () => {
 const [person, setPerson] = useState(initState)                        
 const changeName = () =>{
    //  person.fname='Clerk'
    //  person.lname='Wlliam'
    //  setPerson(person)
    const newPerson={...person} //function object in{}
    newPerson.fname='Clerk'
    newPerson.lname="William"
    setPerson(newPerson)
 }
 console.log('Object Use State Render')
    return (
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}
