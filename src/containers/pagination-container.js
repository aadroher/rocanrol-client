import { connect } from 'react-redux';
import Pagination from '../components/pagination';

const mapStateToProps = ({ currentPageNumber, numPages }, ownProps) => ({
  ...ownProps,
  currentPageNumber,
  numPages,
});

export default connect(mapStateToProps)(Pagination);
