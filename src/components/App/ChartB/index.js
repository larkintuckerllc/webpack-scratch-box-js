import Loadable from 'react-loadable';
import Loading from '../Loading';

const ChartB = Loadable({
  loader: () => import('./ChartBLoad'),
  loading: Loading,
});

export default ChartB;
