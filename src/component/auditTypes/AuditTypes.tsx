const auditTypes: any = ["SOC 1", "SOC 2", "SOX", "PCI-DSS", "HIPAA", "GDPR", "FedRAMP", "ISO 27001"]

export default function AuditTypes() {
  return (
    <div className='pb-18 w-full flex items-center justify-center flex-col gapBtw ' >
      <div>
        <h3 className="text-[28px] md:text-[34px] font-bold mb-4">Audit Types</h3>
      </div>
      <div className='max-w-7xl flex items-center justify-center gap-5 py-8 flex-wrap w-full gap-[10px] transition-all duration-300 ease-in-out'>
        {auditTypes?.map((item: string, id: number) =>
          <div key={id} className="flex items-center justify-center  font-[600] bg-white w-[280px] border-1 border-[#0A00592B] rounded-[8px] py-[27px] hover:bg-[#000A25]  hover:text-[white] hover:shadow-[0px_4px_4px_0px_#00000040]" >
            {item}
          </div>
        )}
        {/* <section className="w-full bg-[#000A25] text-white px-4 py-12 flex justify-center"> */}
          <div className="w-full max-w-6xl rounded-lg bg-[#020d33] p-6 mt-[30px] md:p-10">
            {/* Heading */}
            <h2 className="text-[28px] md:text-[34px] font-bold mb-4">
              What is SOC 2
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-6 mb-6">
              SOC 2 (System and Organization Controls 2) is a compliance framework
              developed by the American Institute of CPAs (AICPA). It is designed to
              ensure that service providers securely manage data to protect the privacy
              and interests of their clients.
            </p>

            {/* Key points */}
            <h3 className="text-lg md:text-xl font-semibold mb-3">Key Points about SOC 2:</h3>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm md:text-base">
              <li>
                <span className="font-bold text-white">1. Security –</span> Protection of system
                resources from unauthorized access.
              </li>
              <li>
                <span className="font-bold text-white">2. Availability –</span> System
                accessibility as agreed upon.
              </li>
              <li>
                <span className="font-bold text-white">3. Processing Integrity –</span> System
                processing is complete, valid, accurate, and timely.
              </li>
              <li>
                <span className="font-bold text-white">4. Confidentiality –</span> Protection of
                sensitive information.
              </li>
              <li>
                <span className="font-bold text-white">5. Privacy –</span> Proper collection, use,
                retention, disclosure, and disposal of personal information.
              </li>
            </ul>

            {/* Why it matters */}
            <h3 className="text-lg md:text-xl font-semibold mb-3">Why It Matters:</h3>
            <ul className="list-disc pl-5 space-y-1 mb-8 text-gray-300 text-sm md:text-base">
              <li>Enhances customer trust.</li>
              <li>Helps meet compliance requirements.</li>
              <li>Demonstrates security maturity to stakeholders and partners.</li>
            </ul>
            {/* Button */}
            <button className="border border-[#155DFC] hover:bg-blue-500 hover:text-white text-[#155DFC] font-medium px-6 py-2 rounded bg-transparent transition-colors duration-300">
              Start Audit Now
            </button>
          </div>
        {/* </section> */}
      </div>
    </div>
  )
}
