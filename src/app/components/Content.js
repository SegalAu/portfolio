import React from 'react';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Profile from './Profile';


import { Scroller, scrollInitalState } from 'react-skroll'



import Typography from '@material-ui/core/Typography';
import TextLoop from "react-text-loop";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


import Divider from '@material-ui/core/Divider';

/* Anchor Scroll */
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { goToTop } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'

/* Material UI Button */
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

/* Icons */
import CodeIcon from '@material-ui/icons/Code'


class TitleBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      revealProjects: false,
      revealExperience: false,
      goBackToTop: this.props.goBackToTop,
      scroll: scrollInitalState,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    this.props.onRef(this);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    this.props.onRef(undefined);
  }

  componentDidUpdate(){
    if(this.props.goBackToTop){
    }
    if(this.props.goToProject){
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  handleScroll(){
    var y = window.scrollY;
    if(window.pageYOffset >= 1200 || y >= 1200){
      this.setState({
        revealProjects: true,
      });
    }
    if(window.pageYOffset >= 120 || y > 120){
      this.setState({
        revealExperience: true,
      })
    }
  }



  render() {
    let styles = {
      title: {
        height: "auto",
        width: "100%",
        overflow: "hidden",
      },

      contentMiddle: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        top: this.state.height * 0.1,
        left: this.state.width * 0.1,
        marginRight: this.state.width * 0.1,
        zIndex: 5,
      },

      ContentDivStyle : {
        width: "100%",
        position: 'relative',
        paddingTop: this.state.height * 0.1,
        paddingBottom: 0,
        marginBottom: 0,
      },
      ContentDivStyle2:{
        width: "100%",
        position: 'relative',
      },

      Credit: {
        position: "absolute",
        left: "5%",
        marginTop: 60,
      },

      CreditText: {
        color: "white",
        opacity: 0.7,

      },

      whiteBackground:{
          backgroundColor: "white",
      },

      divStyle: {
        marginTop: 55,
        width: (this.state.width*0.8),
      },

      projectButtonIcon:{
        marginLeft: 10,
      },
    };

    const { scroll } = this.state;

    return(
      <div>
        <div style={styles.title}>

          <section>
            <div  style={styles.ContentDivStyle2}>
              <Fade bottom duration={1500}>
                <About style = {styles.About}
                      goBackToTop={this.props.goBackToTop}
                      setToTopFalse={this.props.setToTopFalse}
                      />
              </Fade>
            </div>
          </section>
          <section>
            <div style = {styles.ContentDivStyle} id="experienceContainer">
              {/* <Fade when={this.state.revealExperience} duration={2000}> */}
                <Experience getChildRefs={this.props.getChildRefs}
                            goToExperience={this.props.goToExperience}
                            setToExperienceFalse={this.props.setToExperienceFalse}
                            />
              {/* </Fade> */}
            </div>
          </section>
          <section>
            <div style = {styles.ContentDivStyle} >
              {/* <Fade when={this.state.revealProjects} duration={2000}> */}
                <Projects getChildRefs={this.props.getChildRefs}
                          goToProject = {this.props.goToProject}
                          setToProjectFalse = {this.props.setToProjectFalse}/>
              {/* </Fade> */}
            </div>
          </section>

          <section>
            <div style={styles.Credit}>
              <Typography variant="subtitle1" style={styles.CreditText}>
                Designed and Developed by Segal Au &copy; </Typography>
              <Button variant="outlined"
               color="secondary" target = "_blank" href="https://bitbucket.org/group-24/">
                Source Code
                <CodeIcon style={styles.projectButtonIcon}/>
              </Button>
            </div>
          </section>

          <Zoom duration={5000}>
            <div style={styles.divStyle}>
              <Divider style={styles.whiteBackground}/>
            </div>
          </Zoom>






        </div>


      </div>
    );
  }
}
export default TitleBar;
