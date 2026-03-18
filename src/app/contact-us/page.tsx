import Footer from "@/components/Footer";
import TopBarBookACall from "@/components/TopBarBookACall";
import Image from "next/image";


export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white text-white flex flex-col">
      <TopBarBookACall />
      <Image src={'./Contact-InformationDesk.svg'} alt="" height={1000} width={1000} className="w-full h-auto hidden md:block" />
      <Image src={'./ContactInformationMobile.svg'} alt="" height={1000} width={1000} className="w-full h-auto  md:hidden" />

      <div className="w-full flex-1 min-h-0 h-full md:pt-36 md:bg-linear-to-b from-[#080C19] via-[#0C142D] to-[#080C19] flex justify-center items-end">
        <div className="w-full md:w-8/10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
