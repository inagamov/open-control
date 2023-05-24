const getMediaUrl = (url) => {
  const mediaURL = process.env.mediaURL;
  return mediaURL + url;
};

export default getMediaUrl;
