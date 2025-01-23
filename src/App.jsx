import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh; 

  img {
    width: 212px;
  }
`

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`



const App = () => {

  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')

  const alAlternarFavoritos = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita
      })
    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : foto.favorita
      }
    }))
  }

  const imagenesFiltradas = categoriaSeleccionada === 'Todas' 
  ? fotos : fotos.filter(img => img.categoria === categoriaSeleccionada);

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
        <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner titulo="La galería más completa del espacio" bgI="img/banner.png"/>
              <Galeria 
                fotos={fotosDeGaleria} 
                alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                alAlternarFavoritos={alAlternarFavoritos}
                imagenesFiltradas={imagenesFiltradas}
                setCategoriaSeleccionada={setCategoriaSeleccionada}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom 
          foto={fotoSeleccionada} 
          alCerrar={() => setFotoSeleccionada(null)} 
          alAlternarFavoritos={alAlternarFavoritos}
          />
      </FondoGradiente>
    </>
  )
}

export default App
