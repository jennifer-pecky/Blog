import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';
export const client = sanityClient({
  projectId: 'aplalkyn',
  dataset: 'production',
  apiVersion: '2022-11-12',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

export const builder = imageBuilder(client);
export const urlFor = (source) => builder.image(source);
