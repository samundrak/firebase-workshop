import { tag } from 'postcss-selector-parser';

export const collectIdsAndDocs = (doc) => {
  return { ...doc.data(), id: doc.id };
};
