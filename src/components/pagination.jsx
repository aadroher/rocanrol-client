import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';

import withLink from './hocs/with-link';

const LinkButton = withLink(Button);

const PageLink = ({ currentPageNumber, pageNumber, numPages }) => (
  <Grid item xs={1}>
    <LinkButton
      to={`/songs/page/${pageNumber}`}
      color={currentPageNumber === pageNumber ? 'secondary' : 'primary'}
    >
      <Typography>{pageNumber + 1}</Typography>
    </LinkButton>
  </Grid>
);

const PrevPageLink = ({ currentPageNumber, numPages }) => {
  const prevPageNumber = currentPageNumber - 1;

  return prevPageNumber >= 0 ? (
    <Grid item xs={1}>
      <LinkButton to={`/songs/page/${prevPageNumber}`} color="primary">
        <ChevronLeftIcon />
      </LinkButton>
    </Grid>
  ) : null;
};

const NextPageLink = ({ currentPageNumber, numPages }) => {
  const nextPageNumber = currentPageNumber + 1;

  return nextPageNumber < numPages ? (
    <Grid item xs={1}>
      <LinkButton to={`/songs/page/${currentPageNumber + 1}`} color="primary">
        <ChevronRightIcon />
      </LinkButton>
    </Grid>
  ) : null;
};

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
