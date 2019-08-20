import React, {
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

const reloadSong = ({ audioEl, src }) => {
  if (audioEl) {
    const { currentSrc } = audioEl;
    const srcChanged = !currentSrc.includes(src);
    if (srcChanged) {
      audioEl.load();
      audioEl.play();
    }
  }
};

const togglePlayback = ({ audioEl, src, isPlaying }) => {
  if (audioEl && src) {
    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }
};

const AudioPlayer = ({ src, isPlaying }) => {
  const audioElRef = useRef(null);

  useEffect(() => {
    const { current: audioEl } = audioElRef;
    reloadSong({ audioEl, src });
  }, [src]);

  useEffect(() => {
    const { current: audioEl } = audioElRef;
    togglePlayback({ audioEl, src, isPlaying });
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
