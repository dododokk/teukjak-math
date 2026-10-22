import heroImg from "../../assets/image1.jpg";

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-[800px] px-6 py-[60px]">
        {/* <h2 className="mb-2 text-xl font-bold text-white md:text-[29px]">
          <span className="text-[#e13e3e]">W</span>e turn{" "}
          <span className="text-[#e13e3e]">Y</span>our{" "}
          <span className="text-[#e13e3e]">A</span>mbition into{" "}
          <span className="text-[#e13e3e]">A</span>ction
        </h2> */}
        <p className="mb-1.5 text-4xl font-black text-[#e13e3e] [text-shadow:0_2px_6px_rgba(0,0,0,0.6)] md:text-[54px]">
          특작수학학원
        </p>
        <br />
        <p className="text-base leading-[1.6] text-white md:text-[19px]">
          결국 유명한 학원이란 원래부터 공부를 잘 하는 아이들이 다니는
          학원입니다.
          <br />
          진짜 학원이란 성적이 오르는 경험을 느끼게 해주는 학원이어야 합니다.
          <br />
          지금껏 경험해보지 못한 수학학원을 보여드리고자 합니다.
        </p>
      </div>
    </section>
  );
}

export default Hero;
