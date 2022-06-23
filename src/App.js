import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HookStateContainer from './components/HookStateContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer />
        <CakeContainer />
        <HookStateContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
