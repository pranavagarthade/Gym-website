import './App.css';
import Bmi from './components/Bmi/Bmi';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Programs from './components/Programs/Programs';
import Patch from './components/Patch/Patch';
import { Reasons } from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
// import Plans from './components/Plans/Plans';
import Timetable from './components/Timetable/Timetable';
function App() {
  return (
    <div className="App">
      
          <Hero/>
          <Programs/>
          <Patch/>
          <Timetable/>
          <Testimonials/>
          {/* <Plans/> */}
          <Reasons/>
          <Bmi/>
          <Join/>         
          <Footer/>
    </div>
  );
}

export default App;
