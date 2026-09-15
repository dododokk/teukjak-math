import logo from '../../assets/banner.png'

const NAV_ITEMS = [
  { label: '학원소개', href: '#about' },
  { label: '커리큘럼', href: '#course' },
  { label: '입시성과', href: '#admission' },
  { label: '원장소개', href: '#director' },
  { label: '상담문의', href: '#consult' },
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3">
        <a href="#top" className="flex flex-shrink-0 items-center">
          <img src={logo} alt="특작수학학원" className="h-14 w-auto" />
        </a>
        <nav className="hidden md:block" aria-label="주 내비게이션">
          <ul className="m-0 flex list-none gap-7 p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] font-semibold text-text-h no-underline transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
