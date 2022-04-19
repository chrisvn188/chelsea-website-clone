import {
  StyledNavWrapper,
  StyledFlexBetween,
  StyledSecondaryNav,
} from './styles'
import { BiLinkExternal } from 'react-icons/bi'
import nikeLogo from '../../assets/images/nike.webp'
import trivagoLogo from '../../assets/images/trivago.webp'

const secondNavList = [
  { id: 1, text: 'about chelsea', hasLinkIcon: false },
  { id: 2, text: 'stamford bridge', hasLinkIcon: false },
  { id: 3, text: 'fans', hasLinkIcon: false },
  { id: 4, text: 'foundation', hasLinkIcon: true },
  { id: 5, text: 'say no to antisimitism', hasLinkIcon: true },
  { id: 6, text: 'junior blues', hasLinkIcon: true },
  { id: 7, text: '5th stand app', hasLinkIcon: false },
]
const sponsorList = [
  { id: 1, name: 'Nike', image: nikeLogo },
  { id: 2, name: 'Trivago', image: trivagoLogo },
]

export default function SecondaryNav() {
  return (
    <StyledSecondaryNav>
      <StyledNavWrapper>
        <StyledFlexBetween>
          <ul>
            {secondNavList.map(item => (
              <li key={item.id}>
                <span>
                  <span>{item.text}</span>
                  {item.hasLinkIcon && <BiLinkExternal />}
                </span>
              </li>
            ))}
          </ul>
          <ul>
            {sponsorList.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
              </li>
            ))}
          </ul>
        </StyledFlexBetween>
      </StyledNavWrapper>
    </StyledSecondaryNav>
  )
}
