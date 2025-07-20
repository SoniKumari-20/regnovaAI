import Accordion from './Accordian'
import {FaqList} from './AccordianList'

export default function Questions() {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion items={FaqList} />
    </section>
  )
}
