import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
  INCREMENT_BID,
} from "./actionTypes";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_REQUEST:
      return { ...state, loading: true };

    case LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    case INCREMENT_BID:
      const findCar = state.data.find((item) => item.id === action.payload);
      const lastItemBid = findCar.bids[findCar.bids.length - 1];

      const newAmount = lastItemBid ? lastItemBid.amount + 250 : 0;

      const newBid = {
        amount: newAmount,
        dealership: "Instacarro",
        createdAt: "2018",
        channel: "Web",
      };
      const newBidPush = findCar.bids.push(newBid);
      return {
        ...state,
        data: [...state.data, newBidPush],
      };

    default:
      return state;
  }
};

export default reducer;
