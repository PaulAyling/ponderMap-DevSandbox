import React from 'react'

function Body(props) {
    const container_notes = props.container_data.notes
    const container_image = props.container_data.image_url
    const image_style = {
        backgroundImage: 'url('+ container_image +')' 
      }

    return (
        <div className="flex flex-col border-black border-2 p-1 w-full">
            <div className = "h-80 bg-cover" style={image_style}></div>
            <div className="p-2">
            {container_notes}
            </div>

        </div>
        
    )
}

export default Body
