import React from 'react'

function Body() {

    return (
        <div className="flex flex-col border-black border-2 p-1 w-full">
            <div className = "h-36  bg-cover" style={{ 
      backgroundImage: `url("https://loremflickr.com/640/360")` 
    }}></div>
            <div className="p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>

        </div>
        
    )
}

export default Body
