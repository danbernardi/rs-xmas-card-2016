import App from './app/App';

const rootRoute = { component: App, path: '/' };

if (window && window.location.hostname !== 'localhost') {
  rootRoute.path = '/holiday2016/'
}

const routeConfig = (/*store*/) => {
  return [rootRoute]
};

export default routeConfig;
