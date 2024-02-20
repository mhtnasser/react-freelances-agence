import { Link } from "react-router-dom";
import styled from "styled-components";
import LightLogo  from '../../assets/light-logo.png'
import DartLogo from '../../assets/dark-logo.png'
import { StyledLink }from '../../utils/style/Atoms'
import { useTheme } from "../../utils/hooks/index.jsx";
const HomeLogo =  styled.img`
    height: 70;
`

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header() {
    const { theme } = useTheme()
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={theme === 'light' ? DartLogo : LightLogo }></HomeLogo>
            </Link>
            <div>
                <StyledLink $theme={theme} to="/">Accueil</StyledLink>
                <StyledLink $theme={theme} to="freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </div>
            
        </NavContainer>
    )
}

export default Header