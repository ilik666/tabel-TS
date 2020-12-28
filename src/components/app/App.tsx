import React from 'react';
import { TableList } from '../table-list/table-list';
import { HeaderTitlesProvider } from '../header-context/header-context';
import { HeaderFilter } from "../header-filter/header-filter";

export const App: React.FC = () => {
  const [headersTable, setHeadersTitle] = React.useState(['Product (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)', 'Iron (%)'])

  return (
    <HeaderTitlesProvider value={ headersTable }>
      <div className="App">
          <HeaderFilter />
          <TableList />
      </div>
    </HeaderTitlesProvider>
  );
}
