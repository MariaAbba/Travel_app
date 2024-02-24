import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" height={29} width={74} />
      </Link>
    </nav>
  )
}

export default Navbar
