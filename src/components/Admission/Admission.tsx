const CARDS = [
  {
    title: '명문대 진학지도 경험',
    desc: 'SKY를 비롯한 특수목적대까지\n학종/교과/논술/정시를 두루 지도한 경험',
  },
  {
    title: '상위권대 합격률 93%',
    desc: '인서울 15개 대학 + 지거국 + 특수학과\n전인원 46명중 43명(중복없음)',
  },
  {
    title: '특목 자사고 지도전문',
    desc: '지역 전역의 특목 자사고 학생 지도\n과학고, 외고, 국제고 등',
  },
  {
    title: '내신 우수학생 다수',
    desc: '중등 만점은 기본\n고등내신 1등급 다수',
  },
]

function Admission() {
  return (
    <section id="admission" className="mx-auto w-full max-w-[1200px] px-6 py-[70px]">
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
                {card.desc.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-5 text-center text-[22px] font-black leading-[1.55] tracking-[-0.02em] text-accent lg:text-[30px]">
            언제나 학생들의 최종결과로만 말씀드렸습니다.
            <br />
            역사는 계속될 것이며 이제 여러분의 차례입니다.
          </div>
        </div>

        <div className="flex w-full min-h-[320px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-bg-soft text-[#9aa0a6] shadow-sm">
          <span className="text-[42px]" aria-hidden="true">
            🖼
          </span>
          <p className="text-[15px] font-semibold">입시결과 인포그래픽 이미지 준비중</p>
        </div>
      </div>
    </section>
  )
}

export default Admission
