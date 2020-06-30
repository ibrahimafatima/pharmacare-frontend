import medecineTypeActionTypes from "./medecine-type.types";

export const searchMedecineType = (searchWord) => ({
  type: medecineTypeActionTypes.SEARCH_TYPE,
  payload: searchWord,
});

export const deleteMedecineType = (typeId) => ({
  type: medecineTypeActionTypes.DELETE_MEDECINE_TYPE,
  payload: typeId,
});
