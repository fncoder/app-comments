import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

const FormButtons = props => (
  <div className="form-buttons">
    <button type="submit" className="btn btn--register"><span className="btn-name">Register</span></button>
    <button type="button" onClick={props.handleLogin} className="btn btn--login"><span className="btn-name">Login</span></button>
  </div>
);

FormButtons.propTypes = propTypes;

export default FormButtons;
