import EmberRouter from '@ember/routing/router';
import config from 'project-8/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('route-name');
  this.route('product');
  this.route('login');
  this.route('signup');
});
