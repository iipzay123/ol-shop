import {MAINTENANCE} from '../../../redux/constant';

const initialState = {
  maintenance: false,
};

const Feed = (state = initialState, action) => {
  switch (action.type) {
    case `${MAINTENANCE}`:
      return {
        ...state,
      };
    case `${MAINTENANCE}_FULL_FIELD`:
      return {
        ...state,
        maintenance: action.payload,
      };
    case `${MAINTENANCE}_REJECTED`:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Feed;
