import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Badge from '../Badge';

const Div = styled.div`
  width: calc(100% - 0.25em*2);
  height: 100%;
  display: grid;
  grid-template-columns: 26% 58% 16%;
  grid-template-rows: repeat(50%, 2);
  margin: 0.5em auto;
  padding: 0;
  .image {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    position: relative;
    border-radius: 50px;
    width: 90px;
  }
  .title {
    align-self: center;
    line-height: 16px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    font-family: 'Neutral Face', 'Inter', sans-serif;
    font-size: .75rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 48px;
  }
  .description {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    font-family: 'Inter', sans-serif;
    font-size: .5rem;
    font-weight: normal;
    margin: 0;
    max-height: 52px;
    line-height: .7rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .date {
    margin: 4px 4px 0 0;
    text-align: right;
    font-size: .5rem;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .badges {
    position: relative;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

const ListItem = ({item}) => {
    const {category, title, date, description, image, price, discount, place} = item;
    return (
      <Div category={category}>
          <Badge
            type='discount'
            category={category}>
            {discount}
          </Badge>
          <img className='image' src={image} alt="" />
          <p className='title'>{title} в {place}</p>
          <p className='description'>{description}</p>
          <p className='date'>{moment(date).startOf('day').fromNow()}</p>
          <div className='badges'>
            <Badge
              type='old-price'
              category={category}>
              {price? price : '56'}
            </Badge>
            <Badge
              type='new-price'
              category={category}>
              {price? (price-((discount/100)*price)).toFixed() : '56'}
            </Badge>
          </div>
      </Div>
    )
};

export default ListItem;