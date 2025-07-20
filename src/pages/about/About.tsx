import AboutMainSection from '../../component/aboutMainSection/AboutMainSection'
import AboutUs from '../../component/aboutUs/AboutUs'
import Services from '../../component/services/Services'
import Questions from '../../component/questions/Questions'
import bgImg from "../../assets/image1.png"

export default function About() {
  return (
    <div  className='bg-cover bg-center' style={{ backgroundImage: `url(${bgImg})` }}>
        <AboutMainSection title="About Us" />
        <AboutUs />
        <Services />
        <Questions />
    </div>
  )
}
