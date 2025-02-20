import * as techTypes from './types';

const INITIAL_STATE = {
  data: {
    last_updated: null,
    num_results: 0,
    results: [],
  },
  loading: false,
  error: false,
};

export default function techReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case techTypes.FETCH_TECH:
      return { ...state, loading: true };
    case techTypes.FETCH_TECH_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    case techTypes.FETCH_TECH_FAIL:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return { ...state };
  }
}
