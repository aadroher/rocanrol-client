import React, {
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
} from 'react';

const AudioPlayer = ({ src, isPlaying }) => {
  const audioEl = useRef(null);
  useEffect(() => {
    console.log({ audioEl, src, isPlaying });
    if (src) {
      if (isPlaying) {
        audioEl.current.play();
      } else {
        audioEl.current.pause();
      }
    }
  });

  // const playAudioRef = useCallback(async audioElement => {

  // });
  return (
    src && (
      <audio ref={audioEl}>
        <source src={`/api${src}`} type="audio/ogg" />
      </audio>
    )
  );
};

export default AudioPlayer;
