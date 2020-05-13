import React from 'react';
import PropTypes from 'prop-types';

import MoneyBookItem from './MoneyBookItem';

const MoneyBookList = ({ books }) => (
  <div>
    <table className="book">
      <thead data-type="ok">
        <tr>
          <th>日付</th>
          <th>項目</th>
          <th>入金</th>
          <th>出金</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <MoneyBookItem book={book} key={index} />
        ))}
      </tbody>
    </table>
  </div>
);

MoneyBookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default MoneyBookList;
