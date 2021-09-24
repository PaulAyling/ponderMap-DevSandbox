import React from 'react'

function Body(props) {
    const container_notes = props.containerData.notes
    const container_image = props.containerData.image_url
    const bodyOuterStyle = props.containerData.Style_defaults.body_outerStyle

    const image_style = {
        backgroundImage: 'url('+ container_image +')' 
      }

    return (
        <div className={bodyOuterStyle}>
            <div className = "h-80 bg-cover" style={image_style}></div>
            <div className="p-2">
            {container_notes}
            </div>

        </div>
        
    )
}

export default Body
