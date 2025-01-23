import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;   	
`

const ImagenContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
`
const Galeria = ({alSeleccionarFoto, alAlternarFavoritos, imagenesFiltradas, setCategoriaSeleccionada}) => {
    return (
        <>
                <Tag setCategoriaSeleccionada={setCategoriaSeleccionada} />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenContainer>
                        {imagenesFiltradas.map(foto => {
                            console.log(foto)
                            return <Imagen 
                                alAlternarFavoritos={alAlternarFavoritos}
                                alSolicitarZoom={alSeleccionarFoto}
                                key={foto.id}
                                foto={foto}
                            />
                        })}
                    </ImagenContainer>
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria