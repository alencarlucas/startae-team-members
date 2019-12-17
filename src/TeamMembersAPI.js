import axios from 'axios';
import _ from 'lodash';
import settings from './settings';

const REPEAT_DATA_N_TIMES = Array.from(Array(5));
const API_BASE_URL = settings.get('API_BASE_URL');
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000
});

const getTwitterUser = twitterURL => {
  return _.last(_.split(twitterURL, '/'));
};

const getAll = async () => {
  try {
    const members = (await axiosInstance.get('/')).data;
    return _.map(members, member => ({
      twitterUser: getTwitterUser(member.twitter),
      ...member
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getMemberByName = async name => {
  let member = {};
  try {
    const members = await getAll();
    const filteredData = _.filter(
      members,
      currentMember => currentMember.name === name
    );

    if (_.size(filteredData) > 1)
      throw new Error('Two members matched by the same name.');

    member = _.get(filteredData, '0');
  } catch (err) {
    console.error(err);
  }
  return member;
};

const getMemberDataByName = async memberName => {
  let memberData = [];
  try {
    const member = await getMemberByName(memberName);
    memberData = _.map(REPEAT_DATA_N_TIMES, () => ({
      tweetElapsedTime: 5,
      ...member
    }));
  } catch (err) {
    console.error(err);
  }
  return memberData;
};

export default { getMemberByName, getMemberDataByName, getAll };
