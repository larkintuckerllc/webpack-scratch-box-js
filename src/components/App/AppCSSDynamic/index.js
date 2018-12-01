import Loadable from 'react-loadable';
import Loading from '../Loading';

const AppCSSDynamic = Loadable({
  loader: () => import('./AppCSSDynamicLoad'),
  loading: Loading,
});

export default AppCSSDynamic;
