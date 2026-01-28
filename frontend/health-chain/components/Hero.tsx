import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[900px] bg-white overflow-hidden">
      
      <div className="absolute top-[-75px] left-[-200px] md:left-[-150px] xl:left-[-250px] z-0 pointer-events-none w-[55vw] min-w-[800px] h-[897px]">
        <Image 
            src="/blood-drop.png" 
            alt="Blood Drop Background" 
            fill
            className="object-contain object-left-top drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            priority
        />
      </div>

      <div className="absolute top-[378px] right-[5%] xl:right-[3%] w-full max-w-[550px] flex flex-col items-end gap-[42px] z-10 pr-6">
        
        <h1 className="font-roboto font-bold text-[49px] leading-[56px] tracking-[0.05em] text-brand-textBold text-right w-full">
          Save Life Donate <br /> Blood
        </h1>
        
        <p className="font-roboto font-normal text-[16px] leading-[25px] tracking-[0.05em] text-brand-black text-right w-full pl-10">
          A community-powered platform that connects people who need blood with donors who care — supported by secure, transparent technology behind the scenes.
        </p>
        
        <div className="flex gap-[29px] justify-end w-full">
          <button className="bg-brand-requestBtn text-[#fffbfb] px-6 py-3 min-w-[150px] h-[49px] rounded shadow hover:opacity-90 transition font-roboto font-semibold text-[16px]">
            Request Blood
          </button>
          
          <button className="bg-brand-loginBtn text-[#fffbfb] px-6 py-3 min-w-[150px] h-[49px] rounded shadow hover:opacity-90 transition font-roboto font-semibold text-[16px]">
            Become A Donor
          </button>
        </div>

      </div>
    </section>
  );
}