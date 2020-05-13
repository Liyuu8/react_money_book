import React from 'react';
import PropTypes from 'prop-types';

const MoneyBookItem = (props) => {
  const { date, item, amount } = props.book;
  return (
    <tr>
      <td>{date}</td>
      <td>{item}</td>
      <td>{amount >= 0 ? amount : null}</td>
      <td>{amount < 0 ? -amount : null}</td>
    </tr>
  );
};

MoneyBookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default MoneyBookItem;
