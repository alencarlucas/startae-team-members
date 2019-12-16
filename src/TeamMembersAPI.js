import axios from 'axios';
import _ from 'lodash';
import settings from './settings';

const API_BASE_URL = settings.get('API_BASE_URL');
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000
});

const getMemberByName = async name => {
  let member = {};
  try {
    const { data } = await axiosInstance.get('/');
    const filteredData = _.filter(
      data,
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

const getAll = async () => {
  try {
    return (await axiosInstance.get('/')).data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default { getMemberByName, getAll };
