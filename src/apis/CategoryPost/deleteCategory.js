import axiosService from '../../axios/axiosService';
import * as API_LINK from './../../contants/ApiLinks/apiLinks';

export const deleteCategoryApi = (id) => {
  return axiosService.delete(`${API_LINK.DELETE_CATEGORY}/${id}`);
};
