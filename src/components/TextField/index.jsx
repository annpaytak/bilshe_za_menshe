import React from 'react';
import styled from 'styled-components';

import constants from '../../constants';
const {CATEGORY_TITLES, CATEGORY_CONSTANTS} = constants;

const Input = styled.input`
  width: calc(100% - 2.75em);
  font-family: 'Neutral Face', 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0.25em;
  padding: 0.55em 1em;
  border: 1px solid #000;
  border-radius: 6px;
  background: transparent;
`;

const TextField = ({type, placeholder, value, onChangeHandler}) => {
    return (
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}/>
    )
};

export default TextField;