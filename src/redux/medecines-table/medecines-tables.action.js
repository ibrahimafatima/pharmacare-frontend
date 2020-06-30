import tableActionTypes from "./medecines-tables.types";

export const deleteMedecine = (medecineId) => ({
  type: tableActionTypes.DELETE_MEDECINE,
  payload: medecineId,
});

export const searchMedecine = (searchWord) => ({
  type: tableActionTypes.SEARCH_MEDECINE,
  payload: searchWord,
});
