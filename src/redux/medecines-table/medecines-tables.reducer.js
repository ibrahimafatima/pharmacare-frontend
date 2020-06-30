import MEDECINES_DATA from "../../components/medecines-table/medecines-data";
import tableActionTypes from "./medecines-tables.types";
import { deleteMedecine, searchMedecine } from "./medecines-table.utils";

const INITIAL_STATE = {
  elements: MEDECINES_DATA,
  cart: [],
};

const medecineTableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tableActionTypes.DELETE_MEDECINE:
      return {
        ...state,
        elements: deleteMedecine(state.elements, action.payload),
      };
    case tableActionTypes.SEARCH_MEDECINE:
      return {
        ...state,
        elements: searchMedecine(MEDECINES_DATA, action.payload),
      };
    default:
      return state;
  }
};

export default medecineTableReducer;
