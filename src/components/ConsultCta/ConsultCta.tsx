function ConsultCta() {
  return (
    <section id="consult" className="mx-auto w-full max-w-[1200px] px-6 pt-[60px] pb-5 text-center">
      <p className="mb-7 text-2xl font-extrabold text-text-h lg:text-[30px]">
        상담이 필요하신가요?
      </p>

      <a
        href="https://forms.gle/TfHkPg28e4rziKec7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-[50px] bg-gradient-to-br from-accent to-[#e64545] px-9 py-6 text-[20px] font-black tracking-[-0.01em] text-white no-underline shadow-[0_12px_30px_rgba(207,40,40,0.35)] transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(207,40,40,0.45)] lg:px-[52px] lg:py-[34px] lg:text-[26px]"
      >
        상담 예약{' '}
        <span className="ml-1.5 rounded-[20px] bg-white px-[10px] py-1 text-base font-black text-accent">
          클릭
        </span>
      </a>

      <p className="mt-[22px] text-lg leading-[1.6] text-black/65">
        폼을 입력해 주시면 순차적으로 연락드리겠습니다.
      </p>

      <hr className="mt-[60px] h-[3px] w-full border-none bg-accent opacity-[0.85]" />
    </section>
  )
}

export default ConsultCta
