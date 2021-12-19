import './App.css';
import DocumentContextProvider from './contexts/DocumentContext'
import Document from './document/document/document'

function App() {
  return (
    <DocumentContextProvider>
    <div className="App">
   <Document/>   
    </div>
    </DocumentContextProvider>
  );
}

export default App;
