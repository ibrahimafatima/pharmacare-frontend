export const deleteMedecineType = (allTypes, medecineTypeToDelete) => {
  return allTypes.filter(
    (medecineType) => medecineType._id !== medecineTypeToDelete
  );
};

export const searchMedecineType = (allTypes, filterWord) => {
  return allTypes.filter((type) =>
    type.type.toLowerCase().startsWith(filterWord.toLowerCase())
  );
};
