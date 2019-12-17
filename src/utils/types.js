import PropTypes from 'prop-types';

const Member = PropTypes.shape({
  name: PropTypes.string,
  avatar: PropTypes.string,
  role: PropTypes.string,
  tweet: PropTypes.string,
  twitter: PropTypes.string,
  twitterUser: PropTypes.string
});

export default { Member };
