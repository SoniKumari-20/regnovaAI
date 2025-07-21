import PricingPlans from '../../component/pricingPlans/PricingPlans'
import AboutMainSection from '../../component/aboutMainSection/AboutMainSection'
import Questions from '../../component/questions/Questions'
import bgImg from "../../assets/image1.png"

export default function Pricing() {
  return (
    <div  className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${bgImg})` }}>
        <AboutMainSection title="Pricing Plans" />
        <PricingPlans />
        <Questions />
    </div>
  )
}
