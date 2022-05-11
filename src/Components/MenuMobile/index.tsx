import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from '../../Context/NavContext';

import * as C from './styles';

const MenuMobile: React.FC = () => {

    const { openMenu } = useContext(NavContext);

  return (
      <C.Container wrapper={openMenu}>
          <nav>
              <ul>
                  <Link to="">Home</Link>
                  <Link to="">Home</Link>
                  <Link to="">Home</Link>
                  <Link to="">Home</Link>
                  <Link to="">Home</Link>
                  <Link to="">Home</Link>
                  <Link to="">Home</Link>
              </ul>
          </nav>
      </C.Container>
  );
}

export default MenuMobile;