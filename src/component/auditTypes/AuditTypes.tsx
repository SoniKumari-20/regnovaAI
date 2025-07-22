import { useState } from "react";

interface ComplianceItem {
  name: string;
  description: string;
}

const complianceData: ComplianceItem[] = [
  {
    name: "SOC 1",
    description:
      "SOC 1 focuses on controls relevant to a service organization's financial reporting."
  },
  {
    name: "SOC 2",
    description:
      "SOC 2 (System and Organization Controls 2) is a framework by AICPA ensuring service providers securely manage data to protect privacy and client interests.\n\nKey Points:\n• Security\n• Availability\n• Processing Integrity\n• Confidentiality\n• Privacy"
  },
  {
    name: "SOX",
    description:
      "SOX (Sarbanes–Oxley Act) sets requirements for financial reporting and internal controls for public companies."
  },
  {
    name: "PCI-DSS",
    description:
      "PCI-DSS (Payment Card Industry Data Security Standard) applies to entities handling credit card data to ensure secure processing."
  },
  {
    name: "HIPAA",
    description:
      "HIPAA (Health Insurance Portability and Accountability Act) protects sensitive patient health information."
  },
  {
    name: "GDPR",
    description:
      "GDPR (General Data Protection Regulation) is an EU regulation governing data protection and privacy."
  },
  {
    name: "FedRAMP",
    description:
      "FedRAMP provides a standardized approach to security assessment, authorization, and monitoring for cloud products used by the U.S. government."
  },
  {
    name: "ISO 27001",
    description:
      "ISO 27001 is an international standard for information security management systems (ISMS)."
  }
];

export default function AuditTypes() {
  const [selectedAudit, setSelectedAudit] = useState<ComplianceItem | null>(null);

  return (
    <div className="pb-18 w-full flex flex-col items-center gapBtw">
      {/* Heading */}
      <h3 className="text-[28px] md:text-[34px] font-bold mb-4">Audit Types</h3>

      {/* Audit type cards */}
      <div className="max-w-7xl flex flex-wrap items-center justify-center gap-[10px] py-8 w-full transition-all duration-300 ease-in-out">
        {complianceData.map((item, id) => (
          <div
            key={id}
            onClick={() => setSelectedAudit(item)}
            className={`flex items-center justify-center text-center cursor-pointer font-[600] w-[280px] border border-[#0A00592B] rounded-[8px] py-[27px] transition-colors duration-300
      ${selectedAudit?.name === item.name
                ? "bg-[#000A25] text-white shadow-[0px_4px_4px_0px_#00000040]"
                : "bg-white text-black hover:bg-[#000A25] hover:text-white hover:shadow-[0px_4px_4px_0px_#00000040]"
              }`}
          >
            {item.name}
          </div>
        ))}

      </div>

      {/* Detail section */}
      {selectedAudit && (
        <div className="w-full max-w-6xl rounded-lg bg-[#020d33] p-6 mt-[30px] md:p-10 text-white">
          <h2 className="text-[28px] md:text-[34px] font-bold mb-4">
            What is {selectedAudit?.name}
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-6 whitespace-pre-line mb-6">
            {selectedAudit?.description}
          </p>
          <h3 className="text-lg md:text-xl font-semibold mb-3">Key Points about {selectedAudit?.name}:</h3>
          <ul className="space-y-2 mb-6 text-gray-300 text-sm md:text-base">
            <li>
              <span className="font-bold text-white">1. Security -</span> Protection of system
              resources from unauthorized access.
            </li>
            <li>
              <span className="font-bold text-white">2. Availability -</span> System
              accessibility as agreed upon.
            </li>
            <li>
              <span className="font-bold text-white">3. Processing Integrity -</span> System
              processing is complete, valid, accurate, and timely.
            </li>
            <li>
              <span className="font-bold text-white">4. Confidentiality -</span> Protection of
              sensitive information.
            </li>
            <li>
              <span className="font-bold text-white">5. Privacy -</span> Proper collection, use,
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
          <button className="border border-[#155DFC] hover:bg-blue-500 hover:text-white text-[#155DFC] font-medium px-6 py-2 rounded bg-transparent transition-colors duration-300">
            Start Audit Now
          </button>
        </div>
      )}
    </div>
  );
}
