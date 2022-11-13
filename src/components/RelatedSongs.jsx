import React from 'react'
import SongBar from './SongBar'

const RelatedSongs = ({data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Related Songs:</h1>
      <div className='mt-5 w-full flex flex-col'>
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={1}
            artistId={artistId}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePauseClick={handlePauseClick}
            />
        ))}

      </div>
      
    </div>
  )
}

export default RelatedSongs