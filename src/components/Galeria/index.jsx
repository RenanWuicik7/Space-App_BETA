import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import ItemFoto from "./ItemFoto";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const Galeria = ({ fotos = [] }) => {
    return (
        <> 
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ul>
                    {fotos.map(foto => <ItemFoto />)}
                    </ul>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>

        </>
    );
}

export default Galeria;