import  { useState, useEffect } from 'react'
import {singleDocument} from '../../data/importSingleDocument'
import CardHeader from './cardHeader'
 
const Card= ()=> {
    const [count,setCount] = useState(0)
    const [document,setDocument] = useState(singleDocument)
    const updateDocument = (newDocument) =>{
        setDocument(newDocument)
    }
    const increment = () => {
        setCount(count + 1)
    }
    const startingId = 1
    return (
    <div>
        <h2>count {count}</h2>
        <CardHeader onClick={increment} count={count} singleDocument={singleDocument} id={startingId}/>
    </div>
    );

  }

  export default Card


