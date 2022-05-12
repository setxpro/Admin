import styled from 'styled-components';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { IoFileTrayOutline } from 'react-icons/io5'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'
import { MdAttachFile } from 'react-icons/md'
import { MdPictureAsPdf } from 'react-icons/md'

export const Container = styled.div`
  height: 518px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.navBar};
  position: relative;
`;
export const AreaTitle = styled.div`
    width: 100%;
    height: 60px;
    background: ${props => props.theme.colors.primary};
    position: sticky; // OBS


    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    h2 {
        font-size: 1.3rem;
        color: ${props => props.theme.colors.text};
    }
`;

export const ArrowLeft = styled(AiOutlineArrowLeft)`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
`;

export const ContentActionsMessage = styled.div`
    display: flex;
    gap: 1rem;
`;

export const FullStar = styled(AiOutlineStar)`
    font-size: 1.5rem;
    color: #ff0;
    cursor: pointer;
    
`;
export const Star = styled(AiFillStar)`
    font-size: 1.5rem;
    color: #ff0;
    cursor: pointer;
`;
export const Archive = styled(IoFileTrayOutline)`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
`;
export const Local = styled(MdOutlineLocalOffer)`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
`;
export const EmailMessage = styled(AiOutlineMail)`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
`;
export const Trash = styled(FiTrash)`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
`;


export const ContentMessage = styled.div`
    width: 95%;
    height: 430px;
    margin: auto;
    margin-top: 1rem;
    padding: 1rem;
    background: ${props => props.theme.colors.primary};
    border-radius: 1rem;
`;
export const ContentTopoMessage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.border};
`;
export const ContentTopLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
export const ContentTopImage = styled.div`
    
    img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
    }
`;
export const ContentName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h3 {
        color: ${props => props.theme.colors.text};
        font-size: 1.5rem;
        font-weight: 400;
    }

    p {
        color: #666;
        font-size: 14px;
    }
`;

export const ContentTopRight = styled.div`

    span {
        color: #666;
    }
`;

export const ContentBottomMessage = styled.div`

    padding: 3rem 1rem;

    p {
        color: ${props => props.theme.colors.text};
        font-size: 1rem;
    }
`;

export const Attach = styled(MdAttachFile)`
    font-size: 1.5rem;
    color: #666;
    cursor: pointer;
`;
export const PDFIcon = styled(MdPictureAsPdf)`
    font-size: 1.5rem;
    color: #EA5455;
    cursor: pointer;
`;

export const ContentAttachment = styled.div`
    border-top: 1px solid ${props => props.theme.colors.border};
    padding-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
        :nth-child(1) {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #666;
        }
        :nth-child(2) {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #666;
        }
    }

`;