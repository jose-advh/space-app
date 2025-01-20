import styled from "styled-components"

const BannerEstilizado = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 45vh;
border-radius: 20px;
background-image: url(${(props) => props.bg});
background-size: cover;
`

const TituloEstilizado = styled.h1`
font-size: 40px;
color: white;
width: 301px;
padding: 0rem 3rem;

`

const Banner = ({titulo, bgI}) => {

    return (
        <>
            <BannerEstilizado bg={bgI}>
                <TituloEstilizado>{titulo}</TituloEstilizado>
            </BannerEstilizado>
        </>
    )
}

export default Banner