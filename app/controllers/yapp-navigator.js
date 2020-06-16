import Controller from '@ember/controller';
import { extractComponentKey } from '../utils/component';
import config from 'ember-navigator-nav-stack-demo/config/environment';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class YappNavigatorController extends Controller {
  extractComponentKey = extractComponentKey;

  @tracked _debug;
  @tracked birdsEyeDebugging = !!config.BIRDS_EYE_DEBUGGING;
  @tracked model;
  @service navigatorRouter;

  queryParams = ['debug'];
  get debug() {
    return this._debug;
  }
  set debug(val) {
    this._debug = val;
    this.birdsEyeDebugging = !!val;
    return this._debug;
  }

  get mountedRouter() {
    return this.navigatorRouter.mountedRouter
  }

  @action
  pop(ev) {
    if (ev) {
      ev.preventDefault();
    }
    this.mountedRouter.pop();
  }

  @action
  switchToTab(tabName, ev) {
    if (ev) {
      ev.preventDefault();
    }
    this.mountedRouter.navigate({ routeName: tabName });
  }

}
