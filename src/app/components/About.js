  import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
/* Material UI Mui Theme Override */
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Scrollbar from 'react-smooth-scrollbar';
/* React Typing Animation */
import Typing from 'react-typing-animation';
/* Button Linking */
import { Link } from 'react-router-dom'
/* Resume PDF */
import resumePDF from '../../resources/Resume.pdf';
/* React PDF */
import { Document, Page } from 'react-pdf';
/* React DOM */
import ReactDOM from 'react-dom';
/* Typed js */
import Typed from 'typed.js';
/*React Grid system*/
import { Container, Row, Col } from 'react-grid-system';
/*Material UI core*/
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import TextLoop from "react-text-loop";
import scrollToComponent from 'react-scroll-to-component';
import CrossfadeImage from 'react-crossfade-image';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

/* Resources */
import profile1 from '../../resources/profile1.png';
import profile2 from '../../resources/profile2.png';
import profile3 from '../../resources/profile3.png';
import profileBackground from '../../resources/hkEdit3.png';
import cycle1 from '../../resources/cycle1.png';
import cycle2 from '../../resources/cycle2.png';
import cycle3 from '../../resources/cycle3.png';
import testgif from '../../resources/RCHWayfinderDisplay.gif';
import rainBack from '../../resources/rainBackground.mp4';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CodeIcon from '@material-ui/icons/Code'

/* Buttons */
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
/* Parallax */
import { Parallax, Background } from 'react-parallax';

/* Card Material UI */
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse'

/* Menu List */
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import classnames from 'classnames';

/*Anchors */
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { goToTop } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'

/* React Media Mobile */
import MediaQuery from 'react-responsive';

var aboutText = "An energetic and focused individual with a drive for the betterment of people and technology. " +
"Often found snowboarding in the wild or improving his mediocre skills in Super Smash Bros, this unique Homo Sapien has limited " +
"cooking ability but an exceptionally large appetite. \nWeaknesses include: Spicy food, horror movies, and heights";


const images = [
  cycle1, cycle2, cycle3
];

const ContainerCar = styled.div`
  position: relative;
  overflow: hidden;
  width: "25%";
  height: "25%";
`;

const ContainerCarMobile = styled.div`
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 700px;
`;

const theme = createMuiTheme({
  overrides: {
    MuiCard: { // Name of the component ⚛️ / style sheet
      root: {
        paddingTop: 0,
        marginTop: 0,
      },
    },
  },
});

const styles = theme => ({

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: 500,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  card:{
    minWidth: 700,
    display: "flex",
    backgroundColor: "rgba(255,255,255, 0.85)",
    paddingBottom: 10,

  },
  aboutHeader1:{
      fontSize: 18,
  },
  aboutHeader2:{
  },
  aboutHeader3:{
  },
  spacing: {
    marginBottom: 12,
  },
  collapseDetails:{
    display: 'flex',
    flexDirection: 'column',
  },
  collapseSize:{
    maxHeight: 1000,
  },
  content:{
    width: document.documentElement.clientWidth * 0.75
  },
  contactContent:{
    backgroundColor: "transparent",
  },
  carousel:{
    marginRight:-50,
    marginTop: -30,
    marginBottom: -40,
    paddingBottom: 0,
    paddingRight: 0,
  },
  root:{
  },
  gitButton:{
    color: "purple",
  },
  bitButton:{
    color: "blue",
  },
  linkedButton:{
    color:"blue",
  },

  contactBtnContainer: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
  },


});





const CarouselUI = ({ children }) => <ContainerCar>{children}</ContainerCar>;
const Carousel = makeCarousel(CarouselUI);



