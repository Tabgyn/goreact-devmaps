import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ModalActions } from '../../store/ducks/modal';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;

    await showModal({ latitude, longitude });
  };

  render() {
    const { viewport: viewportState } = this.state;
    const { developers } = this.props;
    return (
      <MapGL
        {...viewportState}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {developers.data.map(developer => (
          <Marker
            latitude={developer.cordinates.latitude}
            longitude={developer.cordinates.longitude}
            key={developer.id}
            sty
          >
            <img
              alt={developer.name}
              src={developer.avatar}
              style={{
                borderRadius: '50%',
                width: 48,
                height: 48,
              }}
            />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

// Map.propTypes = {
//   showModal: PropTypes.func.isRequired,
//   developers: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       avatar: PropTypes.string,
//       coordinates: PropTypes.oneOfType([
//         PropTypes.oneOf([null]),
//         PropTypes.shape({
//           latitude: PropTypes.number,
//           longitude: PropTypes.number,
//         }),
//       ]),
//     }),
//   ).isRequired,
// };

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
