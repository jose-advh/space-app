import styled from 'styled-components'
import Titulo from '../../Titulo'
import populares from './populares.json'
import Imagen from '../Imagen'

const SectionPopular = styled.section`
    display: flex;
    flex-direction: column;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    section > img {
        border-radius: 15px;
    }

    button {
        width: 100%;
        padding: 1rem 0;
        border-radius: 15px;
        color: white;
        background-color: transparent;
        border-color: #C98CF1;
        transition: .5s ease background;
        cursor: pointer;
        &:hover {
            background-color: #C98CF1;
        }
    }
`

const Populares = () => {

    return (
        <SectionPopular>
            <Titulo $aling="center">Populares</Titulo>
            <section>
                {populares.map(popular => {
                    return <img src={popular.path} alt={popular.alt} key={popular.id} />
                })}
                <button>Ver más</button>
            </section>
        </SectionPopular>
    )
}

// {populares.map(popular => {
//     return <Imagen 
//         key={popular.id}
//         foto={popular}
//     />
// })}

export default Populares