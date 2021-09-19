import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

  
export function Icon(props) {
    console.log('PROP::',props.name)

    return   <FontAwesomeIcon icon={props.name} />

  }