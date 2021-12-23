import './App.css';
import DocumentContextProvider from './contexts/DocumentContext'
import Document from './document/document/document'
import UseStateEx from './document/scratch/useStateEx';

function App() {
  return (
    <DocumentContextProvider>
    <div className="App">
   <Document/>   
    </div>
    </DocumentContextProvider>
    // <UseStateEx/>
  );
}

export default App;
