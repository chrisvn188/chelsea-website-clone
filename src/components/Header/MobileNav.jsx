import { StyledMobileNav } from './styles'

export default function MobileNav() {
  return (
    <StyledMobileNav>
      <div className='line' />
      <ul>
        <li>
          <span>log in</span>
        </li>
        <li>
          <span>join us</span>
        </li>
        <li>
          <span>menu</span>
        </li>
      </ul>
    </StyledMobileNav>
  )
}
