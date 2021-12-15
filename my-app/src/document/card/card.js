import  { useState, useContext, useEffect } from 'react'
import { DocumentContext } from '../../contexts/DocumentContext'
import CardHeader from './cardHeader'
 
const Card= ()=> {
    const document = useContext(DocumentContext)
    console.log(document)


    const startingId = 1
    return (
    <div>
        <h2>count </h2>
    </div>
    );

  }

  export default Card


