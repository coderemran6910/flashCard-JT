import Faq from './components/Faq';
import Navbar from './components/Navbar';
import RelationFunc from './components/RelationFunc';



function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      <RelationFunc />
      <Faq/>
    </div>
  );
}

export default App;
