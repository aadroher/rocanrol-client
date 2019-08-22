import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import withLink from './hocs/with-link';
import PlayPauseButton from './play-pause-button';

const LinkIconButton = withLink(IconButton);

const SongCard = ({
  id,
  title,
  author,
  isPlaying,
  isSelected,
  onPlayButtonClick,
  onPauseButtonClick,
}) => (
  <Card raised={isSelected}>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item>
          <PlayPauseButton
            isPlaying={isPlaying}
            onPlayButtonClick={onPlayButtonClick}
            onPauseButtonClick={onPauseButtonClick}
          />
        </Grid>
        <Grid item xs={12} sm container direction="column">
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1">{author}</Typography>
        </Grid>
        <Grid item>
          <LinkIconButton to={`/song/${id}`}>
            <MoreHorizIcon />
          </LinkIconButton>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default SongCard;
