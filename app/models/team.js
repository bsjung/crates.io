import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  email: attr('string'),
  name: attr('string'),
  login: attr('string'),
  api_token: attr('string'),
  avatar: attr('string'),
  url: attr('string'),
  kind: attr('string'),
  org_name: computed('login', function () {
    let login = this.login;
    let login_split = login.split(':');
    return login_split[1];
  }),
  display_name: computed('name', 'org_name', function () {
    let { name, org_name } = this.getProperties('name', 'org_name');
    return `${org_name}/${name}`;
  }),
});
