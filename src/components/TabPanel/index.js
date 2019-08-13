import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class TabPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  // Property validator for TabPanel
  static propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    }
  }

  render() {
    return(
      <Typography
        component="div"
        role="tabpanel"
        hidden={this.props.value != this.props.index}
        id={`simple-tabpanel-${this.props.index}`}
        aria-labelledby={`simple-tab-${this.props.index}`}
        {...this.props.other}
      >
        <Box p={3}>{this.props.children}</Box>
      </Typography>
    );
  }
}

export default TabPanel;