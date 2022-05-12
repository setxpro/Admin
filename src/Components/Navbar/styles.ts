import styled from 'styled-components';

export const Container = styled.div`
    transition: all 1s ease;
    background: ${props => props.theme.colors.navBar};
    height: 62px;
    border-radius: 8px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0px;
    z-index: 2;

    box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const LeftSide = styled.div`
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const RightSide = styled.div<{openSearch:boolean}>`
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
        padding: 5px;
        transition: all 1s ease;
        width: ${props => props.openSearch ? '250px' : '0px'};
        opacity: ${props => props.openSearch ? '1' : '0'};
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid #999;
        background: transparent;
        outline: none;
        color: ${props => props.theme.colors.text};
        font-size: 1rem;
        caret-color: #444DDD;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0; 

        cursor: pointer;
        position: relative;
        background: transparent;
        border: none;
    
        &::after {
            background: #EA545A;
            width: auto;
            height: 16px;
            padding: 0 4px;
            position: absolute;
            top: -2px;
            right: -4px;
            border-radius: 16px;
            border: 2px solid #283046; 
            text-align: right;
            font-size: 13px;
            font-weight: bold;
            color: #FFF;

            content: '5';
        }

        
    }
    > div {
            position: relative;
            

            span {
                position: absolute;
                top: 0;
                right: 0;
                color: #FFF;
                font-size: 13px;
                font-weight: bold;

                width: 16px;
                height: 16px;
                background: #444DDD;
                border-radius: 8px;

                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
`;

export const ContentAvatar = styled.div`
        display: flex;
        align-items: center;
        gap: .5rem;
`;
export const ContentNameOcupation = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-weight: 500;
        color: ${props => props.theme.colors.text};
    }
    p {
        font-weight: 400;
        color: ${props => props.theme.colors.text};
        text-align: right;
    }
`;
export const ContentImage = styled.div`
    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
`;


