import React, { ReactNode } from 'react';

import { Container } from './styles';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => <Container>{children}</Container>

export default Layout;