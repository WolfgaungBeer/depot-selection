import { connect } from 'react-redux';
import { push } from 'routerSvc';
import Home from './Home';

const mapDispatchToProps = () => ({ navigate: path => push(path) });

export default connect(null, mapDispatchToProps)(Home);
