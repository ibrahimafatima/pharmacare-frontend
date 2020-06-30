import CARDS_DATA from "./../../components/dashboard-info-card/card-data";

const INITIAL_STATE = {
  cards: CARDS_DATA,
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dashboardReducer;
