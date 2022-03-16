export const fetchEpisodes = async () => {
  const ENDPOINT = 'https://api.sampleapis.com/futurama/episodes'
  const episodes = await fetch(ENDPOINT, {
    method: 'GET'
  });
  return episodes;
}