import styled from 'styled-components';

export const Container = styled.div<{openDropdown:boolean}>`
    transition: all 1s ease;
    background: ${props => props.theme.colors.sidebar};
    width: 18%;

    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-track {
        background-color: rgba(0,0,0,0.2);
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.4);
    }

    nav {
        transition: all 1s ease;
        background: ${props => props.theme.colors.sidebar};
        height: 100%;
         
        
        ul {
            display: flex;
            flex-direction: column;

            .content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .select {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                transition: all .5s ease;
                height: 110px;


                    span {
                            height: 10px;
                            width: 10px;
                            border: 1px solid #FFF;
                            border-radius: 50%;
                            position: absolute;
                            margin-top: 1px;
                    }
            }
            .none {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                transition: all 1s ease;
                height: 0px;
                overflow: hidden;
            }
            

                a {
                    text-decoration: none;
                    transition: all 1s ease;
                    color: ${props => props.theme.colors.text};
                    font-size: 1rem;
                    font-weight: 500;
                    width: 80%;
                    margin: auto;

                    border-radius: 4px;

                    display: flex;
                    align-items: center;
                }
                
                p {
                    transition: all 1s ease;
                    color: ${props => props.theme.colors.text};
                    font-size: 1rem;
                    text-align: center;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                }

                li {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 5px 16px;

                    span {
                        height: 10px;
                        width: 10px;
                        border: 1px solid #FFF;
                        border-radius: 50%;
                    }

                    button {
                        transition: all 1s ease;
                        color: ${props => props.theme.colors.text};
                        border: none;
                        outline: none;
                        background: #161D31;
                        cursor: pointer;
                        font-size: 1rem;
                        font-weight: 500;
                        margin-top: 1rem;
                        width: 100%;
                        margin: auto;
                        padding: 5px;
                        border-radius: 4px;
                        
                    }
                }

            button {

            }
            
        }
    }

    @media (max-width: 800px) {
        display: none;
    }
`;

export const Title = styled.div`
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
        font-weight: bold;
        font-size: 22px;
        color: #dedede;
    }
`;