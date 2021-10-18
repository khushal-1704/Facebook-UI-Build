import React from 'react'
import './App.css';
import AdbIcon from '@material-ui/icons/Adb';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login.js'
import { useStateValue } from './components/StateProvider';

function App() {
  // const [{ user }, dispatch] = useStateValue();

  const user = "Khushal";
  return (
    <div className="App">
      {!user ? (<Login />) :
        (
          <>
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              {/* Feed */}
              <Feed />
              {/* Widgets */}
              <Widgets />
            </div>
            <AdbIcon />
          </>
        )}

    </div>
  );
}

export default App;
