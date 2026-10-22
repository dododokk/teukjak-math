const CARDS = [
  {
    title: "모든 학생별 개별 클리닉",
    desc: "특작수학학원의 시그니쳐. \n진정한 학생별 개별관리의 정점.",
  },
  {
    title: "중고등 및 수능대비 전과정 원장직강 영상 보유",
    desc: "중고등 및 수능대비 전과정의 유기적인 강의 연결!!!\n집, 학교 에서도 언제든 강의를 시청할 수 있는 시스템이 구축되어있습니다.",
  },
  {
    title: "개인 수준/학교별 교재선정 + 백만문항DB",
    desc: "학생의 수준, 학교별로 모두 다른교재를 선정합니다.\n보충이 필요하면 100만 문항 DB에서 필요한 문제를 제공합니다.",
  },
  {
    title: "차원이 다른 개별오답노트(WANT) 5회 반복",
    desc: "비교불가!!! 대체불가!!! 누구도 따라올 수 없는 오답노트의 종결자 WANT\n직접 개발한 5회 반복 오답노트로 교재를 완벽하게 마스터합니다.",
  },
  {
    title: "학교별/개인별 내신 맞춤 관리",
    desc: "오랜 경험 + 전국 모든 기출문제를 모으는 원장이,\n각 학교별 적중문제를 직접 제작하여 내신을 대비합니다.",
  },
  {
    title: "개인별 맞춤형 입시 지도",
    desc: "수시 및 학생의 진로 상담과 \n입시 설계를 함께 합니다. (외부 유료)",
  },
];

function Course() {
  return (
    <section
      id="course"
      className="mx-auto w-full max-w-[1100px] px-6 pt-[70px] pb-10 text-center"
    >
      <h2 className="mb-3.5 text-[36px] text-text-h lg:text-[50px]">Course</h2>
      <h3 className="mb-1.5 text-[18px] font-bold leading-[1.5] text-[rgba(27,39,51,0.85)] lg:text-[22px]">
        말로만 하는 관리형은 이제 그만.
      </h3>
      <h3 className="mb-1.5 text-[18px] font-bold leading-[1.5] text-[rgba(27,39,51,0.85)] lg:text-[22px]">
        관리를 위해선 그만한 시스템과 노하우가 뒷바침 되어야 합니다
      </h3>

      <div className="mt-[30px] grid grid-cols-1 gap-3.5 lg:grid-cols-2 lg:gap-[22px]">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-[18px] bg-white px-7 py-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <h4 className="mb-3 text-[22px] text-accent">{card.title}</h4>
            <p className="text-base font-medium leading-[1.7] text-[rgba(0,0,0,0.72)]">
              {card.desc.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[60px] flex justify-center">
        <div className="inline-block w-full rounded-2xl border border-border bg-white px-6 py-7 shadow-sm lg:w-4/5 lg:max-w-[900px] lg:px-20 lg:py-[45px]">
          <p className="mb-[25px] text-[22px] font-bold">
            특작수학학원 학습 콘텐츠 모아보기
          </p>
          <a
            href="#"
            className="inline-block rounded-lg bg-accent px-10 py-4 text-[17px] font-bold text-white no-underline transition-colors duration-300 hover:bg-accent-dark"
          >
            학습 콘텐츠 바로가기 →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Course;
