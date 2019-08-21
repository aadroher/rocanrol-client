import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayPauseButton from './play-pause-button';

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

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
          <IconButton component={AdapterLink} to={`/song/${id}`}>
            <MoreHorizIcon />
          </IconButton>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default SongCard;
