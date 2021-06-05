import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import Button from '../../components/Button';

import constants from '../../constants';
const {CATEGORY_TITLES, CATEGORY_CONSTANTS, ALL_CATEGORIES, ALL_ITEMS, COLORS} = constants;


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

const Div = styled.div`
    display: grid;
//   background: ${({type, category, selected}) => type === 'rounded' ? COLORS.BLACK : selected ? handleColorType(category) : 'none'};
//   font-family: 'Inter', sans-serif;
//   font-size: ${({type}) => type === 'rounded'? '.65rem' : '.8rem'};
//   font-weight: bold;
//   text-transform: ${({type}) => type === 'no-bg' || type === 'rounded'? 'uppercase' : 'capitalize'};
//   margin: 0.25em;
//   color: ${({type}) => type === 'rounded'? COLORS.WHITE : COLORS.BLACK};
//   min-width: ${({type}) => type === 'rounded'? '220px' : 'auto'};
//   padding: 0.75em 1em;
//   border-radius:  ${({type}) => type === 'rounded'? '50px' : 0};
//   border: 1.5px solid ${({category, type}) => type === 'no-bg'? 'transparent' : handleColorType(category)};
//   &:disabled{
//     opacity: .5;
//   }
`;

const DiscountItem = () => {
    let { id } = useParams();
    const item = ALL_ITEMS.find(i => i.id === Number(id));
    const {category, title, date, description, place, address, city, image, price, discount, weight} = item;

    // if(link)
    //   return (
    //     <Button
    //       disabled={disabled}
    //       id={id}
    //       className={className}
    //       type={type}
    //       category={children? children : category}>
    //         <Link to={`/${link}`}>
    //           {children}
    //         </Link>
    //     </Button>
    //   );

    return (
        <Div
            // disabled={disabled}
            // id={id}
            // className={className}
            // type={type}
            // category={children? children : category}
            >
            <Button
                type='no-bg'
                link='discounts'>
                <i class='fas fa-chevron-left'></i>
            </Button>
            <img src={image} alt='' />
            <p>{category}</p>
            <p>{title}</p>
            <p>{date}</p>
            <p>{description}</p>
            <p>{place}</p>
            <p>{city}</p>
            <p>{address}</p>
            {/* badges */}
            <p>{price}uah</p>
            <p>{discount}%</p>
            <p>{weight}g</p>
            {/* <p>{city}</p> */}
        </Div>
    )
};

export default DiscountItem;