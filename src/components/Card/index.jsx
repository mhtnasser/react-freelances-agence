import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'
import { useState } from 'react'

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    padding-left: 15px;
    color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
`

const CardTitle = styled.span`
    color: black;
    font-size: 22px;
    font-weight: normal;
    align-self: center;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const CardImage = styled.img`
    height: 150px;
    width: 150px;
    align-self: center;
    border-radius: 50%;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    border-radius: 30px;
    width: 300px;
    height: 300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

function Card({ label, title, picture }) {
    const { theme } = useTheme()
    const [isFavorite, setIsFavorite] = useState(false)
    const star = isFavorite ? '⭐️' : ''

    return (
        <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle theme={theme}>
                {star} {title} {star}
            </CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
    title: 'Mon titre par defaut',
    label: '',
    picture: DefaultPicture
}

export default Card