import styled from "styled-components";
import VideoCard from "../components/VideoCard/VideoCard";
import {videoCards} from "../data";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
`;

const Home = () => {
    return (
        <HomeContainer>
            {videoCards.map((card) => <VideoCard card={card}/>)}
         </HomeContainer>
    );
};

export default Home;