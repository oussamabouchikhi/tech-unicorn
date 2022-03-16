import React from 'react';
import ReactPlayer from 'react-player/lazy';

export  interface Episode {
  id: number;
  number: number;
  title: string;
  writers: string;
  originalAirDate: string;
  desc: string;
}

export function EpisodeCard(props: any) {
 const {
  title,
  writers,
  originalAirDate,
  desc
 } = props.episode;

  return (
    <div className="my-1 ml-4 lg:my-4 lg:px-4 w-[650px]">
    <div className={`card rounded overflow-hidden shadow-lg`}>
      <div className="w-full">
      <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U&showinfo=0&enablejsapi=1&origin=http://localhost:9000' />
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center">
          <div className="card-title font-bold text-purple-500 text-xl mb-2">
            {title}
          </div>
        </div>
        <ul className='info'>
          <li>
            <strong>writers: </strong>
            {writers}
          </li>
          <li>
            {desc}
          </li>
          <li>
            {originalAirDate}
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}
