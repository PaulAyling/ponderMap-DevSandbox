import DocumentContextProvider from './contexts/DocumentContext'
import InputForm from './scratch/pmap/InputForm'
function AppDevCxt() {
    return (
        <DocumentContextProvider>
            <InputForm id='1' version='1'/>
        </DocumentContextProvider>
    )
}

export default AppDevCxt
