import styled from "styled-components";
import VideoCard from "../components/VideoCard/VideoCard";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
`;

const Home = () => {
    return (
        <HomeContainer>
            <VideoCard image={"https://i.ytimg.com/vi/wryPX7KSwSc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjb3P6txw3Svs7W18Y4lPuh28NbQ"}/>
            <VideoCard image={"https://i.ytimg.com/vi/wryPX7KSwSc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjb3P6txw3Svs7W18Y4lPuh28NbQ"}/>
            <VideoCard image={"https://i.ytimg.com/vi/wryPX7KSwSc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjb3P6txw3Svs7W18Y4lPuh28NbQ"}/>
            <VideoCard image={"https://i.ytimg.com/vi/wryPX7KSwSc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjb3P6txw3Svs7W18Y4lPuh28NbQ"}/>
            <VideoCard image={"https://i.ytimg.com/vi/wryPX7KSwSc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjb3P6txw3Svs7W18Y4lPuh28NbQ"}/>
            <VideoCard image={"https://i.ytimg.com/vi/wryPX7KSwSc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjb3P6txw3Svs7W18Y4lPuh28NbQ"}/>
        </HomeContainer>
    );
};

export default Home;