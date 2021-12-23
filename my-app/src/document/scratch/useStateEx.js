import  { useContext,useState  } from 'react'
// import { DocumentContext } from '../../contexts/DocumentContext'

function UseStateEx() {
            const [username, setUsername] = useState('');
            const [password, setPassword] = useState('');
          
            const printValues = e => {
              e.preventDefault();
              console.log('USERNAME:',username, 'Password:',password);
            };
          
            return (
              <form onSubmit={printValues}>
                <label>
                  Username:
                  <input
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    name="username"
                    type="text"
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    name="password"
                    type="password"
                  />
                </label>
                <br />
                <button>Submit</button>
              </form>
            );
          }
          
          
    

  export default UseStateEx


