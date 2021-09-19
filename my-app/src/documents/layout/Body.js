import React from 'react'

function Body(props) {
    const container_notes = props.container_presets.container_notes
    const container_image = props.container_presets.container_image

    return (
        <div className="flex flex-col border-black border-2 p-1 w-full">
            <div className = "h-64  bg-cover" style={{ 
      backgroundImage: `url("https://loremflickr.com/640/360")` 
    }}></div>
            <div className="p-2">
            {container_notes}
            </div>

        </div>
        
    )
}

export default Body
