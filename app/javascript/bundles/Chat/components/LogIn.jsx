import PropTypes from 'prop-types';
import React from 'react';

const LogIn = ({ name, updateName }) => (
  <div>
    <h3>
      Hello, {name}!
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

LogIn.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.func.isRequired,
};

export default LogIn;
