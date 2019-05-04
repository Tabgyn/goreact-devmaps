/**
 * Types
 */

export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  isVisible: false,
  coordinates: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        isVisible: true,
        coordinates: action.payload.coordinates,
      };
    case Types.HIDE:
      return {
        isVisible: false,
        coordinates: null,
      };
    default:
      return state;
  }
}

/**
 * Action
 */
export const Creators = {
  showModal: coordinates => ({
    type: Types.SHOW,
    payload: { coordinates },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};
