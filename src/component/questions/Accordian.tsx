import React, { useState } from "react";

interface AccordionItem {
    question: string;
    answer: string;
}

interface Props {
    items: AccordionItem[];
}

const Accordion: React.FC<Props> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-4 p-5">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="rounded-[20px] shadow-sm bg-white"
                >
                    <button
                        onClick={() => toggleIndex(index)}
                        className="flex items-center justify-between w-full px-6 py-4 text-left max-w-3xl rounded-[20px]"
                    >
                        <span className="text-lg font-semibold text-gray-800 ">
                            {item.question}
                        </span>
                        <span className="text-gray-500">
                            <div className="text-[21px] font-sm border-1 rounded-full h-[25px] w-[25px] flex justify-center items-center">
                                {openIndex === index ? "-" : "+"}
                            </div>

                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="px-6 pb-4 text-gray-600 text-gray-300 text-left max-w-2xl w-full">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
