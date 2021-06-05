import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import constants from '../../constants';
const {CATEGORY_TITLES, CATEGORY_CONSTANTS, COLORS} = constants;

const handleColorType = category => {
  switch (category) {
    case CATEGORY_TITLES.CAFE_RESTAURANTS.shortTitle:
      return COLORS.CAFE_RESTAURANTS;
    case CATEGORY_TITLES.SUPERMARKETS_HYPERMARKETS.shortTitle:
      return COLORS.SUPERMARKETS_HYPERMARKETS;
    case CATEGORY_TITLES.COFFEE_HOUSE_BAKERY.shortTitle:
      return COLORS.COFFEE_HOUSE_BAKERY;
    case CATEGORY_TITLES.CRAFT_PRODUCTS_STORES.shortTitle:
      return COLORS.CRAFT_PRODUCTS_STORES;
    default:
      return COLORS.DEFAULT;
  }
};

const Button = styled.button`
  background: ${({type, category, selected}) => type === 'rounded' ? COLORS.BLACK : selected ? handleColorType(category) : 'none'};
  font-family: 'Inter', sans-serif;
  font-size: ${({type}) => type === 'rounded'? '.65rem' : '.8rem'};
  font-weight: bold;
  text-transform: ${({type}) => type === 'no-bg' || type === 'rounded'? 'uppercase' : 'capitalize'};
  margin: 0.25em;
  color: ${({type}) => type === 'rounded'? COLORS.WHITE : COLORS.BLACK};
  min-width: ${({type}) => type === 'rounded'? '220px' : 'auto'};
  padding: 0.75em 1em;
  border-radius:  ${({type}) => type === 'rounded'? '50px' : 0};
  border: 1.5px solid ${({category, type}) => type === 'no-bg'? 'transparent' : handleColorType(category)};
  &:disabled{
    opacity: .5;
  }
`;

const ButtonComp = ({disabled, id, category, className, type, selected, link, onClickHandler, children}) => {
  if(link)
      return (
        <Button
          disabled={disabled}
          id={id}
          className={className}
          type={type}
          category={children? children : category}>
            <Link to={`/${link}`}>
              {children}
            </Link>
        </Button>
      );

    return (
        <Button
          disabled={disabled}
          id={id}
          className={className}
          type={type}
          selected={selected}
          category={children? children : category}
          onClick={onClickHandler}
        >{children}
        </Button>
    )
};

// const Button = ({type, link, onClickHandler, children}) => {
//     const getText = () => {
//         switch (type) {
//             case 'signup':
//                 return 'познайомитись';
//             case 'follow':
//                 return 'перейти';
//             case 'start':
//                 return 'почати';
//             case 'contionue':
//                 return 'продовжити';
//             case 'choose':
//                 return 'вибрати';
//             case 'category':
//                 return children;
//             default:
//                 return 'перейти';
//         };
//     }
//     const text = getText();
//     if(link)
//         return <Link to={`/${link}`}>{text}</Link>;

//     return <button onClick={onClickHandler}>{text}</button>
// };

export default ButtonComp;