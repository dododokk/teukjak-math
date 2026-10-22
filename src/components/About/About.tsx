import lobbyImg from "../../assets/image2.jpg";
import wallImg from "../../assets/image3.jpg";
import classroomImg from "../../assets/image4.jpg";

const GALLERY = [
  { src: lobbyImg, alt: "특작수학학원 로비" },
  { src: wallImg, alt: "특작수학학원 인테리어" },
  { src: classroomImg, alt: "특작수학학원 강의실" },
];

function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-[1200px] px-6 py-[70px]"
    >
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-center text-[32px] text-accent lg:text-[44px]">
          About US
        </h2>
        <p className="mt-[18px] text-lg leading-[1.8]">
          저희 특작수학학원은{" "}
          <strong>산본 지역에서 10년 넘게 중고등 수학과 수능</strong>을
          <br />
          전문적으로 지도해온 산본에 대표 수학 전문 학원입니다.
          <br />
          학생들의 성적 향상과 입시 결과로 신뢰를 쌓아왔으며, <br />
          <strong>위권과 하위권 모든 학생에게 일대일 맞춤 시스템</strong>을 통해
          학습 영역을 확장하고 있습니다.
        </p>
        <p className="mt-[18px] text-lg leading-[1.8]">
          <strong>체계적인 개념의 습득과 꼼꼼한 오답 관리</strong>를 위해 <br />
          대치동 누적 오답 시스템을 비롯해 저희 학원만의 특별한 개념 노트가 가장
          큰 장점입니다. <br />
          지역의 대표 수학학원으로서 내신, 수능을 동시에 관리하는 수학 전문
          학원입니다.
          <br />
          <strong>
            학생 개개인의 학습 수준에 맞춘 맞춤형 수학 관리가 특작수학학원의
            핵심입니다.
          </strong>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {GALLERY.map((img) => (
          <figure
            key={img.src}
            className="m-0 aspect-[4/3] overflow-hidden rounded-[10px] shadow-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default About;
