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
import RCHWayfinderIMG from '../../resources/RCHWayfinderDisplay.gif';
import EncryptoBanner from '../../resources/encryptoLogoBanner.png';
import EncryptoIMG from '../../resources/EncryptoTutorial.gif';
import CodeIcon from '@material-ui/icons/Code';

/* React Media Mobile */
import MediaQuery from 'react-responsive';

import classnames from 'classnames';


const styles = theme => ({
  cardStyle: {

  },
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



class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      expanded1: false,
      expanded2: false,
      expanded3: false,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleExpandClick1 = this.handleExpandClick1.bind(this);
    this.handleExpandClick2 = this.handleExpandClick2.bind(this);
    this.handleExpandClick3 = this.handleExpandClick3.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate(){
    if(this.props.goToProject){
      this.props.setToProjectFalse();
      this.scrollToProject();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleExpandClick1(){
    this.setState({
        expanded1: !this.state.expanded1,
    })
  }

  handleExpandClick2(){
    this.setState({
        expanded2: !this.state.expanded2,
    })
  }

  handleExpandClick3(){
    this.setState({
        expanded3: !this.state.expanded3,
    })
  }

  scrollToProject(){
    var element = document.getElementById("project");
    element.scrollIntoView({
      behavior: "smooth",
      block: 'start',
      inline: 'center',
    });
  }

  render(){
    const {classes} = this.props;

    let stylesRender = {

      RCHBar: {
        backgroundColor: "white",
      },
      Take2Bar: {
        backgroundColor: "green",
        color: "white",
      },
      EncryptoBar: {
        backgroundColor: "maroon",
        color: "white",
      },

      CollapseElement: {

      },

      CardElement: {
          marginLeft: this.state.width*0.05,
          marginTop: 40,
          width: document.documentElement.clientWidth*0.8,
          minWidth: document.documentElement.clientWidth*0.8,
      },

      CardElementMobile: {
          marginTop: 40,
          maxWidth: document.documentElement.clientWidth*0.9,
      },

      container: {
        height: "auto",

      },

      row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        height: "auto",
        marginTop: 40,
      },

      col: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        height: "auto",
        flex: 1,
      },

      projectButtonIcon: {
        marginLeft: 10,
      },

      dividerStyle:{
        marginTop: 20,
        marginBottom: -20,
      },

      projectHeading:{
        paddingTop: 40,
        color:"white",
      },

      whiteText:{
        color: "white",
      },

      whiteBackground:{
        backgroundColor: "white",
      },

      divStyle:{
        backgroundColor: "white",
        width: document.documentElement.clientWidth*0.8,
      },

    }

    return(
      <div style = {stylesRender.container} >

        {/* <Fade duration={1500}> */}

        <MediaQuery query="(max-device-width: 1020px)">
          <Typography variant="h2" gutterBottom id="project" style={stylesRender.projectHeading}>
            Projects
          </Typography>

          <Zoom duration={5000}>
            <Divider style={stylesRender.divStyle}/>
          </Zoom>
        </MediaQuery>

        <MediaQuery query="(min-device-width: 1021px)">
          <Typography variant="h1" gutterBottom id="project" style={stylesRender.projectHeading}>
            Projects
          </Typography>

          <Zoom duration={5000}>
            <Divider style={stylesRender.divStyle}/>
          </Zoom>
        </MediaQuery>
        
        <MediaQuery query="(max-device-width: 1020px)">
        <Card style={stylesRender.CardElementMobile}>
          <CardActionArea>

            <CardContent style = {stylesRender.RCHBar}>
              <Typography gutterBottom variant="h5" component="h2"
                          style = {stylesRender.RCHBar}>
                RCHWayfinder
              </Typography>
              <Typography gutterBottom variant="caption" component="h2"
                          style = {stylesRender.RCHBar}>
                Administration Portal Graphical Interface & NoSQL Cloud Database
              </Typography>
              <Typography gutterBottom variant="overline" component="h2"
                          style = {stylesRender.RCHBar}>
                Royal Columbian Hospital - BCIT Joint Student Project
              </Typography>
              <Typography variant="subtitle1">
                <ul>
                  <li>	Contributed in designing and implementing responsive web application tools platform for internal development and analyst team using React / Redux
                  <br/> (enabled cross-platform compatibility and increased productivity by approximately 70%) </li>
                  <li>	Collaborated and wrote software to exceed specific client requirements and establish data handling regulation </li>
                  <li>	Conducted regular QA testing and bug-fixing using Jest / Mocha </li>
                  <li>	Performed back-end integration and development using internal RESTful API (Java) </li>
                  <li>	Enhanced front-end interaction and UI elements of internal development tools using React framework and third-party APIs such as Material UI </li>
                </ul>
              </Typography>

              <Button variant="outlined"

               color="secondary" target = "_blank" href="https://bitbucket.org/group-24/">

                Source Code
                <CodeIcon style={stylesRender.projectButtonIcon}/>
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card style={stylesRender.CardElementMobile}>
          <CardActionArea>

            <CardContent style = {stylesRender.headerBar}>
              <Typography gutterBottom variant="h5" component="h2"
                          style = {stylesRender.headerBar}>
                Tic Tac Toe
              </Typography>
              <Typography gutterBottom variant="caption" component="h2"
                          style = {stylesRender.headerBar}>
                Multi-Language Message Queue Application
              </Typography>
              <Typography gutterBottom variant="overline" component="h2"
                          style = {stylesRender.headerBar}>
                Personal Project
              </Typography>

              <Typography variant="subtitle1">
                <ul>
                  <li>	Javascript Components: front-end (React web application) and Node Express Server backend </li>
                  <li>	Java Components: Game logic handler (Monte Carlo Heuristics for computer move decisions) </li>
                  <li>	Python Components: Receiver (communicates between server and game logic handler) </li>
                  <li>	Message Queues: RabbitMQ used for communication between node express server (JS) and receiver (Python) </li>
                  <li>	Message Queues: Py4J used for communication between receiver (Python) and game application (Java) </li>
                  <li>  Inspired by academic assignment where message queues was introduced. Created game application as practice</li>
                </ul>
              </Typography>

              <Button variant="outlined"

               color="secondary" target = "_blank" href="https://github.com/SegalAu/TicTacToe">

                Source Code
                <CodeIcon style={stylesRender.projectButtonIcon}/>
              </Button>

            </CardContent>
          </CardActionArea>
        </Card>
              <Card style={stylesRender.CardElementMobile}>
                <CardActionArea>

                  <CardContent style = {stylesRender.headerBar}>
                    <Typography gutterBottom variant="h5" component="h2"
                                style = {stylesRender.headerBar}>
                      Encrypto
                    </Typography>
                    <Typography gutterBottom variant="caption" component="h2"
                                style = {stylesRender.headerBar}>
                      TEA Encryption Google Chrome Extension
                    </Typography>
                    <Typography gutterBottom variant="overline" component="h2"
                                style = {stylesRender.headerBar}>
                      Personal Project
                    </Typography>

                    <Typography variant="subtitle1">
                      <ul>
                        <li>	Encryption application based on the Tiny Encryption Algorithm  </li>
                        <li>	Follows a symmetric key encryption model and allows users to securely share sensitive information using a common key </li>
                        <li>	Seamless integration into Chrome browser enables ease of use in social media and file transfer mediums  </li>
                        <li>	Created using JavaScript/jQuery  </li>
                      </ul>
                    </Typography>
                    <Button variant="outlined"
                     color="secondary" target = "_blank" href="https://github.com/SegalAu/Encrypto">
                      Source Code
                      <CodeIcon style={stylesRender.projectButtonIcon}/>
                    </Button>


                  </CardContent>

                </CardActionArea>

              </Card>
        </MediaQuery>


        <MediaQuery query="(min-device-width: 1021px)">
        <Card style={stylesRender.CardElement}>
          <CardActionArea>

            <CardContent style = {stylesRender.RCHBar}>
              <Typography gutterBottom variant="h5" component="h2"
                          style = {stylesRender.RCHBar}>
                RCHWayfinder
              </Typography>
              <Typography gutterBottom variant="caption" component="h2"
                          style = {stylesRender.RCHBar}>
                Administration Portal Graphical Interface & NoSQL Cloud Database
              </Typography>
              <Typography gutterBottom variant="overline" component="h2"
                          style = {stylesRender.RCHBar}>
                Royal Columbian Hospital - BCIT Joint Student Project
              </Typography>
              <Typography variant="subtitle1">
                <ul>
                  <li>	Contributed in designing and implementing responsive web application tools platform for internal development and analyst team using React / Redux
                  <br/> (enabled cross-platform compatibility and increased productivity by approximately 70%) </li>
                  <li>	Collaborated and wrote software to exceed specific client requirements and establish data handling regulation </li>
                  <li>	Conducted regular QA testing and bug-fixing using Jest / Mocha </li>
                  <li>	Performed back-end integration and development using internal RESTful API (Java) </li>
                  <li>	Enhanced front-end interaction and UI elements of internal development tools using React framework and third-party APIs such as Material UI </li>
                </ul>
              </Typography>

              <Button variant="outlined"

               color="secondary" target = "_blank" href="https://bitbucket.org/group-24/">

                Source Code
                <CodeIcon style={stylesRender.projectButtonIcon}/>
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card style={stylesRender.CardElement}>
          <CardActionArea>

            <CardContent style = {stylesRender.headerBar}>
              <Typography gutterBottom variant="h5" component="h2"
                          style = {stylesRender.headerBar}>
                Tic Tac Toe
              </Typography>
              <Typography gutterBottom variant="caption" component="h2"
                          style = {stylesRender.headerBar}>
                Multi-Language Message Queue Application
              </Typography>
              <Typography gutterBottom variant="overline" component="h2"
                          style = {stylesRender.headerBar}>
                Personal Project
              </Typography>

              <Typography variant="subtitle1">
                <ul>
                <li>	Javascript Components: front-end (React web application) and Node Express Server backend </li>
                  <li>	Java Components: Game logic handler (Monte Carlo Heuristics for computer move decisions) </li>
                  <li>	Python Components: Receiver (communicates between server and game logic handler) </li>
                  <li>	Message Queues: RabbitMQ used for communication between node express server (JS) and receiver (Python) </li>
                  <li>	Message Queues: Py4J used for communication between receiver (Python) and game application (Java) </li>
                  <li>  Inspired by academic assignment where message queues was introduced. Created game application as practice</li>
                </ul>
              </Typography>

              <Button variant="outlined"

               color="secondary" target = "_blank" href="https://github.com/SegalAu/TicTacToe">

                Source Code
                <CodeIcon style={stylesRender.projectButtonIcon}/>
              </Button>

            </CardContent>
          </CardActionArea>
        </Card>
              <Card style={stylesRender.CardElement}>
                <CardActionArea>

                  <CardContent style = {stylesRender.headerBar}>
                    <Typography gutterBottom variant="h5" component="h2"
                                style = {stylesRender.headerBar}>
                      Encrypto
                    </Typography>
                    <Typography gutterBottom variant="caption" component="h2"
                                style = {stylesRender.headerBar}>
                      TEA Encryption Google Chrome Extension
                    </Typography>
                    <Typography gutterBottom variant="overline" component="h2"
                                style = {stylesRender.headerBar}>
                      Personal Project
                    </Typography>

                    <Typography variant="subtitle1">
                      <ul>
                        <li>	Encryption application based on the Tiny Encryption Algorithm  </li>
                        <li>	Follows a symmetric key encryption model and allows users to securely share sensitive information using a common key </li>
                        <li>	Seamless integration into Chrome browser enables ease of use in social media and file transfer mediums  </li>
                        <li>	Created using JavaScript/jQuery  </li>
                      </ul>
                    </Typography>
                    <Button variant="outlined"
                     color="secondary" target = "_blank" href="https://github.com/SegalAu/Encrypto">
                      Source Code
                      <CodeIcon style={stylesRender.projectButtonIcon}/>
                    </Button>


                  </CardContent>

                </CardActionArea>

              </Card>

      </MediaQuery>

              {/* </Fade> */}
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
