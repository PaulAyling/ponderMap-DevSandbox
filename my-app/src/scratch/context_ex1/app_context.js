import TstDocumentContextProvider from './tst_context.js'
import Tst_inputForm from './tst_frm.js'
import DocumentContext from '../../contexts/DocumentContext'

function AppTstCxt() {
    return (
        // <TstDocumentContextProvider>
        //     <Tst_inputForm/>
        // </TstDocumentContextProvider>
        <DocumentContext>
                <Tst_inputForm/>
        </DocumentContext>
    )
}

export default AppTstCxt
