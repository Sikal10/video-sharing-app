import {Image, Item, Logo, SidebarContainer, SidebarWrapper, Line, SidebarTop, Title} from "./sidebarStyle";
import {MdHome, MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineArticle} from "react-icons/md";
import {MdOutlineHistory, MdOutlineLibraryMusic, MdSportsSoccer, MdOutlineSportsEsports, MdOutlineMovie} from "react-icons/md";
import {MdLiveTv, MdOutlineSettingsSuggest, MdOutlinedFlag, MdHelpOutline, MdOutlineSettingsBrightness} from "react-icons/md";
import {MdMenu} from "react-icons/md";
import {Link} from "react-router-dom";

const Sidebar = ({darkMode, setDarkMode}) => {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarTop>
                    <MdMenu size={"24px"} />

                    <Link to={"/"}>
                        <Logo>
                            <Image />
                            <p>VidTube</p>
                        </Logo>
                    </Link>
                </SidebarTop>

                <Item>
                    <MdHome size={"24px"} />
                    <p>Home</p>
                </Item>

                <Item>
                    <MdOutlineExplore size={"24px"} />
                    <p>Explore</p>
                </Item>

                <Item>
                    <MdOutlineSubscriptions size={"24px"} />
                    <p>Subscriptions</p>
                </Item>

                <Line />

                <Item>
                    <MdOutlineVideoLibrary size={"24px"} />
                    <p>Library</p>
                </Item>

                <Item>
                    <MdOutlineHistory size={"24px"} />
                    <p>History</p>
                </Item>


                <Line />

                <Title>
                    More from VidTube
                </Title>

                <Item>
                    <MdOutlineLibraryMusic size={"24px"} />
                    <p>Music</p>
                </Item>

                <Item>
                    <MdSportsSoccer size={"24px"} />
                    <p>Sports</p>
                </Item>

                <Item>
                    <MdOutlineSportsEsports size={"24px"} />
                    <p>Gaming</p>
                </Item>

                <Item>
                    <MdOutlineMovie size={"24px"} />
                    <p>Movies</p>
                </Item>

                <Item>
                    <MdOutlineArticle size={"24px"} />
                    <p>News</p>
                </Item>

                <Item>
                    <MdLiveTv size={"24px"} />
                    <p>Live</p>
                </Item>

                <Line />


                <Item>
                    <MdOutlineSettingsSuggest size={"24px"} />
                    <p>Settings</p>
                </Item>

                <Item>
                    <MdOutlinedFlag size={"24px"} />
                    <p>Report</p>
                </Item>

                <Item>
                    <MdHelpOutline size={"24px"} />
                    <p>Help</p>
                </Item>

                <Item onClick={() => setDarkMode(!darkMode)}>
                    <MdOutlineSettingsBrightness size={"24px"} />
                    <p>{darkMode ? "Light" : "Dark"} Mode</p>
                </Item>

            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;