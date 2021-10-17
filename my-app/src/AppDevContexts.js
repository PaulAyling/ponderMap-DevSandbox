import DocumentContextProvider from './contexts/DocumentContext'
import InputForm from './documents/layout/InputForm'
function AppDevCxt() {
    return (
        <DocumentContextProvider>
            <InputForm id='1' user='1'/>
        </DocumentContextProvider>
    )
}

export default AppDevCxt
