
import Header from '../components/Header/Header';
import Post from '../components/formPost/Post';
import AboutUser from '../components/aboutUser/AboutUser';
import DoubleCard from '../components/UI/DoubleCard'
import Activities from '../components/activities/Activities';
function MainRoute() {
  return (
    <div>
     <DoubleCard>
     <Post/>  
      <AboutUser/>
    
     </DoubleCard>
     <hr style={{width: '95%'}}/>
<Activities/>

    </div>
  );
}

export default MainRoute;
