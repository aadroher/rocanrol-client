import React, {
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
} from 'react';

const attachEventListeners = audioEl => {
  console.log(audioEl);
  audioEl.addEventListener('play', () => {
    console.log('play emitted');
  });
  audioEl.addEventListener('pause', () => {
    console.log('pause emitted');
  });
};

const AudioPlayer = ({ src, isPlaying }) => {
  const audioElRef = useRef(null);
  useEffect(() => {
    const { current: audioEl } = audioElRef;
    console.log({ audioEl, src, isPlaying });
    if (audioEl) {
      attachEventListeners(audioEl);
      if (src) {
        if (isPlaying) {
          audioEl.play();
        } else {
          audioEl.pause();
        }
      }
    }
  });

  // const playAudioRef = useCallback(async audioElement => {

  // });
  return (
    src && (
      <audio ref={audioElRef}>
        <source src={`/api${src}`} type="audio/ogg" />
      </audio>
    )
  );
};

export default AudioPlayer;
