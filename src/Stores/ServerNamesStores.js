import { observable, computed } from 'mobx';
import { ServerNames } from 'master-server-urls';

class ServerNamesStores {

  @observable ServerNameUrls = {};

  @computed get getServerUrls() {
    console.log('')
    return this.ServerNameUrls;
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
