import MobileNav from './MobileNav'
import SecondaryNav from './SecondaryNav'
import PrimaryNav from './PrimaryNav'
import { StyledLogo, StyledHeader } from './styles'
import logo from '../../assets/images/logo.webp'

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt='Chelsea' />
      <MobileNav />
      <SecondaryNav />
      <PrimaryNav />
    </StyledHeader>
  )
}
