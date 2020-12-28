import React from 'react';
import { HeaderTitlesConsumer } from '../header-context/header-context';
import './table-list.css'
import {useDispatch, useSelector} from "react-redux";

export const TableList: React.FC = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(state)

  return (
    <table>
      <thead>
        <tr>
          <HeaderTitlesConsumer>
            {
              (titles) => {
                return titles && titles.map((title, id) => <th key={id}> { title }</th>)
              }
            }
          </HeaderTitlesConsumer>
        </tr>
      </thead>
      <tbody>
        <tr>

        </tr>
      </tbody>
    </table>
  );
}
