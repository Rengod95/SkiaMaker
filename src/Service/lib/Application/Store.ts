import {action, makeAutoObservable, observable} from 'mobx';

export interface ApplicationStoreInterface {
  isServicesInitialized: boolean;
  isApplicationInitialized: boolean;
  logInitializingProcess(): void;
}

class ApplicationStoreImpl implements ApplicationStoreInterface {
  hasSession: boolean = false;
  isServicesInitialized: boolean = false;
  isApplicationInitialized: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      isApplicationInitialized: observable,
      isServicesInitialized: observable,
      logInitializingProcess: action,
    });
  }

  logInitializingProcess() {
    console.log('services are initialzed?', this.isServicesInitialized);
    console.log('application is initialized', this.isApplicationInitialized);
  }

  changeServiceInitializationState(value: boolean) {
    this.isServicesInitialized = value;
  }

  changeApplicationInitializationState(value: boolean) {
    this.isApplicationInitialized = value;
  }
}

const ApplicationStore = new ApplicationStoreImpl();

export default ApplicationStore;
