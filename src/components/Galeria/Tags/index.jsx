import styled from 'styled-components'
import tags from './tags.json'

const TagEstilizado = styled.button`
    background-color: #d9d9d95e;
    color: white;
    border: 2px solid transparent;
    padding: 0 1rem;
    cursor: pointer;
    width: auto;
    height: 52px;
    border-radius: 10px;
    &:hover {
        border-color: #C98CF1;
    }
`

const TagContainer = styled.article`
    display: flex;
    align-items: center;
    padding: 2rem .5rem;
    gap: 10px;
`

const ParrafoEstilizado = styled.p`
    font-size: 24px;
    color: #D9D9D9;
`
const Tag = ( {setCategoriaSeleccionada} ) => {
    return (
        <>
            <TagContainer>
                <ParrafoEstilizado>Busque por tags:</ParrafoEstilizado>

                {tags.map(tag => {
                    return (
                        <TagEstilizado 
                            key={tag.titulo}
                            onClick={() => setCategoriaSeleccionada(tag.titulo)}
                            >
                                {tag.titulo}
                        </TagEstilizado>
                    )
                })}
            </TagContainer>

        </>
    )
}

export default Tag