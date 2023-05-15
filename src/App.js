import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import {WalletChatWidget} from 'react-wallet-chat-v0'
import 'react-wallet-chat-v0/dist/index.css'

function App() {
  const [widgetState, setWidgetState] = useState({})
  return (
    <div className="App">
      <header className="App-header">
        <WalletChatWidget widgetState={widgetState}/>
        {/* <button
          onClick={() => {
              setWidgetState(
              {
                ...widgetState, 
                chatAddr: '0x943b1f2e1A1Ce254c611f69Dd20b47C960cE1A2A',
                isOpen: true
              }
            )
            }
          }
        >Start Chat</button> */}
      </header>
    </div>
  );
}

export default App;
