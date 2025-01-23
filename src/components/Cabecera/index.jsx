import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const Cabecera = (props) => {   

    const HeaderEstilizado = styled.header`
        display: flex;
        justify-content: space-between;
        padding: 60px 0;
    `

    return (
        <HeaderEstilizado>
            <img src="img/logo.png" alt="Logo de Space-App" />
            <CampoTexto 
                icono="search" 
                placeholder="¿Qué estás buscando?" 
                setBusqueda={props.setBusqueda}
                busqueda={props.busqueda}
                filtrarFotos={props.filtrarFotos}
                setFotosDeGaleria={props.setFotosDeGaleria}
            />
        </HeaderEstilizado>
    )
}

export default Cabecera