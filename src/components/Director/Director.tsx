function Director() {
  return (
    <section id="director" className="mx-auto w-full max-w-[1200px] px-6 py-[70px]">
      <hr className="h-[3px] w-full border-none bg-accent opacity-[0.85]" />
      <h2 className="mt-10 mb-[30px] text-center text-[32px] text-text-h lg:text-[44px]">
        원장 소개
      </h2>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto flex aspect-[683/1024] max-w-[320px] flex-col items-center justify-center gap-3 rounded-[10px] border-2 border-dashed border-border bg-bg-soft text-[#9aa0a6] lg:mx-0 lg:max-w-none">
          <span className="text-[42px]" aria-hidden="true">
            🖼
          </span>
          <p className="text-[15px] font-semibold">원장 프로필 사진 준비중</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-[10px] bg-white p-5 text-left shadow-sm">
            <h3 className="mb-3 text-[22px] text-accent">15년간 다양한 경력의 수학교육자</h3>
            <p className="mb-4 text-base font-medium leading-[1.8] text-text">
              &ndash; 공군사관학교 (전자공학과) 졸
              <br />
              &ndash; 경희대 경영학과 졸
              <br />
              &ndash; 아주대 경영대학원 금융공학과 석사 (졸업생 전체수석)
              <br />
              &ndash; 수학교육
              <br />
              &nbsp;&nbsp;+ 개인/그룹과외&nbsp;&nbsp;+ 소규모 관리식 학원강의
              <br />
              &nbsp;&nbsp;+ 대규모 강의식 수업관리
              <br />
              &nbsp;&nbsp;+ 재수종합반 강의/학생 관리
              <br />
              &nbsp;&nbsp;+ 개별화 수업 구상 및 실제 적용
            </p>
            <p className="text-base font-medium leading-[1.8] text-text">
              다양한 경험을 가진 원장은 각 수업의 장단점을 분석하여 최적의 학습 시스템을 만든
              수학교육 전문가입니다.
            </p>
          </div>

          <div className="rounded-[10px] bg-white p-5 text-left shadow-sm">
            <h3 className="mb-3 text-[22px] text-accent">수능 전문가</h3>
            <p className="text-base font-medium leading-[1.8] text-text">
              강사를 시작한 직후부터 지금까지 수능시험에 대한 교육과 연구를 끊임없이 하고 있고,
              모의고사 출제위원 및 수능해설작업팀에서 활동하며 변화하는 트렌드를 읽는 안목을 갖고
              수능교육을 진행합니다.
            </p>
          </div>

          <div className="rounded-[10px] bg-white p-5 text-left shadow-sm">
            <h3 className="mb-3 text-[22px] text-accent">입시 전문가</h3>
            <p className="text-base font-medium leading-[1.8] text-text">
              오랜 대입 고입 경험의 쌓여진 데이터로 컨설턴트에 준하는 입시상담, 학생부관리,
              성적/선택과목 관리등의 학습 전반에 대한 지도를 병행합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Director
