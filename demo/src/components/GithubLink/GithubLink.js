import React, { PropTypes } from 'react';

import githubIcon from './github-icon.svg';
import './GithubLink.css';

const propTypes = {
  className: PropTypes.string,
  username: PropTypes.string,
  repo: PropTypes.string,
};

const defaultProps = {
  className: '',
  username: 'unsplash',
  repo: 'react-trend',
};

const GithubLink = ({ className, username, repo }) => (
  <a
    className={`githubLink ${className}`}
    href={`https://github.com/${username}/${repo}`}
  >
    <img alt="Github mark" src={githubIcon} />
  </a>
);

GithubLink.propTypes = propTypes;
GithubLink.defaultProps = defaultProps;

export default GithubLink;
