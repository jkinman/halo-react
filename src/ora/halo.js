import React from 'react';
import PropTypes from 'prop-types';

//styles
import './halo.scss'

class HaloComponent extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      haloResponse: null,
      oraId: 0,
      size: this.props.width,
      ora:{
        app: 1,
        id: 0,
        name: this.props.title,
        vertices: {
          size:0.5,
          speed: 0.5,
          brightness:0.5,
          complexity: 0.5,
          color: 0.5,
          wobble: 0.5,
          colorCenter: 0.5,
          colorCenterRatio:0.25,
          highlightRing:0.0,
        }
      }
    };
  }

  componentDidMount(){

    const body = {
      vertices: this.props.vertices,
      name: this.props.title,
      app: 1,
      id: 0,
    }
    // window.addEventListener('resize', this.updateHalo.bind( this ), false);
    fetch( `${this.props.endpoint}/halo`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrer: 'no-referrer',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify( body ),
    })
    .then( (res) => {
      const haloResponse = res.json().then((body) => {
        this.setState({haloResponse:body, oraId: body.id } )
      })
    })
    .catch( console.error)

  }

  componentDidUpdate(nextProps, nextState) {
    if( nextProps != this.props ){
      this.updateHalo();
    }
  }

  updateHalo(){

    if( this.state.oraId ){

    const body = {
      vertices: this.props.vertices,
      id: this.state.oraId,
      app: 1000401
    };

    fetch( `${this.props.endpoint}/halo/${this.state.oraId}`, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrer: 'no-referrer',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify( body ),
    })
    .then( (res) => {
      const haloResponse = res.json().then((body) => {
        this.setState({haloResponse:body, oraId: body.id }, () => console.log(this.state))
      })
    })
    .catch( console.error)
    }
  }

  render() {

    return (
      <div className="halo halo-component">
        <iframe
          id={this.state.oraId}
          className='halo iframe'
          width={this.props.size}
          height={this.props.size}
          src={`http://sandbox.ora.me/embed?id=${this.state.oraId}&size=${this.props.size}&radiant=${this.props.radiant}&background=${this.props.background}&core=${this.props.core}&glow=${this.props.glow}&solid=${this.props.solid}&tilt=${this.props.tilt}&scale=${this.props.scale}`}
        ></iframe>
      </div>
    );
  }
}

HaloComponent.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  endpoint: PropTypes.string,
  id: PropTypes.string,
  vertices: PropTypes.shape({
    size: PropTypes.number,
    speed: PropTypes.number,
    brightness: PropTypes.number,
    complexity: PropTypes.number,
    color: PropTypes.number,
    wobble: PropTypes.number,
    colorCenter: PropTypes.number,
    colorCenterRatio: PropTypes.number,
    highlightRing: PropTypes.number,
  })
};

HaloComponent.defaultProps = {
  endpoint: 'http://iq.ora.me/api',
  size: 600,
  id: 10120888,
  radiant: false,
  background: '000000',
  core: 0.20,
  glow: 0.0,
  solid: true,
  tilt: 0,
  scale: 295,
  vertices: {
    size: Math.random(),
    speed: Math.random(),
    brightness:Math.random(),
    complexity: Math.random(),
    color: Math.random(),
    wobble: Math.random(),
    colorCenter: Math.random(),
    colorCenterRatio: Math.random(),
    highlightRing:Math.random(),
  }
};

export default HaloComponent;
