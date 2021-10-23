import DocumentContextProvider from './contexts/DocumentContext'
import InputForm from './documents/layout/InputForm'
import Container from './documents/layout/Container'
function AppDevCxt() {
    return (
        <DocumentContextProvider>
            {/* <InputForm id='1' user='1'/> */}
            <Container id='1'   />
        </DocumentContextProvider>
    )
}

export default AppDevCxt
