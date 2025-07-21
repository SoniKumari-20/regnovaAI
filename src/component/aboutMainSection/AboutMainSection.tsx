import bgImg from "../../assets/image8.png";

export default function AboutMainSection({title} : any) {
    return (
        <section className='w-full flex items-center justify-center p-[35px]'>
            <div className={`max-w-7xl w-full  rounded-[10px]  bg-cover bg-center h-64 flex items-center justify-center`} style={{ backgroundImage: `url(${bgImg})` }} >
                 <h3 className='font-[700] text-[34px] text-white'>{title}</h3>
            </div>
        </section>
    )
}
