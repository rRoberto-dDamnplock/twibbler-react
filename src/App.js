
import './App.css';
import Header from './components/Header/Header';
import Post from './components/formPost/Post';
import AboutUser from './components/aboutUser/AboutUser';
import DoubleCard from './components/UI/DoubleCard'
import Activities from './components/activities/Activities';
function App() {
  return (
    <div className="App">
     <Header/>
     <DoubleCard>
     <Post/>  
      <AboutUser/>
    
     </DoubleCard>
     <hr style={{width: '95%'}}/>
<Activities/>

    </div>
  );
}

export default App;
