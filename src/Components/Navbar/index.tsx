import React, { useContext, useState } from 'react';
import { NavContext } from '../../Context/NavContext';
import { 
  NavMailIcon, 
  NavTodoIcon, 
  NavChatIcon, 
  NavCalendarIcon,
  SearchIcon,
  CartIcon,
  DarkIcon,
  LightIcon,
  BellIcon,
  BarsIcon
} from '../../icons/navbarIcons';
import { Container, LeftSide, RightSide, ContentAvatar, ContentNameOcupation,  ContentImage} from './styles';

interface NavbarProps {
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({toggleTheme}) => {

  const { wrapperMenu } = useContext(NavContext);

  const [openSearch, setOpenSearch] = useState(false);
  const open = () => setOpenSearch(!openSearch);

  const [toggleThemeButton, setToggleThemeButton] = useState(false);
  const toggle = () => setToggleThemeButton(!toggleThemeButton);
  
  return (
      <Container>
        <LeftSide>
          <BarsIcon onClick={wrapperMenu}/>
          <NavMailIcon/>
          <NavTodoIcon/>
          <NavChatIcon/>
          <NavCalendarIcon/>
        </LeftSide>
        <RightSide openSearch={openSearch}>
          <input type="search" name="search"/> 
          <SearchIcon onClick={open}/>
          <span onClick={toggle}>{toggleThemeButton ? <DarkIcon onClick={toggleTheme}/> : <LightIcon onClick={toggleTheme}/>}</span>
            <div>
              <CartIcon/>
              <span>11</span>
            </div>
            <button>
              <BellIcon/>
            </button>
          <ContentAvatar>
            <ContentNameOcupation>
                <h3>Patrick Anjos</h3>
                <p>Developer</p>
            </ContentNameOcupation>
            <ContentImage>
                <img src="https://github.com/setxpro.png" alt='avatar'/>
            </ContentImage>
          </ContentAvatar>
        </RightSide>
      </Container>
  );
}

export default Navbar;