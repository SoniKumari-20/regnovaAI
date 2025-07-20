import { servicesDetail } from './servicesDetail';

export default function Services() {
  return (
    <div className='flex justify-center items-center flex-col text-white py-20 px-10'>
      <div>
        <h2 className='light:text-[#050044] dark:text-[white] text-[34px] text-center text-3xl md:text-4xl fonty-bold text-white mb-8'>What We Deliver</h2>
      </div>
      <div className='flex items-start justify-center flex-wrap gap-5 w-full p-9'>
        {
          servicesDetail?.map((item, idx) => (
            <div className='flex items-start justify-center gap-2 text-left max-w-sm w-full'>
              <div className="bg-gradient-to-b from-[#7762FF] to-[#8E59CF] bg-clip-text text-transparent text-[62px] font-[600] leading-none m-0 p-0">
                {idx + 1}
              </div>
              <div className=''>
                <p className='m-[0px] bg-gradient-to-r from-[#7762FF] to-[#8E59CF] bg-clip-text text-transparent text-[22px] font-[700]'>{item?.title}</p>
                <p className='m-[0px]'>{item?.detail}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
