import './App.css';
import { Header, LeftMenu, Messages, Projects } from './components';

function App () {

  const handleMenuItemChange = () => {
    console.log('hello!');
  };

  return (
    <div className="App">
      <LeftMenu onItemChange={handleMenuItemChange}/>
      <Header />
      <Projects />
      <Messages />
    </div>
  );
}

export default App;
