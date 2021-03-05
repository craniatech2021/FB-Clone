import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Feed from "./feed/feed";
import './style/style.scss';
import Widget from "./widget/widget";
import Login from "./login/login";
import { useStateValue } from "./provider/stateProvider";


function App() {

  const [ user ] = useStateValue();

  return (
      <div className='app'>
        {!user 
        ? 
        <Login />
        : (
        <div>
        <Header />
        <div className='app-body'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
        </div>
        )}
        
      </div>
  );
}

export default App;