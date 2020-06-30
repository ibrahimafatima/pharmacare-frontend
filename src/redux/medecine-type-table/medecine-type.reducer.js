import MEDECINES_TYPE_DATA from "./../../components/medecine-type-table/medecine-type-data";
import medecineTypeActionTypes from "./medecine-type.types";
import { searchMedecineType } from "./medecine-type.utils";
import { deleteMedecineType } from "./medecine-type.utils";

const INITIAL_STATE = {
  elements: MEDECINES_TYPE_DATA,
};

const medecineTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case medecineTypeActionTypes.SEARCH_TYPE:
      return {
        ...state,
        elements: searchMedecineType(MEDECINES_TYPE_DATA, action.payload),
      };
    case medecineTypeActionTypes.DELETE_MEDECINE_TYPE:
      return {
        ...state,
        elements: deleteMedecineType(state.elements, action.payload),
      };
    default:
      return state;
  }
};

export default medecineTypeReducer;
