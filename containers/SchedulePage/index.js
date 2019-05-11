import { connect } from 'react-redux';
import ScheduleScreen from 'screens/ScheduleScreen';
import {
  makeSelectDomain,
} from './selectors';

const mapStateToProps = state => ({
  homePage: makeSelectDomain(state),
})

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
}
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ScheduleScreen);
