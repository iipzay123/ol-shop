import {MAINTENANCE} from '../../../redux/constant';

export const maintenanceServer = (data) => {
  return (dispatch) => {
    dispatch({type: `${MAINTENANCE}`});
    if (data) {
      return dispatch({type: `${MAINTENANCE}_FULL_FIELD`, payload: data});
    }
    dispatch({type: `${MAINTENANCE}_REJECTED`});
  };
};
