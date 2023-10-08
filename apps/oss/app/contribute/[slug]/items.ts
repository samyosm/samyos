import { allOsses } from 'contentlayer/generated';

export const allContributes = allOsses.filter(
  (t) => t.class.name === 'contribute'
);

export const items = allContributes.map((t) => t.core.title);
