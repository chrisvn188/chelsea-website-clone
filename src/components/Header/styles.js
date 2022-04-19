import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: relative;
  border-bottom: 1px solid var(--brand-blue);
`
export const StyledNavWrapper = styled.div`
  padding: 0 2rem 0 10rem;
`
export const StyledLogo = styled.img`
  max-width: 3.5rem;
  vertical-align: middle;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  z-index: 1000;
  cursor: pointer;
  @media (min-width: 76rem) {
    max-width: 6rem;
    top: 0.65rem;
    left: 2rem;
  }
`
export const StyledMobileNav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 2rem 0 1.5rem 0;
  position: relative;
  .line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem 0;
    background-color: var(--brand-blue);
  }
  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    padding: 0 1rem;
    :not(:last-child) {
      border-right: 1px solid #aaa;
    }
  }
  span {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    color: #333333;
    display: inline-block;
  }
  @media (min-width: 76rem) {
    display: none;
  }
`
export const StyledFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledSecondaryNav = styled.nav`
  background-color: var(--brand-blue);
  display: none;
  ul:first-child {
    display: flex;
    gap: 1rem;
    padding: 0.65rem 0;
  }
  span {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--brand-white);
    display: flex;
    align-items: center;
    gap: 0.2rem;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      width: 0%;
      transition: all 0.3s ease-out;
    }
    &:hover {
      &::after {
        background-color: var(--brand-white);
        width: 100%;
      }
    }
  }
  ul:nth-child(2) {
    display: flex;
    img {
      max-width: 4.5rem;
      display: block;
    }
  }
  @media (min-width: 76rem) {
    display: block;
  }
`

export const StyledPrimaryNav = styled.nav`
  display: none;
  ul:first-child {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1.5rem 0 2rem 0;
  }
  span {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--brand-black);
    display: flex;
    align-items: center;
    gap: 0.2rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      height: 4px;
      width: 0%;
      transition: all 0.3s ease-out;
    }
    &:hover {
      color: var(--brand-secondary-blue);
      &::after {
        width: 100%;
        background-color: var(--brand-secondary-blue);
      }
    }
  }
  ul:nth-child(2) {
    transform: translateY(-3px);
    display: flex;
    li {
      padding: 0 1rem;
      :not(:last-child) {
        border-right: 1px solid #aaaaaa;
      }
    }
  }
  @media (min-width: 76rem) {
    display: block;
  }
`
