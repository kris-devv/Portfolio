import Image from "next/image";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="flex gap-6 pt-16 justify-center">
      <section className="left-section sticky h-fit top-16">
        <img src="/smile.png" alt="Zdjęcie" className=" w-40 h-40 bg-[#353536] mx-auto mt-8 mb-3 rounded-xl"/>
        <h2 className="text-2xl font-bold">Krystian Figiela</h2>
        <div className="bg-[#282829] border-[#383838] border-1 rounded-xl text-xs h-fit w-fit mx-auto px-4 py-1">Student at Rzeszów University of Technology</div>
        
        <div className="divider"></div>

        <div className="left-block">
          <img src="/email.png" alt="email" className="left-block-img"/>
          <div className="left-block-info">
            <h3 className=" text-white/30">EMAIL</h3>
            <p>krystian.figiela000@gmail.com</p>
          </div>
        </div>
        <div className="left-block">
          <img src="/phone.png" alt="phone" className="left-block-img"/>
          <div className="left-block-info">
            <h3 className=" text-white/30">PHONE</h3>
            <p>+48 696 273 167</p>
          </div>
        </div>
        <div className="left-block">
          <img src="/location.png" alt="location" className="left-block-img"/>
          <div className="left-block-info">
            <h3 className=" text-white/30">LOCATION</h3>
            <p>Rakszawa, Poland</p>
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-center my-3">
          <a href="https://www.linkedin.com/in/krystian-figiela/" target="_blank"><img src="/linkedin.png" alt="linkedin" className="social-logo"/></a>
          <a href="https://github.com/kris-devv" target="_blank"><img src="/github.png" alt="github" className="social-logo"/></a>
          <a href="https://www.instagram.com/kris.figiela/" target="_blank"><img src="/instagram.png" alt="instagram" className="social-logo"/></a>
        </div>
      </section>
      <Content />
    </div>
  );
}
