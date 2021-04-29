import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
/* Speed Dial Components */
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

/* Icons */
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExploreIcon from '@material-ui/icons/Explore';
import AppsIcon from '@material-ui/icons/Apps';

/* Anchor Scroll */
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { goToTop } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'



const actions = [
    {icon: <FaceIcon/>, name: "About"},
    {icon: <WorkIcon/>, name: "Experience"},
    {icon: <BuildIcon/>, name: "Projects"},
    {icon: <AssignmentIcon/>, name: "Resume"},
    {icon: <AppsIcon/>, name: "Contact"},
];

const styles = theme => ({
  speedDialClass : {
  },

  button: {
    background: "transparent",
    color: "white",
    "&:hover" : {
      background: "transparent",
      color: "#3f51b5",
    }
  },

  fab: {
    padding: 0,
    margin: 0,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    background: "transparent",
    "&:hover" : {
      background: "transparent",
    }
  },

});

class FABNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      direction: "down",
      profile: false,
      experience: false,
      project: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToExperience = this.goToExperience.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToProject = this.goToProject.bind(this);
  }

  componentDidUpdate(){
    if(this.state.experience){
      this.props.scrollToExperience();
      this.setState({
        experience:false,
      });
    }
    if(this.state.profile){
      this.props.setToTop();
      this.setState({
        profile: false,
      })
    }
    if(this.state.project){
      this.props.setToProject();
      this.setState({
        project: false,
      })
    }

  }

  handleClick(){
    //Flip to opposite of current state
    this.setState({
      open: !this.state.open,
    })
  }

  handleOpen(){

      this.setState({
        open: true,
      })

  }

  handleClose(){

      this.setState({
        open: false,
      })

  }

  testScroll(){
  }

  goToProfile(){
    this.setState({
      profile: true,
    })
  }

  goToExperience(){
    this.setState({
      experience: true,
    })
  }

  goToProject(){
    this.setState({
      project: true,
    });
  }


  render(){

    let styles = {
      speedDialIconStyle: {
        color: "white",
        backgroundColor: "transparent",
      }
    }

    const {classes} = this.props;


    return(
      // Create speed dial
      <div>
        <SpeedDial
          ariaLabel="FABNav"
          classes = {{
            fab: classes.fab,
            root: classes.root,
          }}
          icon = {<SpeedDialIcon openIcon={<MenuIcon/>} style = {styles.speedDialIconStyle}/>}
          open = {this.state.open}
          onMouseEnter = {this.handleOpen}
          onMouseLeave = {this.handleClose}
          direction = {this.state.direction}
          onFocus = {this.handleOpen}
          onClick = {this.handleClick}
          onClose = {this.handleClose}
        >

          // handle popup elements in speed dial

          <SpeedDialAction
            classes = {{
              button: classes.button,
            }}
            key = {actions[0].name}
            icon = {actions[0].icon}
            tooltipTitle = {actions[0].name}
            onClick = {this.goToProfile}
          />
          <SpeedDialAction
            classes = {{
              button: classes.button,
            }}
            key = {actions[1].name}
            icon = {actions[1].icon}
            tooltipTitle = {actions[1].name}
            onClick = {this.goToExperience}
          />
          <SpeedDialAction
            classes = {{
              button: classes.button,
            }}
            key = {actions[2].name}
            icon = {actions[2].icon}
            tooltipTitle = {actions[2].name}
            onClick = {this.goToProject}
          />




        </SpeedDial>
      </div>


    );
  }
}

FABNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FABNav);
