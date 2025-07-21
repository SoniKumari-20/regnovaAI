import firstImg from "../../assets/Rectangle10.png";
import secondImg from "../../assets/Rectangle11.png";
import thirdImg from "../../assets/Rectangle12.png";

export default function AboutUs() {
  return (
    <section className='w-full flex items-center justify-center px-[35px]'>
      <div className="w-full max-w-7xl flex flex-col gap-[30px] aboutusSpacing">
        <div className='flex gap-5 items-center flex-wrap justify-center'>
          <div className="max-w-[486px] w-full rounded-[20px] h-[200px] sm:h-[288px] overflow-hidden">
            <img src={firstImg} alt="" className="w-full h-full object-cover" />
          </div>

          <div className='max-w-3xl w-full rounded-[10px] bg-[#050044] border-1 border-[#155DFC] text-white p-14 text-left'>
            <h3 className='font-[700] text-[34px]'>RegnovaAI</h3>
            <p className='pt-[27px]'>A pioneering AI startup focused on streamlining compliance risk audits for enterprises. By leveraging advanced document parsing and LLM-driven analysis, RegnovaAI delivers actionable reports on data handling, consent, GDPR, and more — helping teams mitigate risk and stay compliant effortlessly.</p>
          </div>
        </div>
        <div className='flex gap-5 items-start justify-center flex-wrap'>
          <div className='max-w-3xl w-full rounded-[10px] bg-[#050044] border-1 border-[#155DFC] text-white h-full p-14 text-left'>
            <h3 className='font-[700] text-[34px]'>Mission Statement</h3>
            <p className='pt-[27px]'>RegnovaAI's mission is to revolutionize enterprise compliance by deploying cutting-edge AI that automates audit risk analysis, compliance scoring, and reporting at scale. We are building a platform that eliminates regulatory friction, accelerates audit cycles, and delivers audit-grade insights in real time—so that high-growth companies can focus on scaling without compliance bottlenecks.</p>
          </div>
          <div className="max-w-[486px] w-full rounded-[20px] h-[200px] sm:h-[288px] overflow-hidden">
            <img src={secondImg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className='flex gap-5 items-center justify-center flex-wrap'>
          <div className="max-w-[486px] w-full rounded-[20px] h-[200px] sm:h-[288px] overflow-hidden">
            <img src={thirdImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className='max-w-3xl w-full rounded-[10px] bg-[#050044] border-1 border-[#155DFC] text-white p-14 text-left'>
            <h3 className='font-[700] text-[34px]'>Vision Statement</h3>
            <p className='pt-[27px]'>Our vision is to become the global standard in AI-driven regulatory co-pilots, helping every enterprise navigate compliance with confidence, speed, and clarity. We envision a world where every audit report is instant, every risk is visible, and every organization—regardless of size—has access to elite-grade governance tools.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
