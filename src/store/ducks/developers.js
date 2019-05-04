/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'developers/ADD_REQUEST',
  ADD_SUCCESS: 'developers/ADD_SUCCESS',
  ADD_FAILURE: 'developers/ADD_FAILURE',
  REMOVE: 'developers/REMOVE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function developers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.data],
        loading: false,
        error: null,
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter(
          developer => developer.id !== action.payload.developer.id,
        ),
      };
    default:
      return state;
  }
}

/**
 * Action
 */

export const Creators = {
  addDeveloperRequest: (developer, coordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { developer, coordinates },
  }),

  addDeveloperSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addDeveloperFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  removeDeveloper: developer => ({
    type: Types.REMOVE,
    payload: { developer },
  }),
};
