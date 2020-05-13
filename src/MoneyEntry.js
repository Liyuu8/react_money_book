import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoneyEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { date: '', item: '', amount: '', payingIn: true };
  }

  onChangeValue(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onChangePayingIn(event) {
    this.setState({ payingIn: event.target.value == 'on' });
  }

  onClickSubmit() {
    this.props.add(
      this.state.date,
      this.state.item,
      this.state.amount * (this.state.payingIn ? 1 : -1)
    );
    this.setState = { date: '', item: '', amount: '', payingIn: false };
  }

  render() {
    return (
      <div className="entry">
        <fieldset>
          <legend>記帳</legend>
          <div>
            <label>
              <input
                type="radio"
                value="on"
                checked={this.state.payingIn}
                onChange={(event) => this.onChangePayingIn(event)}
              />
              入金
            </label>
            <label>
              <input
                type="radio"
                value="off"
                checked={!this.state.payingIn}
                onChange={(event) => this.onChangePayingIn(event)}
              />
              出金
            </label>
          </div>
          <div>
            日付：
            <input
              type="text"
              value={this.state.date}
              name="date"
              onChange={(e) => this.onChangeValue(e)}
              placeholder="3/15"
            />
          </div>
          <div>
            項目：
            <input
              type="text"
              value={this.state.item}
              name="item"
              onChange={(e) => this.onChangeValue(e)}
              placeholder="お小遣い"
            />
          </div>
          <div>
            金額：
            <input
              type="text"
              value={this.state.amount}
              name="amount"
              onChange={(e) => this.onChangeValue(e)}
              placeholder="1000"
            />
          </div>
          <div>
            <input
              type="submit"
              value="追加"
              onClick={() => this.onClickSubmit()}
            />
          </div>
        </fieldset>
      </div>
    );
  }
}

MoneyEntry.propTypes = {
  add: PropTypes.func.isRequired,
};

export default MoneyEntry;
