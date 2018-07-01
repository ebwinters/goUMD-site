import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 5px 10px 5px 10px;
  font-size: 20px;
  font-family: arial;
  cursor: pointer;
  margin: 0 1.5em;
  background: transparent;
  color: #FFD200;
  border: 3px solid #FFD200;
  :hover {
    transform: scale(1.05);
    background-color: #FFD200;
    color: black;
  }
  :focus {
    outline-width: 0;

  }
`;

export {Button}

// export default class Welcome extends React.Component {
//   render() {
//     return (
//       <button>HI</button>
//     );
//   }
// }

