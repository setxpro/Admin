import React from 'react';
import { Link } from 'react-router-dom';

interface EcommerceDropdownProps {
    ecommerce: string;
    link: string;
}

const EcommerceDropdown: React.FC<EcommerceDropdownProps> = ({ecommerce, link}) => {
  return (
        <Link to={`/${link}`}>
            <span></span>
            <li>{ecommerce}</li>
        </Link>
  );
}

export default EcommerceDropdown;