import PropTypes from 'prop-types';

const Member = PropTypes.shape({
  name: PropTypes.string,
  avatar: PropTypes.string,
  role: PropTypes.string,
  tweet: PropTypes.string,
  twitter: PropTypes.string,
  twitterUser: PropTypes.string
});

const Match = PropTypes.shape({
  match: PropTypes.instanceOf({}),
  location: PropTypes.string,
  history: PropTypes.instanceOf({})
});

export default { Member, Match };
