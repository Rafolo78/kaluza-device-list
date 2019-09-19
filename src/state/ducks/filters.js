// Actions names
const APPLY = 'kaluza-device-list/filters/APPLY';

export const filters = {
  ALL: 'All',
  ONLINE: 'Online',
  OFFLINE: 'Offline'
};

export const orderedFilters = [
  filters.ALL,
  filters.ONLINE,
  filters.OFFLINE
];

// Initial state
const initialState = {
  filter: filters.ALL,
}

// Actions creators
export const applyFilter = filter => ({type: APPLY, payload: filter});

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case APPLY:
      return {...state, filter: action.payload};
    default:
      return state;
  }
}
