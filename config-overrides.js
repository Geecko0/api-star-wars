/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-require-imports */
const { override } = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

module.exports = override(addReactRefresh());
