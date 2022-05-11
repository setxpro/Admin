import styled from "styled-components";

import { AiOutlineMail } from 'react-icons/ai';
import { RiTodoLine } from 'react-icons/ri';
import { BsChatLeftDots } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';

import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';




export const NavMailIcon = styled(AiOutlineMail)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;    
`;
export const NavTodoIcon = styled(RiTodoLine)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`;
export const NavChatIcon = styled(BsChatLeftDots)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`;
export const NavCalendarIcon = styled(AiOutlineCalendar)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`;
export const LightIcon = styled(MdOutlineLightMode)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`;
export const DarkIcon = styled(MdOutlineNightlight)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`;
export const SearchIcon = styled(AiOutlineSearch)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`;
export const CartIcon = styled(AiOutlineShoppingCart)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
    position: relative;

       
`;
export const BellIcon = styled(AiOutlineBell)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
    position: relative;
        
`;

export const BarsIcon = styled(FaBars)`
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;

    display: none;

    @media (max-width: 800px) {
        display: inline;
    }
`;