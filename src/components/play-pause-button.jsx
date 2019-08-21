import React from 'react';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles(theme => ({
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const PlayPauseButton = ({
  isPlaying,
  onPlayButtonClick,
  onPauseButtonClick,
}) => {
  const { playIcon } = useStyles();

  const onIconButtonClick = isPlaying ? onPauseButtonClick : onPlayButtonClick;

  return (
    <IconButton onClick={onIconButtonClick} aria-label="play/pause">
      {isPlaying ? (
        <PauseIcon className={playIcon} />
      ) : (
        <PlayArrowIcon className={playIcon} />
      )}
    </IconButton>
  );
};

export default PlayPauseButton;
