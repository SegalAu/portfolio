import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
/*React Grid system*/
import { Container, Row, Col } from 'react-grid-system';
/*Material UI core*/
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import TextLoop from "react-text-loop";



import CrossfadeImage from 'react-crossfade-image';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

/* Resources */
import profile1 from '../../resources/profile1.png';
import profile2 from '../../resources/profile2.png';
import profile3 from '../../resources/profile3.png';
import profileBackground from '../../resources/hkEdit3.png';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


import MoreVertIcon from '@material-ui/icons/MoreVert';

/* Buttons */
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { Parallax, Background } from 'react-parallax';



/* Menu List */
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import classnames from 'classnames';

/* Icons */
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import scrollToComponent from 'react-scroll-to-component';

const styles = theme => ({

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

});

class BackToTop extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      imageIndex: 0,
      expanded: false,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleExpandClick(){
    this.setState({
        expanded: !this.state.expanded,
    });
  }




  render(){
    const { classes } = this.props;

    let stylesRender = {
      bottomButtonStyle:{
        color: "white",
        marginLeft: 14,
      },

      centeredDiv:{
        width: 100,

      },

      allElements: {
        height: 800,
      },

      experienceText:{
        color: "white",
      },
    }

    return(

      <div>
          <div style={stylesRender.centeredDiv}>
            <Typography variant="overline" gutterBottom style={stylesRender.experienceText}>
              BACK
              TO
              TOP
            </Typography>
            <IconButton
              onClick={this.props.setToTop}
              aria-label="Show more"
              style={stylesRender.bottomButtonStyle}>
                <ArrowUpwardIcon fontSize="large"/>
            </IconButton>
          </div>
      </div>
    );
  }
}

BackToTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackToTop);
