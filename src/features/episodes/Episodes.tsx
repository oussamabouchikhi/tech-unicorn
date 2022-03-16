import { useEffect, useState } from "react";
import { Episode, EpisodeCard } from "./EpisodeCard";
import { fetchEpisodes } from "./episodesAPI";

export function Episodes() {
  const [episodes, setEpisodes] = useState([] as any);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchEpisodes = async () => {
  //     const fetchedEpisodes = await fetchEpisodes();
  //     setEpisodes(fetchedEpisodes);
  //   } 
  //   fetchEpisodes()
  // }, []);

  useEffect(() => {
    fetch(`https://api.sampleapis.com/futurama/episodes`)
      .then(res => res.json())
      .then(data => {
        
        setEpisodes(data.slice(0, 10));
        setIsLoading(false);
      })
      .catch(err => console.log(err));
      console.log('episodes: ', episodes);
      
  }, []);

console.log(episodes);

  return (
    <>
    {!isLoading && episodes?.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No episodes Found</h1> }
    {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {episodes.map((e: Episode) => (
            <div key={e.id}>
              <EpisodeCard episode={e} />
            </div>
          ))}
        </div>}
    </>
  )
}