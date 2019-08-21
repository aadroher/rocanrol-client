import React, { useRef, useEffect } from 'react';

const addEndedEventListener = ({ audioEl, onSongEnd }) => {
  audioEl.addEventListener('ended', onSongEnd);
};

const reloadSong = ({ audioEl, src }) => {
  if (audioEl) {
    const { currentSrc } = audioEl;
    const srcChanged = src && !currentSrc.includes(src);
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

const AudioPlayer = ({ src, isPlaying, onSongEnd }) => {
  const audioElRef = useRef(null);

  useEffect(() => {
    const { current: audioEl } = audioElRef;
    addEndedEventListener({ audioEl, onSongEnd });
  }, [onSongEnd]);

  useEffect(() => {
    const { current: audioEl } = audioElRef;
    reloadSong({ audioEl, src });
  }, [src]);

  useEffect(() => {
    const { current: audioEl } = audioElRef;
    togglePlayback({ audioEl, src, isPlaying });
  }, [isPlaying, src]);

  return (
    <audio ref={audioElRef}>
      <source src={`/api${src}`} type="audio/ogg" />
    </audio>
  );
};

export default AudioPlayer;
