import {connect} from 'react-redux';
import {maintenanceServer} from './config/actions';
import Splash from './container';

const mapStateToProps = (state) => ({
  reducers: state.Splash,
});

const mapDispatchTopProps = (dispatch) => ({
  maintenanceServer: (d) => dispatch(maintenanceServer(d)),
});

export default connect(mapStateToProps, mapDispatchTopProps)(Splash);
