import React from 'react';
import Fade from 'react-reveal/Fade';
/*React Grid system*/
import { Container, Row, Col } from 'react-grid-system';
/*Material UI core*/
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


import CrossfadeImage from 'react-crossfade-image';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

/* Profile Images */
import profile1 from '../../resources/profile1.png';
import profile2 from '../../resources/profile2.png';
import profile3 from '../../resources/profile3.png';


var aboutText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. " +
"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
"consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores " +
"et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

const images = [
  profile1, profile2, profile3
];

const stylesConst = {
  carousel: {
    overflow: "hidden",
    height: 200,
    width: 2000,
  },
}


const CarouselUI = ({ children }) => <div >{children}</div>;
const Carousel = makeCarousel(CarouselUI);


class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      imageIndex: 0,
    }

  }




  render(){



    let stylesRender = {



      profileContainer:{

      },

      profilePicture: {
      },

      profileDesc:{

      },
    }

    return(
      <div >
        <Fade duration={1500}>






          <div style={stylesRender.profileContainer}>
            <div style={stylesRender.profilePicture}>

              <Carousel defaultWait={5000} duration={1000} >
                <Fade>
                  <div>
                    <img src={images[0]}/>
                  </div>
                </Fade>
                <Fade>
                  <div>
                    <img src={images[1]}/>
                  </div>
                </Fade>
                <Fade>
                  <div>
                    <img src={images[2]}/>
                  </div>
                </Fade>
              </Carousel>

            </div>
            <div style={stylesRender.profileDesc}>

            </div>
          </div>

        </Fade>
      </div>
    );
  }
}

export default Profile;
