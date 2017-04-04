import { observable, computed, action } from 'mobx';
import { ServerNames } from 'master-server-urls';

class ServerNamesStores {

  @observable ServerNameUrls = {};

  @computed get getServerUrls() {
    return this.ServerNameUrls;
  }

  @action updateUrl(server) {
    this.ServerNameUrls.webServer = server.toString();
  }

  constructor() {
    const overrideServer = {
      "medicontentServer": "https://somerandom.server.com"
    }
    const newServerNames = Object.assign({}, ServerNames, overrideServer);
    this.ServerNameUrls = newServerNames;
  }

}

const serverNamesStores = new ServerNamesStores();

export default serverNamesStores;
