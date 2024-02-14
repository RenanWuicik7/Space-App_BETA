import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 3.75rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        max-width: 13.25rem;
    }
`;

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <CampoTexto />
        </HeaderEstilizado>
    );
}

export default Cabecalho;