import { createSelector } from "reselect";

const selectMedecineType = (state) => state.medecineType;

export const selectTypeElements = createSelector(
  selectMedecineType,
  (medecineType) => medecineType.elements
);
