import styled from "styled-components"
import colors from "../../utils/style/colors"
import Erro404 from '../../assets/404.jpg'

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundLight};
    align-item: center;
`

const ErrorTitle = styled.h1`
    font-weight: 300;
`

const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${colors.secondary};
`

const Illustration = styled.img`
    max-width: 800px;
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>Oups</ErrorTitle>
            <Illustration src={Erro404} />
            <ErrorSubtitle>
                Il semblerait que la page que vous cherchez n'existe pas
            </ErrorSubtitle>
        </ErrorWrapper>
    )
}

export default Error