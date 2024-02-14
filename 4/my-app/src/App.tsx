import Navbar from './components/Navbar';
import Body from './pages/Body'
import Body2 from './pages/Body2';
import Body3 from './pages/Body3';
import LoginPass from './pages/LoginPass';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <LoginPass/>
      <Body/>
      <Body2/>
      <Body3/>

    </div>
  );
}

export default App;
