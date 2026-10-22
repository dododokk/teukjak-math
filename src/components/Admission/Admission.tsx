import resultImg1 from "../../assets/image5.jpg";
import resultImg2 from "../../assets/image6.jpg";
import resultImg3 from "../../assets/image7.jpg";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: resultImg1, alt: "입시결과 인포그래픽 1" },
  { src: resultImg2, alt: "입시결과 인포그래픽 2" },
  { src: resultImg3, alt: "입시결과 인포그래픽 3" },
];
const SLIDE_INTERVAL_MS = 4000;

const CARDS = [
  {
    title: "명문대 진학지도 경험",
    desc: "연고대 및 카이스트, 한의대, 교대 등등의\n학종/교과/정시를 두루 지도한 경험",
  },
  {
    title: "특목 자사고 지도전문",
    desc: "북일고, 양지고, 화성고, 동산고, 외고 학생지도 및\n입학을 위한 준비과정을 만들어드립니다.",
  },
  {
    title: "내신 우수학생 다수",
    desc: "중등 만점은 기본\n고등내신 1등급 다수",
  },
];

function Admission() {
  const [current, setCurrent] = useState(0);

  // current가 바뀔 때마다 타이머를 다시 시작해서, 점을 눌러 넘긴 뒤에도 같은 간격 유지
  useEffect(() => {
    const timer = setTimeout(
      () => setCurrent((prev) => (prev + 1) % SLIDES.length),
      SLIDE_INTERVAL_MS,
    );
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section
      id="admission"
      className="mx-auto w-full max-w-[1200px] px-6 py-[70px]"
    >
      <hr className="h-[3px] w-full border-none bg-accent opacity-[0.85]" />
      <h2 className="mt-10 mb-[30px] text-center text-[32px] text-text-h lg:text-[44px]">
        매년 탁월한 입시성과
      </h2>

      <div className="grid grid-cols-1 items-stretch gap-[18px] lg:grid-cols-[1fr_0.95fr] lg:gap-[30px]">
        <div className="flex flex-col gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-center rounded-[18px] bg-white px-[22px] py-7 text-center shadow-sm lg:min-h-[200px] lg:px-[34px] lg:py-10"
            >
              <div className="mb-[14px] text-xl font-black leading-[1.25] text-black/86 lg:text-[26px]">
                {card.title}
              </div>
              <div className="text-[15px] font-medium leading-[1.7] text-black/75 lg:text-[18px]">
                {card.desc.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 왼쪽 카드 영역 기준 세로 가운데 정렬, 일정 간격으로 자동 전환 */}
        <div className="flex w-full flex-col justify-center">
          <div className="grid">
            {SLIDES.map((img, i) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                aria-hidden={i !== current}
                className={`col-start-1 row-start-1 block aspect-[6/5] w-full self-center rounded-xl object-cover shadow-sm transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {SLIDES.map((img, i) => (
              <button
                key={img.alt}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`${i + 1}번째 이미지 보기`}
                className={`h-2.5 rounded-full border-none transition-all duration-300 ${
                  i === current ? "w-6 bg-accent" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admission;
