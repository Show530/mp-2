import WiiAmiibos from "./components/WiiAmiibos.tsx";
import styled from "styled-components";
import { useEffect, useState } from 'react';
import {Amiibo} from "./interfaces/Amiibos.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App() {
    // use hook for data storage
    const [data, setData] = useState<Amiibo[]>([]);

    // useEffect hook for error stuff and re-loading
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://www.amiiboapi.com/api/amiibo/");
            const {amiibo} : {amiibo: Amiibo[]} = await rawData.json();
            setData(amiibo);
        }
        fetchData()
            .then(() => console.log("Fetched data successfully!"))
            .catch((e: Error)=> console.log("There was an error: " + e))
    }, [data.length]);

    return(
        <ParentDiv>
            <WiiAmiibos data={data}/>
        </ParentDiv>
    )


}