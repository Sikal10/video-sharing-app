import Sidebar from "./components/Sidebar/Sidebar";
import styled, {ThemeProvider} from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./styles/GlobalStyles";
import React, {useState} from "react";
import {darkTheme, lightTheme} from "./styles/ThemeProvider";
import NavbarCategory from "./components/NavbarCategory/NavbarCategory";
import {Routes, Route, BrowserRouter, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video/Video";

const AppContainer = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 12;
  background: ${({theme}) => theme.colors.bg};
`;

const Wrapper = styled.div`
  padding: 30px;
`;

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const {pathname} = useLocation();

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <AppContainer>
                <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>

                <Main>
                    <Navbar/>
                    {pathname === "/" && <NavbarCategory/>}
                    <Wrapper>
                        <Routes>
                            <Route path={"/"}>
                                <Route index element={<Home/>}/>
                                <Route path={"video"}>
                                    <Route path={":id"} element={<Video/>}/>
                                </Route>
                            </Route>
                        </Routes>
                    </Wrapper>
                </Main>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
