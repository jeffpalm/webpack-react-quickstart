import React from 'react';
import PropTypes from 'prop-types';

export default class CheckboxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <label>
        <input
          type='checkbox'
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

CheckboxExample.propTypes = {
  labelOn: PropTypes.string,
  labelOff: PropTypes.string
};
