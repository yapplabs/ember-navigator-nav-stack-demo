import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('yapp');
  // see app/services/navigator-router for the routing map that takes over from here
  this.route('yapp-navigator', { path: '/yapp/*path' });
});
