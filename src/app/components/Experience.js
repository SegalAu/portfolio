import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Divider from '@material-ui/core/Divider';
/* Card Material UI */
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

/* Buttons */
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Typography from '@material-ui/core/Typography';

/* Resources */
import AEXImg from '../../resources/AEX.jpg';
import officeIMG from '../../resources/officeBackground.png';

import classnames from 'classnames';

import { Parallax, Background } from 'react-parallax';
import { Container, Row, Col } from 'react-grid-system';

/* Anchor */
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { goToTop } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'

/* React Media Mobile */
import MediaQuery from 'react-responsive';


const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),

    [theme.breakpoints.up('sm')]: {

    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})



class Experience extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      expanded: false,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);

    //refs
    this.experienceRef = React.createRef();
  }

  componentDidUpdate(){
      if(this.props.goToExperience){
        this.props.setToExperienceFalse();
        this.scrollExperience();

      }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
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
    })
  }

  scrollExperience(){
    var element = document.getElementById("experience");

    element.scrollIntoView({
      behavior: "smooth",
      block: 'start',
      inline: 'center',
    });
  }

  render(){
    const {classes} = this.props;
    const { scroll } = this.state

    let stylesRender = {
      imgStyle: {
        height: 0.3 * this.state.height,
        width: "100%",
      },
      headerBar: {
        marginLeft: 20,
        color: "white",
      },

      headerBar2: {
        marginLeft: 30,
        color: "white",
      },

      CollapseElement: {

      },
      CardElement: {
        marginTop: 40,

      },

      titleBox:{
        height: 150,
        marginBottom: 25,
      },

      divStyle: {
        marginBottom: 40,
        width: this.state.width*0.8,
      },

      titleTextBox: {
        width: this.state.width * 0.45,
        minWidth: 700,
        height: 600,
        backgroundColor: "black",
        opacity: 0.85,
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 10,
      },

      titleTextBoxMobile: {
        width: document.documentElement.clientWidth * 0.95,
        height: 600,
        backgroundColor: "black",
        opacity: 0.85,
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 10,
      },

      experienceContentMobile: {
        width: document.documentElement.clientWidth *0.8
      },

      experienceContent: {
        width: document.documentElement.clientWidth *0.8
      },

      leftAlign: {
        height: 600,
        overflow: "hidden",
        width: this.state.width*0.8,

      },

      leftAlignMobile: {
        height: 600,
        overflow: "hidden",
        width: this.state.width*0.9,
      },

      CardElementRightAlign: {
        zIndex: 5,
        marginTop: 0,
        position: "absolute",
        width: "100%",
        backgroundColor:"black",
        opacity: 0.85,
      },

      containerStyle: {
        height: 600,
        marginLeft: -20,
      },

      containerStyleMobile: {
        width: document.documentElement.clientWidth,
        height: 600,
        marginLeft: -20,
      },

      experienceHeading:{
        paddingTop: 40,
        color:"white",
      },

      whiteText:{
        color: "white",
      },

      whiteBackground:{
          backgroundColor: "white",
      },

      whiteBackgroundMobile:{
        backgroundColor: "white",
        width: document.documentElement.clientWidth * 0.9
      },

    }

    return(
      <div >
        <Fade>

        <MediaQuery query="(max-device-width: 1020px)">
          <Typography variant="h2" gutterBottom id="experience" style={stylesRender.experienceHeading}>
            Experience
          </Typography>
        </MediaQuery>

        <MediaQuery query="(min-device-width: 1021px)">
          <Typography variant="h1" gutterBottom id="experience" style={stylesRender.experienceHeading}>
            Experience
          </Typography>
        </MediaQuery>

          
        <MediaQuery query="(max-device-width: 1020px)">
          <Zoom duration={5000}>
            <div style={stylesRender.divStyle}>
              <Divider style={stylesRender.whiteBackgroundMobile}/>
            </div>
          </Zoom>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1021px)">
          <Zoom duration={5000}>
            <div style={stylesRender.divStyle}>
              <Divider style={stylesRender.whiteBackground}/>
            </div>
          </Zoom>
        </MediaQuery>

          

          

               
                    

                <MediaQuery query="(max-device-width: 1020px)">
                  <div style={stylesRender.leftAlignMobile}>


                  <Parallax
                    blur={0}
                    bgImage={officeIMG}
                    bgImageAlt="the cat"
                    strength={150}>

                    <Container style={stylesRender.containerStyleMobile} ref={this.experienceRef} >
                    <Row>
                    <Col xs={4} m={4}>
                    <div style={stylesRender.titleBox}>

                      <div style={stylesRender.titleTextBoxMobile}>

                      <Typography gutterBottom variant="h5" component="h2"
                                  style = {stylesRender.headerBar}>
                        Agreement Express
                      </Typography>
                      <Typography gutterBottom variant="overline" component="h2"
                                  style = {stylesRender.headerBar}>
                        Software Developer (Co-op)
                      </Typography>
                      <Typography gutterBottom variant="subtitle1" component="h2"
                                  style = {stylesRender.headerBar}>
                        January - August 2018 (8 month)
                      </Typography>



                      <Typography gutterBottom variant="overline" component="h2"
                                  style = {stylesRender.headerBar}>
                        Responsibilities & Achievements
                      </Typography>

                      <Typography variant="subtitle2" style = {stylesRender.headerBar}>
                        <div style={stylesRender.experienceContentMobile}>
                          <ul>
                            <li>	Contributed in designing and implementing responsive web application tools platform for internal development and analyst team using React / Redux
                            <br/> (enabled cross-platform compatibility and increased productivity by approximately 70%) </li>
                            <li>	Collaborated and wrote software to exceed specific client requirements and establish data handling regulation </li>
                            <li>	Conducted regular QA testing and bug-fixing using Jest / Mocha </li>
                            <li>	Performed back-end integration and development using internal RESTful API (Java) </li>
                            <li>	Enhanced front-end interaction and UI elements of internal development tools using React framework and third-party APIs such as Material UI </li>
                          </ul>
                        </div>
                        
                      </Typography>
                      </div>

                      </div>
                      </Col>
                      <Col xs={6} m={6}>
                      </Col>
                      </Row>
                      </Container>

                      </Parallax>



                        </div>
                  </MediaQuery>

                  <MediaQuery query="(min-device-width: 1021px)">
                    <div style={stylesRender.leftAlign}>


                      <Parallax
                        blur={0}
                        bgImage={officeIMG}
                        bgImageAlt="the cat"
                        strength={150}>
                      <Container style={stylesRender.containerStyle} ref={this.experienceRef} >
                      <Row>
                      <Col xs={4} m={4}>
                      <div style={stylesRender.titleBox}>


                      <div style={stylesRender.titleTextBox}>
                      <Typography gutterBottom variant="h4" component="h2"
                                  style = {stylesRender.headerBar}>
                        Agreement Express
                      </Typography>
                      <Typography gutterBottom variant="overline" component="h2"
                                  style = {stylesRender.headerBar}>
                        Software Developer (Co-op)
                      </Typography>
                      <Typography gutterBottom variant="subtitle1" component="h2"
                                  style = {stylesRender.headerBar}>
                        January - August 2018 (8 month)
                      </Typography>



                      <Typography gutterBottom variant="overline" component="h2"
                                  style = {stylesRender.headerBar}>
                        Responsibilities & Achievements
                      </Typography>

                      <Typography variant="subtitle1" style = {stylesRender.headerBar}>
                        <ul>
                          <li>	Contributed in designing and implementing responsive web application tools platform for internal development and analyst team using React / Redux
                          <br/> (enabled cross-platform compatibility and increased productivity by approximately 70%) </li>
                          <li>	Collaborated and wrote software to exceed specific client requirements and establish data handling regulation </li>
                          <li>	Conducted regular QA testing and bug-fixing using Jest / Mocha </li>
                          <li>	Performed back-end integration and development using internal RESTful API (Java) </li>
                          <li>	Enhanced front-end interaction and UI elements of internal development tools using React framework and third-party APIs such as Material UI </li>
                          <li>	Worked with analysts in creating product demos to potential and existing clients </li>
                        </ul>
                      </Typography>
                      </div>

                      </div>
                        </Col>
                        <Col xs={6} m={6}>
                        </Col>
                        </Row>
                        </Container>

                        </Parallax>



                          </div>    
                    </MediaQuery>

                    
                 

            








        </Fade>


      </div>
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
