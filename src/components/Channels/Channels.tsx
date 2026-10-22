const TILES = [
  {
    key: 'cafe',
    label: '카페',
    sub: '공지 · 자료 · 커뮤니티',
    className: 'bg-[#2aa6a1]',
    href: 'https://cafe.naver.com/teukjakmath',
  },
  {
    key: 'blog',
    label: '블로그',
    sub: '학원 소식 · 학습 정보',
    className: 'bg-[#2dba4e]',
    href: 'https://blog.naver.com/akijaki78',
  },
  {
    key: 'instagram',
    label: '인스타그램',
    sub: '학원 일상 · 소식',
    className: 'bg-gradient-to-br from-[#ff3b6a] to-[#ff9a2b]',
    href: 'https://www.instagram.com/teukjak__sanbon?mdxt=MWx0Z2JqdDF4aDB6OA==',
  },
]

function Channels() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 pt-5 pb-[60px]">
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-3">
        {TILES.map((tile) => (
          <a
            key={tile.key}
            href={tile.href ?? '#'}
            target={tile.href ? '_blank' : undefined}
            rel={tile.href ? 'noopener noreferrer' : undefined}
            onClick={tile.href ? undefined : (e) => e.preventDefault()}
            aria-disabled={tile.href ? undefined : true}
            className={`relative block min-h-[120px] overflow-hidden rounded-[22px] px-5 py-[26px] shadow-[0_12px_28px_rgba(0,0,0,0.1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,0,0,0.14)] sm:min-h-[150px] ${tile.className}`}
          >
            <div className="mb-[10px] text-[22px] font-black tracking-[-0.02em] text-white">
              {tile.label}
            </div>
            <p className="text-sm leading-[1.5] font-semibold text-white/90">{tile.sub}</p>
            <div className="absolute right-[18px] bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/18 text-lg text-white">
              ↗
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Channels
