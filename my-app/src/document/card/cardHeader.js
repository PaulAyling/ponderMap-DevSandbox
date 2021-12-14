 

const CardHeader = ({ onClick, count,singleDocument }) => {
    console.log('singleDocument:',singleDocument)
    return (
        <button onClick={onClick}>
        Click me {count}
        </button>
    )
    };
  export default CardHeader

