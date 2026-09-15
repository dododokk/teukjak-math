import lobbyImg from '../../assets/image2.jpg'
import wallImg from '../../assets/image3.jpg'
import classroomImg from '../../assets/image4.jpg'

const GALLERY = [
  { src: lobbyImg, alt: '특작수학학원 로비' },
  { src: wallImg, alt: '특작수학학원 인테리어' },
  { src: classroomImg, alt: '특작수학학원 강의실' },
]

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1200px] px-6 py-[70px]">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-center text-[32px] text-accent lg:text-[44px]">About US</h2>
        <p className="mt-[18px] text-lg leading-[1.8]">
          특작수학학원은 2019년부터 &ldquo;오직 실력과 성과로 증명하겠습니다.&rdquo;라는 슬로건 아래
          <br />
          중고등 수학과 수능을 전문적으로 지도해온 지역 대표 수학학원입니다.
          <br />
          <strong>학생들의 성적 향상과 입시 결과로 신뢰를 쌓아왔으며</strong>,
          <br />
          <strong>현재는 온라인 수학학원 시스템을 통해 학습 영역을 확장하고 있습니다.</strong>
        </p>
        <p className="mt-[18px] text-lg leading-[1.8]">
          체계적인 학습관리를 위해 <strong>원장이 직접 개발한 수학 관리 시스템을 운영</strong>하며,
          <br />
          <strong>지역 대표 수학학원으로서 내신·수능을 동시에 관리하는 전문 수학학원</strong>입니다.
          <br />
          <strong>학생 개개인의 학습 수준에 맞춘 맞춤형 수학 관리가 특작수학학원의 핵심</strong>입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {GALLERY.map((img) => (
          <figure
            key={img.src}
            className="m-0 aspect-[4/3] overflow-hidden rounded-[10px] shadow-sm"
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default About
