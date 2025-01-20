import styled from "styled-components"


const ContainerEstilizado = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    input::placeholder {
        color: white;
    }
`

const InputEstilizado = styled.input`
        padding: 10px 20px;
        border: 1px solid #8a2be2;
        outline: none;
        border-radius: 10px;
        background-color: transparent;
        font-size: 16px;
        color: white;
        width: 300px;
`

const IconoLupa = styled.span`
        position: absolute;
        top: 32%;
        right: 10px;
        width: 20px;
        height: 20px;
`

const Icono = styled.img`
        width: 24px !important;
`

const CampoTexto = (props) => {

    const { icono, placeholder } = props

    return (
        <ContainerEstilizado>
            <InputEstilizado type="text" placeholder={placeholder} />
            <IconoLupa>
                <Icono src={`iconos/${icono}.png`} alt="Icono de lupa" />
            </IconoLupa>
        </ContainerEstilizado>
    )
}

export default CampoTexto