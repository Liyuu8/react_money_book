import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';
import MoneyBookList from './MoneyBookList';
import MoneyEntry from './MoneyEntry';

class MoneyBook extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    this.setState({
      books: [
        { date: '1/1', item: 'お年玉', amount: 10000 },
        { date: '1/3', item: 'ケーキ', amount: -500 },
        { date: '2/1', item: '小遣い', amount: 3000 },
        { date: '2/5', item: '漫画', amount: -600 },
      ],
    });
  }

  addBook(date, item, amount) {
    this.setState({ books: this.state.books.concat({ date, item, amount }) });
  }

  render() {
    return (
      <div>
        <Title>小遣い帳</Title>
        <MoneyBookList books={this.state.books} />
        <MoneyEntry
          add={(date, item, amount) => this.addBook(date, item, amount)}
        />
      </div>
    );
  }
}

const Title = ({ children }) => <h1>{children}</h1>;

Title.propTypes = {
  children: PropTypes.string,
};

ReactDOM.render(<MoneyBook />, document.getElementById('root'));
