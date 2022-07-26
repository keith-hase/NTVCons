import axiosService from '../../axios/axiosService';
import * as API_LINK from './../../contants/ApiLinks/apiLinks';

export const createCategoryApi = (data) => {
  return axiosService.post(`${API_LINK.CREATE_CATEGORY}`, data);
};
