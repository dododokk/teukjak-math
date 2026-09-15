function VideoSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 pt-5 pb-10 text-center">
      <h1 className="mb-[30px] text-[22px] text-text-h lg:text-[32px]">
        학원 수업 운영에 대한 원장의 노하우를 영상으로 확인하세요
      </h1>

      <div className="flex aspect-video w-full flex-col items-center justify-center gap-[14px] overflow-hidden rounded-[10px] border-2 border-dashed border-border bg-bg-soft text-[#9aa0a6]">
        <span className="text-5xl" aria-hidden="true">
          ▶
        </span>
        <p className="text-[15px] font-semibold">영상 준비중</p>
      </div>

      <hr className="mt-[60px] h-[3px] w-full border-none bg-accent opacity-[0.85]" />
    </section>
  )
}

export default VideoSection
