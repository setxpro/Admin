import styled from 'styled-components';

import { AiOutlineLineChart } from 'react-icons/ai';
import { RiTodoLine } from 'react-icons/ri';
import { BsChatLeftDots } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineFindInPage } from 'react-icons/md';
import { FaSitemap } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';


export const ChartIcon = styled(AiOutlineLineChart)`
    position: absolute;
    margin-left: 1rem;
    font-size: 1.5rem;
    transition: all 1s ease;
    color: #FFF;
`;
export const TodoIcon = styled(RiTodoLine)`
    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
    
`;
export const ChatIcon = styled(BsChatLeftDots)`
    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
`;
export const MailIcon = styled(AiOutlineMail)`
    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
`;
export const PageIcon = styled(MdOutlineFindInPage)`
    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
`;
export const CommerceIcon = styled(FaSitemap)`
    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
`;
export const ClientIcon = styled(FaUserTie)`
    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
`;
export const EmployeesIcon = styled(FaUsers)`
    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
`;
export const AttachMoney = styled(MdOutlineAttachMoney)`
    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
`;