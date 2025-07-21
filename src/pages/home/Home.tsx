import WelcomePage from '../../component/welcomePage/WelcomePage'
import AuditTypes from '../../component/auditTypes/AuditTypes'
import AboutUs from '../../component/aboutUs/AboutUs'
import Services from '../../component/services/Services'
import Questions from '../../component/questions/Questions'
import bgImg from "../../assets/image1.png";

export default function Home() {
    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: `url(${bgImg})` }} >
            <WelcomePage />
            <AuditTypes />
            <AboutUs />
            <Services />
            <Questions />
        </div>
    )
}
