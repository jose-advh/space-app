import styled from "styled-components"
import BotonIcono from "../../BotonIcono"


const FigureEstilizado = styled.figure`
    width: ${props => props.expandida ? '90%' : '320px'};
    border-radius: 20px;
    background-color: #001634;


    h3 {
        color: white;
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 0;

    }

    h4 {
        color: white;
        font-weight: 200;
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 0;

    }
`

const ImagenEstilizada = styled.img`
    width: 100% !important;
    border-radius: 20px 20px 0px 0px;
    box-sizing: border-box;
`

const FigcaptionEstilizado = styled.figcaption`
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 1rem;
`

const SeccionTexto = styled.section`
    display: flex;
    flex-direction: column; 
`

const SeccionBotones = styled.section`
    display: flex;
    gap: 15px;
`

const Imagen = ({ foto, expandida = false, alSolicitarZoom, alAlternarFavoritos })=> {


    const FigureEstilizado = styled.figure`
    width: ${expandida ? '90%' : '320px'};
    border-radius: 20px;
    background-color: #001634;


    h3 {
        color: white;
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 0;  

    }

    h4 {
        color: white;
        font-weight: 200;
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 0;

    }
`
const iconoFavorito= foto.favorita ? "/iconos/favorito-activo.png" : "/iconos/favorito.png"   

    
    return (

        
            <FigureEstilizado id={foto.id} $expandida={expandida}>
                <ImagenEstilizada src={foto.path} />
                <FigcaptionEstilizado>
                    <SeccionTexto>
                        <h3>{foto.titulo}</h3>
                        <h4>{foto.fuente}</h4>
                    </SeccionTexto>
                    <footer>
                        <SeccionBotones>
                            <BotonIcono onClick={()=>alAlternarFavoritos(foto)}>
                                <img src={iconoFavorito} alt="Icone de favorito" />
                            </BotonIcono>
                                {!expandida && <BotonIcono aria-hidden={expandida} onClick={()=>alSolicitarZoom(foto)}>
                                <img src="/iconos/expandir.png" alt="Icono de expandir" />
                            </BotonIcono>}
                        </SeccionBotones>
                    </footer>
                </FigcaptionEstilizado>
            </FigureEstilizado>
    )
}



export default Imagen