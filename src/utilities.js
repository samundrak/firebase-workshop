import { tag } from 'postcss-selector-parser';

export const collectIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};
