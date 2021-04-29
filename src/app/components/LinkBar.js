import React from 'react';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';



/* Resources */


import Typography from '@material-ui/core/Typography';
import TextLoop from "react-text-loop";
import Fade from 'react-reveal/Fade';


class LinkBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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


  render() {
    let styles = {
      LinkBar: {
        height: 50,
        backgroundColor: "black",
      },

    }

    return(
      <div>
        <div style={styles.LinkBar}>
          <Fade bottom>


          </Fade>


        </div>
      </div>
    );
  }
}
export default LinkBar;
