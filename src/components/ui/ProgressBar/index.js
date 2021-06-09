import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const ProgressBar = ({ title, percentage }) => (
  <Styled.ProgressBar>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Content>
  </Styled.ProgressBar>
);

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default ProgressBar;