class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      imageIndex: 0,
      expanded: false,
      expanded2: false,
      numPages: 1,
      pageNumber: 1,
      resumeExpand: false,
      displayScrollMore: true,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleExpandClick2 = this.handleExpandClick2.bind(this);
    this.expandResume = this.expandResume.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount(){
    configureAnchors({scrollDuration: 2000});
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentDidUpdate(){
    if(this.props.goBackToTop){
      this.props.setToTopFalse();
      this.ScrollToTop();
    }
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

  handleExpandClick2(){
    this.setState({
        expanded2: !this.state.expanded2,
    });
  }

  handleScroll(){
    var y = window.scrollY;
    if(y>0){
      this.setState({
        displayScrollMore : false
      });
    }
  }

  ScrollToTop(){
    var element = document.getElementById("about");
    element.scrollIntoView({
      behavior: "smooth",
      block: 'center',
      inline: 'center',
    });
  }

  expandResume(){
    this.setState({
      resumeExpand: !this.state.resumeExpand,
    });
  }


  render(){

    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    const { pageNumber, numPages } = this.state;

    let stylesRender = {
      profilePicture: {
        marginTop: 15,
        marginLeft: 40,
        marginRight: 0,
        float: "left",
      },

      profileDesc:{
        position: "relative",
        marginTop: 50,
        marginLeft: 0,
        backgroundColor: "black",
        opacity: 0.85,
        width: this.state.width * 0.7,
        float: "left",
      },

      containerStyle:{
        marginleft: -20,
        paddingLeft: 0,
      },

      rowStyle: {

        height: 400,
      },

      whiteText:{
        color: "white",
      },

      whiteTextPadded: {
        color: "white",
        padding: 10,
      },

      whiteBackground:{
          backgroundColor: "white",
      },

      whiteBackgroundMobile:{
        backgroundColor: "white",
        width: document.documentElement.clientWidth * 0.9
      },

      carousel: {
        marginLeft: 0,
        width: 300,
        height: 800,
        borderRadius: 100,
      },

      imageStyle:{
        height: 250,
        marginLeft: 0,
      },

      blackBox: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        backgroundColor: "black",
        opacity: 0.6,
        width: this.state.width*0.4,
        minHeight: 400,
        minWidth: 800,
        marginLeft: -20,
      },


      cardStyle:{
        backgroundColor: "transparent",
        zDepthShadows: "none",
        border: "none",
        boxShadow: 'none',
        overflow: "hidden",
        maxHeight: 300,
        width: document.documentElement.clientWidth * 0.9
      },

      cardStyle2:{
        backgroundColor: "transparent",
        zDepthShadows: "none",
        border: "none",
        boxShadow: 'none',
        overflow: "hidden",
        maxHeight: 600,
      },

      collapseCardStyle:{
        // width: this.state.width*0.4,
        width: document.documentElement.clientWidth * 0.9,
        height: "auto",
        marginLeft: 20,
      },

      buttonStyle:{
        color: "white",
      },

      bottomButtonStyle:{
        color: "white",
      },

      centeredDiv:{
        position: "absolute",
        color: "white",
        bottom: 0,

      },

      allElements: {
        height: 800,
      },

      experienceText:{
        color: "white",
      },

      resumeDiv: {
        marginLeft: 15,
        marginTop: 20,
        paddingBottom: 8,
      },

      scrollForMoreDiv: {
        marginLeft: this.state.width*0.37,
        marginTop: 350,
      },

      scrollForMoreDivMobile: {
        marginLeft: document.documentElement.clientWidth*0.33,
        marginTop: 350
      },

      profileContainer: {
        marginTop: 0,
        overflow: "hidden",
        width: this.state.width*0.8,
        minWidth: 800,
        height: 650,
      },

      listItemEl: {
        width: 180,
      },

      contactContentStyle:{
        overflow: "hidden",
        marginLeft: 40,
      },

    };

    let scrollMoreBtnStyle;
    let opacityScrollMore = (1-(window.scrollY/100));

    if(this.state.displayScrollMore){
      scrollMoreBtnStyle={
        btnStyle: {
          color: "white",
          zIndex: 5,
        },
      };
    }else{
      scrollMoreBtnStyle={
        btnStyle: {
          color:"white",
          opacity: opacityScrollMore,
          zIndex: 5,
        },
      }
    }

    let textLoopDisplay;
    let textLoopDisplayMobile;
    navigator.sayswho= (function(){
      var ua= navigator.userAgent, tem,
      M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if(/trident/i.test(M[1])){
          tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE '+(tem[1] || '');
      }
      if(M[1]=== 'Chrome'){
          tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
          if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
      }
      M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
      if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
      return M.join(' ');
    })();

    if(navigator.sayswho.toString().includes("Edge")){
    } else {
      textLoopDisplay = (
        <Fade bottom duration={1500}>
          <Typography variant="h2" gutterBottom style={stylesRender.whiteText}>
          <TextLoop
              interval={2000}
              springConfig={{ stiffness: 190, damping: 14 }}>

              <span>Software Developer </span>

              <span>Recovering Coffee Addict </span>

              <span>Mediocre Gamer </span>

              <span>Snowboarding Fanatic </span>

              <span>Master Chef </span>

          </TextLoop>
        </Typography>
      </Fade>
      );

      textLoopDisplayMobile = (
        <Fade bottom duration={1500}>
          <Typography variant="h5" gutterBottom style={stylesRender.whiteText}>
          <TextLoop
              interval={2000}
              springConfig={{ stiffness: 190, damping: 14 }}>

              <span>Software Developer </span>

              <span>Recovering Coffee Addict </span>

              <span>Mediocre Gamer </span>

              <span>Snowboarding Fanatic </span>

              <span>Master Chef </span>

          </TextLoop>
        </Typography>
      </Fade>
      );
    }

    return(
      <div style={stylesRender.allElements}>

        <Fade bottom duration={1500}>

        <section className="top"
                 ref={(section) => {
                   this.top = section;
                 }}
                 id="about">
          
          <MediaQuery query="(max-device-width: 1020px)">
            <Typography component="h2" variant="h2" gutterBottom style={stylesRender.whiteText}>
              Segal Au
            </Typography>
          </MediaQuery>

          <MediaQuery query="(min-device-width: 1021px)">
            <Typography component="h2" variant="h1" gutterBottom style={stylesRender.whiteText}>
              Segal Au
            </Typography>
          </MediaQuery>          
        </section>

        </Fade>

        <MediaQuery query="(max-device-width: 1020px)">
          {textLoopDisplayMobile}
          <Zoom duration={5001}>
            <Divider style={stylesRender.whiteBackgroundMobile}/>
          </Zoom> 
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1021px)">
          {textLoopDisplay}
          <Zoom duration={5000}>
            <Divider style={stylesRender.whiteBackground}/>
          </Zoom>
        </MediaQuery>

        

        <Fade duration={3000}>



          <div style={stylesRender.profileContainer}>

              <div style={stylesRender.resumeDiv}>
                <Typography variant="overline" style={stylesRender.whiteText}>
                  Resume
                  <IconButton
                    href={resumePDF}
                    target="_blank" 
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                    style={stylesRender.buttonStyle}>
                      <FolderIcon variant="outlined"/>
                  </IconButton>
                </Typography>
              </div>

              <Card style={stylesRender.cardStyle}>
                <CardActions>
                  <Typography variant="overline" style={stylesRender.whiteText}>
                    About </Typography>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                    style={stylesRender.buttonStyle}>
                      <ExpandMoreIcon />
                  </IconButton>
                </CardActions>

                <Collapse in={this.state.expanded} timeout={500}
                          className={classes.collapseSize}
                          unmountOnExit>
                  <Card style={stylesRender.collapseCardStyle}
                        className={classes.card}>
                    <div style={stylesRender.collapseDetails}>
                      <CardContent style={styles.cardStyle} className={classes.content}>
                        <Typography className={classes.aboutHeader1} color="white">
                          Hello, World.
                        </Typography>
                        <Typography className={classes.aboutHeader2} variant="h4" component="h2">
                          see{bull}ghu{bull}all
                        </Typography>
                        <Typography variant="caption" className={classes.spacing}>
                          Proper Noun
                        </Typography>

                        <Typography variant="caption" align="justify" gutterBottom>
                          {aboutText}
                        </Typography>
                      </CardContent>
                    </div>
                    <CardContent className={classes.carousel}>
                      <Carousel defaultWait={2000} duration={1000} style={stylesRender.carousel}>
                        <Fade>
                          <div>
                            <img src={images[0]} style={stylesRender.imageStyle}/>
                          </div>
                        </Fade>
                        <Fade>
                          <div>
                            <img src={images[1]} style={stylesRender.imageStyle}/>
                          </div>
                        </Fade>
                        <Fade>
                          <div>
                            <img src={images[2]} style={stylesRender.imageStyle}/>
                          </div>
                        </Fade>
                      </Carousel>
                    </CardContent>
                  </Card>
                </Collapse>
              </Card>

              <Card style={stylesRender.cardStyle2}>

                <CardActions>
                  <Typography variant="overline" style={stylesRender.whiteText}>
                    Contact </Typography>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded2,},
                      classes.root
                    )}
                    onClick={this.handleExpandClick2}
                    aria-expanded={this.state.expanded2}
                    aria-label="Show more"
                    style={stylesRender.buttonStyle}>
                      <ExpandMoreIcon />
                  </IconButton>

                </CardActions>

                <Collapse in={this.state.expanded2} timeout={500}
                          className={classes.collapseSize}
                          unmountOnExit>
                  <div style={stylesRender.contactContentStyle} className={classes.contactBtnContainer}>
                      <Button variant="outlined"
                              color="primary"
                              href="https://github.com/segalau"
                              target="_blank"
                              className={classes.gitButton}>
                        <Typography variant="button" style={stylesRender.whiteTextPadded}>
                          GITHUB </Typography>
                      </Button>
                      <Button variant="outlined"
                              color="primary"
                              href="https://bitbucket.org/segal-au/"
                              target="_blank"
                              className={classes.bitButton}>
                        <Typography variant="button" style={stylesRender.whiteTextPadded} >
                          BITBUCKET </Typography>
                      </Button>
                      <Button variant="outlined"
                              color="primary"
                              href="https://ca.linkedin.com/in/segalau"
                              target="_blank"
                              className={classes.linkedButton}>
                        <Typography variant="button" style={stylesRender.whiteTextPadded}>
                          LINKEDIN </Typography>
                      </Button>





                  </div>

                </Collapse>
              </Card>

              <MediaQuery query="(max-device-width: 1020px)">
                <div style={stylesRender.scrollForMoreDivMobile}>
                <Fade duration={8000}>
                  <Typography variant="overline" style={scrollMoreBtnStyle.btnStyle}>
                    Scroll For More
                  </Typography>

                </Fade>

                </div>
              </MediaQuery>

              <MediaQuery query="(min-device-width: 1021px)">
                <div style={stylesRender.scrollForMoreDiv}>
                <Fade duration={8000}>
                  <Typography variant="overline" style={scrollMoreBtnStyle.btnStyle}>
                    Scroll For More
                  </Typography>

                </Fade>

                </div>
              </MediaQuery>
              
              

          </div>
        </Fade>

      </div>
    );
  }
}


About.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(About);
