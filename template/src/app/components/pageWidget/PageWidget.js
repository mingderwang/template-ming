// @flow weak
/* eslint consistent-return: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const <%= PageName %> = ({
  <%= pageName %>FaIconName,
  <%= pageName %>IconColor,
  <%= pageName %>Label,
  <%= pageName %>IconSpin
}) => (
    <div className="<%= pageName %>">
      <div style={{ textAlign: 'center' }}>
        <span className="fa-stack fa-lg fa-3x">
          <i
            className="fa fa-circle fa-stack-2x"
            style={{ color: '#FFFFFF' }}>
          </i>
          <i
            className={`fa ${<%= pageName %>FaIconName} ${<%= pageName %>IconSpin ? 'fa-spin' : ''} fa-stack-1x fa-inverse`}
            style={{ color: <%= pageName %>IconColor }}>
          </i>
        </span>
      </div>
      <h5 className="<%= pageName %>-info">
        {<%= pageName %>Label}
      </h5>
    </div>
  );

<%= PageName %>.propTypes = {
  <%= pageName %>FaIconName: PropTypes.string.isRequired,
  <%= pageName %>IconColor: PropTypes.string,
  <%= pageName %>Label: PropTypes.string.isRequired,
  <%= pageName %>IconSpin: PropTypes.bool.isRequired
};

<%= PageName %>.defaultProps = {
  <%= pageName %>Color: '4A4A4A',
  <%= pageName %>IconSpin: false
};

export default <%= PageName %>;

