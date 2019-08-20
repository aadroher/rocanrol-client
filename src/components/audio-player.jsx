import React, {
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
  useState,
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
    if (audioEl) {
      console.log('src changed', audioEl.currentSrc);
      const { currentSrc } = audioEl;
      const srcChanged = !currentSrc.includes(src);
      if (srcChanged) {
        audioEl.load();
        audioEl.play();
      }
    }
  }, [src]);

  useEffect(() => {
    const { current: audioEl } = audioElRef;
    console.log('isPlaying changed', { audioEl, src, isPlaying });
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
  }, [isPlaying]);

  return (
    src && (
      <audio ref={audioElRef}>
        <source src={`/api${src}`} type="audio/ogg" />
      </audio>
    )
  );
};

export default AudioPlayer;
