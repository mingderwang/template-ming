// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  Panel,
  <%= PageName %> as <%= PageName %>Component
}                         from '../../components';
import Highlight          from 'react-highlight';
import Iframe             from 'react-iframe';

class <%= PageName %> extends PureComponent {
  componentWillMount() {
    const { actions: { enter<%= PageName %> } } = this.props;
    enter<%= PageName %>();
  }

  componentWillUnmount() {
    const { actions: { leave<%= PageName %> } } = this.props;
    leave<%= PageName %>();
  }

  render() {
    return(
      <div>
        <Iframe url="https://demo.elastic.co/"
          height="100%"
          id="kibana"
          className="kibana-class"
          display="initial"
          allowFullScreen
        />
      </div>
    );
  }
}

<%= PageName %>.propTypes= {
  actions: PropTypes.shape({
    enter<%= PageName %>: PropTypes.func.isRequired,
    leave<%= PageName %>: PropTypes.func.isRequired
  })
};

export default <%= PageName %>;
