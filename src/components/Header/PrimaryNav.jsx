import { StyledNavWrapper, StyledFlexBetween, StyledPrimaryNav } from './styles'
import { BiLinkExternal } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'

const primaryList = [
  { id: 1, text: 'news', hasLinkIcon: false },
  { id: 2, text: 'videos', hasLinkIcon: false },
  { id: 3, text: 'matches', hasLinkIcon: false },
  { id: 4, text: 'teams', hasLinkIcon: false },
  { id: 5, text: 'tickets & membership', hasLinkIcon: false },
  { id: 6, text: 'club chelsea', hasLinkIcon: false },
  { id: 7, text: 'shop', hasLinkIcon: true },
]

export default function PrimaryNav() {
  return (
    <StyledPrimaryNav>
      <StyledNavWrapper>
        <StyledFlexBetween>
          <ul>
            {primaryList.map(item => (
              <li key={item.id}>
                <span>
                  {item.text}
                  {item.hasLinkIcon && <BiLinkExternal />}
                </span>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <span>
                <FaSearch />
              </span>
            </li>
            <li>
              <span>log in</span>
            </li>
            <li>
              <span>join us</span>
            </li>
          </ul>
        </StyledFlexBetween>
      </StyledNavWrapper>
    </StyledPrimaryNav>
  )
}
