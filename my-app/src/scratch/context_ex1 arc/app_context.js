import TstDocumentContextProvider from './tst_context.js'
import Tst_inputForm from './tst_frm.js'

function AppTstCxt() {
    return (
        <TstDocumentContextProvider>
            <Tst_inputForm/>
        </TstDocumentContextProvider>
    )
}

export default AppTstCxt
