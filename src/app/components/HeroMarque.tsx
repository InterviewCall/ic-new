import Marquee from "react-fast-marquee";

export default function HeroMarque() {
  return (
    <div className="w-full bg-black py-0.5 overflow-hidden">
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover
      >
        <span className="mx-10 text-sm text-white tracking-wideer">
          UP TO 50% OFF IF YOU BUY TWO OR MORE OF OUR COURSES! DISCOUNT AUTOMATICALLY APPLIED
        </span>
        <span className="h-10 w-10 rounded-full bg-red-50"></span>

        <span className="mx-10 text-sm text-white tracking-wideer">
          UP TO 50% OFF IF YOU BUY TWO OR MORE OF OUR COURSES! DISCOUNT AUTOMATICALLY APPLIED
        </span>
        <span className="h-10 rounded-full bg-red-50"></span>
        
      </Marquee>
    </div>
  );
};

