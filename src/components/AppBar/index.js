import React from 'react';
import PropTypes from 'prop-types';
import { AppBar as MuiAppBar } from '@material-ui/core';
// import NetworkStatus from 'react-web3-network-status';
import { Link } from 'react-router-dom';
import Wallet from '../Wallet';
import { styles } from './styles.scss';

const AppBar = (props) => {
  const { children } = props;

  return (
    <div className={styles}>
      <div className="app-bar">
        <Link to="/">
          <svg viewBox="0 0 528.55 104.62">
            <defs />
            <title>wordup</title>
            <path
              className="a"
              d="M28.6,43.91H62.36L70,79.59h.21L76.7,43.91H98l6.37,35.68h.21l7.75-35.68H143l-22.61,76.87H92.41L85.83,90.84h-.21l-6.48,29.94h-28Z"
              transform="translate(-28.6 -17.33)"
            />
            <path
              className="a"
              d="M184.74,42.74c24.1,0,42.89,17.31,42.89,39.61S208.84,122,184.74,122s-42.9-17.31-42.9-39.6S160.63,42.74,184.74,42.74Zm0,52a11.89,11.89,0,1,0-11.89-11.89A11.87,11.87,0,0,0,184.74,94.77Z"
              transform="translate(-28.6 -17.33)"
            />
            <path
              className="a"
              d="M235.33,43.91h31.53c15.82,0,37.37,3.93,37.37,24.42a21.47,21.47,0,0,1-9.66,18.26l17.52,34.19H278.85L267.39,95.51H267v25.27H235.33Zm34,34c5,0,7.22-2.66,7.22-5.94s-2.33-5.85-7.22-5.85H267V77.89Z"
              transform="translate(-28.6 -17.33)"
            />
            <path
              className="a"
              d="M315.42,120.78V43.91h32.17c14.87,0,26.33,4.57,34.08,12a35.41,35.41,0,0,1,11.15,26.44,35.73,35.73,0,0,1-10.93,26.33c-8,7.64-19.54,12.1-34.09,12.1Zm31.64-25h.74c5.31,0,9.35-1.7,11.89-4.36a12.83,12.83,0,0,0,3.51-9,13.17,13.17,0,0,0-3.51-9.24C357.47,70.78,353.85,69,348,69h-.95Z"
              transform="translate(-28.6 -17.33)"
            />
            <path
              className="a"
              d="M400.4,59.27V17.33H432V57.15c0,7.22,2.34,12.31,9.66,12.31,7,0,9.45-4.45,9.45-12.21V17.33h28.46V58.85c0,11.79-3,19.21-7,24.1-7,8.5-19.75,12.42-32.81,12.42-13.48,0-25.37-4.24-32.17-12.21C403.8,78.7,400.4,71.8,400.4,59.27Z"
              transform="translate(-28.6 -17.33)"
            />
            <path
              className="a"
              d="M488.89,17.33H518c18.48,0,39.18,5.31,39.18,27.29,0,19.75-16.56,27.71-35.57,27.71h-1.06V94.2H488.89Zm32.49,35.46c5.42,0,8-2.86,8-6.47s-2.65-6.48-8-6.48h-.85V52.79Z"
              transform="translate(-28.6 -17.33)"
            />
          </svg>
        </Link>

        <div className="nav">
          <Link to="/" className="nav-item">
            Prompts
          </Link>
          <Link to="/" className="nav-item">
            Dashboard
          </Link>
          <div className="nav-item">
            <Wallet />
          </div>
          {/* <NetworkStatus className="nav-item network" /> */}
        </div>
      </div>
    </div>
  );
};

AppBar.propTypes = {
  children: PropTypes.node,
};

AppBar.defaultProps = {
  children: null,
};

export default AppBar;
