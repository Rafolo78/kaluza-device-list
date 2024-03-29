import config from "../../config";

// Actions names
const FETCH_BEGIN = 'kaluza-device-list/devices/FETCH_BEGIN';
const FETCH_SUCCESS = 'kaluza-device-list/devices/FETCH_SUCCESS';
const FETCH_FAILURE = 'kaluza-device-list/devices/FETCH_FAILURE';
const CHANGE_TYPE = 'kaluza-device-list/devices/CHANGE_TYPE';

//NOTE: the name of the device should come from the backend
const mapNameToType = {
  SMART_CHARGER: "Smart Charger",
  V2G_CHARGER: "V2G Charger"
};

// Returns the name of the device, if the cannot be retrieved return the type
export const getNameOfType = type => (type in mapNameToType) ? mapNameToType[type] : type;

// Initial state
const initialState = {
  devices: [],
  loading: false,
  error: null,
  typeDisplayed: null
}

// Actions creators
export const fetchBeginDevices = () => ({type: FETCH_BEGIN});
export const fetchSuccessDevices = devices => ({type: FETCH_SUCCESS, payload: devices});
export const fetchFailureDevices = error => ({type: FETCH_FAILURE, payload: error});
export const changeTypeDevices = deviceType => ({type: CHANGE_TYPE, payload: deviceType});


//redux-thunk Action creator
export const fetchDevices = () => dispatch => {
  dispatch(fetchBeginDevices());
  fetch(config.gateWays.kaluzaDevices)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              throw(res.error);
            }
            dispatch(fetchSuccessDevices(res));
            return res;
        })
        .catch(error => {
          dispatch(fetchFailureDevices(error));
          console.log("error");
        })
    //
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        devices: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
    };
    case CHANGE_TYPE:
      return {
        ...state,
        typeDisplayed: action.payload
      };
    default:
      return state;
  }
}
