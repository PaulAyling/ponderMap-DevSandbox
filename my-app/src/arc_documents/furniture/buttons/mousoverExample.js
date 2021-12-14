import  { useState }from 'react'

function MouseOverEx(props) {
    const [showBox, setShowBox] = useState(false);
    const handleBoxToggle = () => {
        setShowBox(prevState => !prevState);
    }
    return (
        <div
          onMouseOver={handleBoxToggle}
          className={`container${showBox ? " bg-red-400" : " bg-green-600"}`}
        >THis is a test of mousover

        </div>
      );
    }

export default MouseOverEx
