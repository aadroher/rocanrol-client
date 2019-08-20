import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const PageLink = ({ currentPageNumber, pageNumber, numPages }) => (
  <Grid item xs={1}>
    <Button
      component={AdapterLink}
      to={`/songs/page/${pageNumber}`}
      color={currentPageNumber === pageNumber ? 'secondary' : 'primary'}
    >
      <Typography>{pageNumber + 1}</Typography>
    </Button>
  </Grid>
);

const PrevPageLink = ({ currentPageNumber, numPages }) =>
  currentPageNumber - 1 >= 0 ? (
    <Grid item xs={1}>
      <Button
        component={AdapterLink}
        to={`/songs/page/${currentPageNumber - 1}`}
        color="primary"
      >
        <ChevronLeftIcon />
      </Button>
    </Grid>
  ) : null;

const NextPageLink = ({ currentPageNumber, numPages }) =>
  currentPageNumber + 1 <= numPages ? (
    <Grid item xs={1}>
      <Button
        component={AdapterLink}
        to={`/songs/page/${currentPageNumber + 1}`}
        color="primary"
      >
        <ChevronRightIcon />
      </Button>
    </Grid>
  ) : null;

const Pagination = ({ currentPageNumber, numPages }) => (
  <Grid container spacing={2} justify="center" alignItems="center">
    <PrevPageLink currentPageNumber={currentPageNumber} numPages={numPages} />
    {[...Array(numPages).keys()].map(i => (
      <PageLink
        key={i}
        currentPageNumber={currentPageNumber}
        pageNumber={i}
        numPages={numPages}
      />
    ))}
    <NextPageLink currentPageNumber={currentPageNumber} numPages={numPages} />
  </Grid>
);

export default Pagination;
