import React from 'react'

const AudioItem = props => {
    return (
      <div className="col-3" onClick={()=>props.HandleSelect(props.audio)}>
        <figure>
          <img src={props.audio.poster} alt={props.audio.title} />
        </figure>
        <h2 className="title">{props.audio.title}</h2>
        {/* <audio src={src} ref={audioRef} controls></audio> */}
      </div>
    );
}

export default AudioItem
