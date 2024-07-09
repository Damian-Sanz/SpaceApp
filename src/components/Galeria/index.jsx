import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFlotante = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = ({ fotos = [], setTag, fotoSelecionada, alAlternarFavorito }) => {

    return (
        <>
            <Tag setTag={setTag} />
            <GaleriaContainer>
                <SeccionFlotante>
                    <Titulo>Navega por la galería</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen foto={foto} key={foto.id} fotoSelecionada={fotoSelecionada} alAlternarFavorito={alAlternarFavorito} />)}
                    </ImagenesContainer>
                </SeccionFlotante>
                <Populares />
            </GaleriaContainer>
        </>
    )

}

export default Galeria