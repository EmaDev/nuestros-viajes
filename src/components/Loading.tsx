import React from 'react';
import styled from 'styled-components';

const Screen = styled.section`
   width: 100%;
   min-height: 100vh;
   background-color: #9f70c7;
   position:absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   margin:auto;
   display: flex;
   justify-content:center;
   align-items:center;
`;

const Spinner = styled.div`
    width: 70px;
    height: 70px;
    margin: 100px auto;
    background-color: #fff;
  
    border-radius: 100%;  
    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
    animation: sk-scaleout 1.0s infinite ease-in-out;

    @-webkit-keyframes sk-scaleout {
        0% { -webkit-transform: scale(0) }
        100% {
          -webkit-transform: scale(1.0);
          opacity: 0;
        }
      }
      
      @keyframes sk-scaleout {
        0% { 
          -webkit-transform: scale(0);
          transform: scale(0);
        } 100% {
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
          opacity: 0;
        }
      }
`;
export const Loading = () => {
    return (
        <Screen>
            <Spinner/>
        </Screen>
    )
}
