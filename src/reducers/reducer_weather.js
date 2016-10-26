import FETCH_WEATHER from '../actions/index';

export default function(state = [], action) {
  //console.log('Action recieved', action);
  switch (action.type) {
    case FETCH_WEATHER:
    // Always make sure you return a new instance of the state
    // It willl insert at the beginning
      return [action.payload.data, ...state]; //[city, city,city]
  }
  return state;
}
