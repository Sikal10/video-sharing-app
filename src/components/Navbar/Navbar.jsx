import {MdOutlineAccountCircle, MdOutlineSearch, MdKeyboardVoice} from "react-icons/md";
import {Button, Input, MiddleContainer, NavbarContainer, SearchBar, StyledNavbar} from "./navbarStyles";

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarContainer>
                <div/>

                <MiddleContainer>
                    <SearchBar>
                        <Input placeholder={"Search"} />

                        <div>
                            <MdOutlineSearch size={"24px"} />
                        </div>
                    </SearchBar>

                    <div>
                        <MdKeyboardVoice size={"24px"}/>
                    </div>
                </MiddleContainer>

                <Button>
                    <MdOutlineAccountCircle size={"20px"} />
                    Sign In
                </Button>
            </NavbarContainer>
        </StyledNavbar>
    );
};

export default Navbar;