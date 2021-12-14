import DocumentContextProvider from '../../contexts/DocumentContext'
import InputForm from '../../scratch/pmap/InputForm'

function Paragraph() {
    return (
        <DocumentContextProvider>

            <InputForm id='1'/>

        </DocumentContextProvider>

    )
}

export default Paragraph
