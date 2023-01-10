import './Homepage.css';
import Navbar from '../../Sections/Navbar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import Section1 from '../../Sections/Section1/Section1'
import Section2 from '../../Sections/Section2/Section2'
import Section3 from '../../Sections/Section3/Section3'
import Section4 from '../../Sections/Section4/Section4'
import Section5 from '../../Sections/Section5/Section5'
import Section6 from '../../Sections/Section6/Section6'
import Section7 from '../../Sections/Section7/Section7'


function Homepage() {
  return (
    <div className="App">
        <Navbar />
        <Section1 /> 
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
    </div>
  );
}

export default Homepage;
