import React from 'react';

const SongDetail = ({
  id,
  title,
  author,
  isPlaying,
  isSelected,
  getOnPlayButtonClick,
  getOnPauseButtonClick,
  loadSongs,
}) => {
  const { playIcon } = useStyles({
    isSelected,
  });

  const onIconButtonClick = isPlaying
    ? getOnPauseButtonClick(id)
    : getOnPlayButtonClick(id);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <IconButton onClick={onIconButtonClick} aria-label="play/pause">
              {isPlaying ? (
                <PauseIcon className={playIcon} />
              ) : (
                <PlayArrowIcon className={playIcon} />
              )}
            </IconButton>
          </Grid>
          <Grid item xs={12} sm container direction="column">
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1">{author}</Typography>
          </Grid>
          <Grid item>
            <IconButton component={AdapterLink} to={`/song/${id}`}>
              <MoreHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
