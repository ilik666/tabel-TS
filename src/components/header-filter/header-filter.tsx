import React from 'react';
import { HeaderTitlesConsumer } from '../header-context/header-context';

export const HeaderFilter: React.FC = () => {
  return (
    <HeaderTitlesConsumer>
      {
        (item) => {
          return item && item.map( (el, _) => <button key={_}> {el} </button>)
        }
      }
    </HeaderTitlesConsumer>
  );
}
