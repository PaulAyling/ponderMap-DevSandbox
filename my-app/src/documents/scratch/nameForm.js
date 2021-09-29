import React,{useContext} from "react";
import { useInput } from './InputHook';
import { DocumentContext } from '../../contexts/DocumentContext'


export function NameForm(props) {
  const {documentComponents, documentView} =  useContext(DocumentContext);
  console.log(documentComponents,documentView)


  // const {title , url} = props
  // console.log(title , url)
  const {value:title , bind:bindTitle, reset:resetTitle } = useInput('');
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Title ${title}`);
      resetTitle();
  }
  console.log()
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:nameform
        <input type="text" placeholder='Enter Descriptor' {...bindTitle} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

