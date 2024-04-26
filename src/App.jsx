import Faq from './components/Faq';
import Navbar from './components/Navbar';
import RelationFunc from './components/RelationFunc';
import { useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();
  const formattedPath = location.pathname.replace(/^\//, ''); 
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      {location.pathname === '/relation-function' && <RelationFunc />}
      {location.pathname === '/faq' && <Faq />}

      <div>
      <div className="current-route flex gap-2 items-center mt-16">
        <img src="home.png" alt="" /> <span> </span> {formattedPath}
      </div>
      </div>


      <RelationFunc />
      <Faq/>
    </div>
  );
}

export default App;
