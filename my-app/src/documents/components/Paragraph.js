import Container from '../layout/Container'
import DocumentContextProvider from '../../contexts/DocumentContext'

function Paragraph() {
    const curComponentId=1
    return (
        <DocumentContextProvider>
            <Container curComponentId={curComponentId} 
        />    
        </DocumentContextProvider>

    )
}

export default Paragraph
