import styled from "styled-components";
import tags from "./tags.json";

const ContainerTags = styled.div`
    display: flex;
    gap: 24px;
    margin: 1.5rem;
    align-items: center;
`;

const Subtitulo = styled.p`
    color: white;
    font-size: 24px;
    font-weight: normal;
    line-height: 28.8px;
`;

const BotaoTags = styled.button`
    border-radius: 10px;
    padding: 10px 8px;
    background-color: #D9D9D94D;
    color: white;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        border: 2px solid #C98CF1;
    }
    /* border: ${props => props.$bordaAtiva ? "5px solid linear-gradient(to right, #C98CF1, #7B78E5) 1" : "none"}; */
`;

const Tags = () => {
    return (
        <ContainerTags>
            <Subtitulo>Busque por tags:</Subtitulo>
            <ContainerTags>
                {
                    tags.map(tag => <BotaoTags key={tag.id}>{tag.titulo}</BotaoTags>)
                }
            </ContainerTags>
        </ContainerTags>
    );
}

export default Tags;