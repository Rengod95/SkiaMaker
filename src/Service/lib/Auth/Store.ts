import {action, computed, makeAutoObservable, observable} from 'mobx';
import {IdToken} from '@/Service/lib/Auth/Adapter.ts';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type Session = FirebaseAuthTypes.User | null;

export interface AuthStoreInterface {
  isSessionValid: boolean;
  idToken: IdToken | null;
  session: Session;
  changeSessionState: (session: Session) => void;
}

class AuthStoreImpl implements AuthStoreInterface {
  idToken: IdToken | null = null;
  session: Session = null;

  constructor() {
    makeAutoObservable(this, {
      session: observable,
      idToken: observable,
      isSessionValid: computed,
      changeSessionState: action,
      setIdTokenState: action,
    });
  }

  changeSessionState(state: Session): void {
    this.session = state;
  }

  setIdTokenState(token: string | null): void {
    this.idToken = token;
  }

  get isSessionValid(): boolean {
    return this.idToken !== null && this.session !== undefined;
  }
}

const AuthStore = new AuthStoreImpl();

export default AuthStore;
