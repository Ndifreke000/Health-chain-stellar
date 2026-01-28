
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-[59px] w-full z-50 flex justify-center">
      <div className="w-full max-w-[1288px] mx-auto flex items-center justify-between px-6">
        
        <Link href="/" className="relative z-50 shrink-0">
          <div className="w-[61px] h-[62px] bg-white rounded-full border-2 border-black flex items-center justify-center shadow-md">
             <Image src="/logo-drop.svg" alt="Health Chain Logo" width={30} height={30} />
          </div>
        </Link>

        <div className="flex items-center gap-[40px] font-poppins text-brand-black text-[18px]">
          <Link href="/" className="group relative py-2">
            Home
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#4b4949] transition-all duration-300"></span>
          </Link>
          <Link href="#about" className="group relative py-2 hover:text-brand-loginBtn transition-colors">
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#4b4949] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#find" className="group relative py-2 hover:text-brand-loginBtn transition-colors">
            Find Blood
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#4b4949] group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <div className="flex items-center gap-2 cursor-pointer hover:text-brand-loginBtn transition group py-2 relative">
              Register Now 
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="stroke-current transition-transform group-hover:rotate-180">
                <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </div>
          
          <button className="bg-brand-loginBtn text-[#fffbfb] w-[167px] h-[49px] rounded shadow-md hover:opacity-90 transition font-roboto font-semibold text-base ml-8">
            Enter App
          </button>
        </div>

      </div>
    </nav>
  );
}