/* eslint-disable import/prefer-default-export, react/prop-types */

import React from 'react';
import TopLayout from './src/components/TopLayout';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};