import Container from '../layout/Container'
import DocumentContextProvider from '../../contexts/DocumentContext'
import { NameForm } from '../scratch/nameForm'
import NewSongForm from '../scratch/forms/newSonForm'

function Paragraph() {
    const curComponentId=1
    return (
        <DocumentContextProvider>
            {/* <Container curComponentId={curComponentId} 
        />     */}
        <NameForm 
            title='Test' 
            url='www.mysite.com' 
            header_text='some header_text'/>
            {/* <NewSongForm/> */}
        </DocumentContextProvider>

    )
}

export default Paragraph
