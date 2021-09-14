const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const SLIDE_URL = `${BASE_API_URL}/data`;

const getSlideUrl = (slide_id: string) => {
  return `${SLIDE_URL}/${slide_id}/dzi.dzi`;
};

const getThumbnailUrl = (slide_id: string) => {
  return `${SLIDE_URL}/${slide_id}/thumbnail.jpeg`;
};

export { BASE_API_URL, SLIDE_URL, getSlideUrl, getThumbnailUrl };
