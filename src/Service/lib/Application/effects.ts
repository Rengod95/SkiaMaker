import {autorun} from 'mobx';
import ApplicationStore from './Store';

autorun(() => {
  ApplicationStore.logInitializingProcess();
});

// test
