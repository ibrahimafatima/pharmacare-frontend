export const addToCart = (allMedecines, medecineToAdd) => {
  return allMedecines.filter((medecine) => medecine._id === medecineToAdd);
};

export const deleteMedecine = (allMedecines, medecineToDelete) => {
  return allMedecines.filter((medecine) => medecine._id !== medecineToDelete);
};

export const searchMedecine = (allMedecines, filterWord) => {
  return allMedecines.filter((medecine) =>
    medecine.name.toLowerCase().startsWith(filterWord.toLowerCase())
  );
};
