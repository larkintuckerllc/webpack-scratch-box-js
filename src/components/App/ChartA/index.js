import Loadable from 'react-loadable';
import Loading from '../Loading';

const ChartA = Loadable({
  loader: () => import('./ChartALoad'),
  loading: Loading,
});

export default ChartA;
