import styled from "styled-components";
import {Amiibo} from "../interfaces/Amiibos.ts";

const AllAmiibosDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const SingleAmiiboDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 15%;
    padding: 2%;
    margin: 2% 1%;
    font: calc(2px + 1vw) Copperplate, fantasy;
    text-align: center;
`;

export default function WiiAmiibos(props: {data:Amiibo[]}){
    return(
        <AllAmiibosDiv>
            {
                props.data.map((amii: Amiibo) =>
                    <SingleAmiiboDiv key={amii.character}>
                        <h1>{amii.name}</h1>
                        <p>Character {amii.character} from {amii.gameSeries}</p>
                        <p>Appears in {amii.amiiboSeries}</p>
                        <img src={amii.image} alt={`image of ${amii.name}`}/>
                    </SingleAmiiboDiv>
                )
            }
        </AllAmiibosDiv>

    )

}