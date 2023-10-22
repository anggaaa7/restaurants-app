import ListResto from '../views/pages/main';
import Detail from '../views/pages/detail';
import Favorit from '../views/pages/favorit';

const routes = {
  '/': ListResto, // default page
  '/home': ListResto,
  '/detail/:id': Detail,
  '/favorit': Favorit,
};

export default routes;
