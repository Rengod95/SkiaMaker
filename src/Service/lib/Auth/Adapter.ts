import {InitializationSingleTon} from '@/Service/lib/shared.ts';
import {StorageService} from '@/Service/lib/Storage/Adpater.ts';
import {DEFAULT_STORAGE_ID_TOKEN_KEY} from '@/Service/lib/Auth/consts.ts';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin, isErrorWithCode, isSuccessResponse, statusCodes} from '@react-native-google-signin/google-signin';
import AuthStore from '@/Service/lib/Auth/Store.ts';
import * as AppleAuthentication from 'expo-apple-authentication';
import API, {GlobalToken} from '@/Service/lib/API/Adapter.ts';
import {isAxiosError} from 'axios';
import {VariantService} from '@/Service/lib/Invariant/Adapter.ts';

export type Email = string;
export type Password = string;
export type IdToken = string;

type IdToken_Storage = {
  idToken: IdToken;
};

type SignInSharedProps = {
  successCallback?: (user: FirebaseAuthTypes.User, idToken: IdToken) => void;
  failureCallback?: () => void;
};

//TODO : 파라미터 타입 수정 필요
type Validator = (user: FirebaseAuthTypes.User, idToken: IdToken) => Promise<GlobalToken>;

export class AuthService extends InitializationSingleTon<AuthService> {
  private validator: Validator | undefined = undefined;

  public async getStoredIdTokenOnStorage() {
    return StorageService.getInstance().getData<IdToken_Storage>(DEFAULT_STORAGE_ID_TOKEN_KEY);
  }

  public async setIdTokenOnStorage(idToken: string) {
    await StorageService.getInstance().storeData<IdToken_Storage>(DEFAULT_STORAGE_ID_TOKEN_KEY, {idToken});
  }

  public async cleanIdTokenOnStorage() {
    return StorageService.getInstance().removeDataAsync(DEFAULT_STORAGE_ID_TOKEN_KEY);
  }

  public signInWithEmail = async (email: Email, password: Password) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // 토큰 저장 (자동 로그인 시 사용)
      const idToken = await user.getIdToken();

      await this.invokeSignInEffect(user, idToken);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  public signUpWithEmail = async (email: Email, password: Password) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      // 토큰 저장 (자동 로그인 시 사용)
      const idToken = await user.getIdToken();

      await this.invokeSignInEffect(user, idToken);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  public signInWithGoogleSSO = async (props?: SignInSharedProps) => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      if (isSuccessResponse(response)) {
        const googleCredential = auth.GoogleAuthProvider.credential(response.data?.idToken!);
        const userCredential = await auth().signInWithCredential(googleCredential);

        const user = userCredential.user;

        // 토큰 저장 (자동 로그인 시 사용)
        const idToken = await user.getIdToken();

        await this.invokeSignInEffect(user, idToken);
        typeof props?.successCallback === 'function' && props.successCallback(user, idToken);
      } else {
        typeof props?.failureCallback === 'function' && props.failureCallback();
        console.log('sign in failed on google');
      }
    } catch (error: unknown) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log('progress error');
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('play service not available');
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        console.log('error invoked');
        // an error that's not related to google sign in occurred
      }
    }
  };

  public signInWithApple = async (props?: SignInSharedProps) => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME, AppleAuthentication.AppleAuthenticationScope.EMAIL],
      });

      const userCredential = await auth().signInWithCredential(auth.AppleAuthProvider.credential(credential.identityToken));
      const {user} = userCredential;

      // 토큰 저장 (자동 로그인 시 사용)
      const idToken = await user.getIdToken();

      await this.invokeSignInEffect(user, idToken);
      typeof props?.successCallback === 'function' && props.successCallback(user, idToken);
    } catch (e: any) {
      if (e?.code === 'ERR_REQUEST_CANCELED') {
        // handle that the user canceled the sign-in flow
      } else {
        console.log('error invoked');
        // handle other errors
      }
    }
  };

  public async signOut() {
    AuthStore.setIdTokenState(null);
    AuthStore.changeSessionState(null);
    await this.cleanIdTokenOnStorage();
  }

  public async invokeSignInEffect(user: FirebaseAuthTypes.User, idToken: IdToken) {
    VariantService.invariant(this.validator, {type: 'error', message: '벨리데이터 함수 할당되지 않은 상태로 invokeSignInEffect 접근'});
    try {
      const res = await this.validator(user, idToken);
      API.setDefaultAuthorizationHeader(res);
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(e.response);
        console.log(e.code);
      }
      console.log('error invoked on login api call', e);
    }

    AuthStore.changeSessionState(user);
    AuthStore.setIdTokenState(idToken);
    await this.setIdTokenOnStorage(idToken);
  }

  public async checkSessionOnMount() {
    VariantService.invariant(this.validator, {type: 'error', message: '벨리데이터 함수 할당되지 않은 상태로 check session on mount 접근'});
    try {
      const idTokenFromStorage = await this.getStoredIdTokenOnStorage();
      if (idTokenFromStorage) {
        const user = auth().currentUser;
        const userIdToken = await user?.getIdToken();
        if (!user || userIdToken !== idTokenFromStorage.idToken) {
          await this.cleanIdTokenOnStorage();
          return;
        }
        await this.invokeSignInEffect(user, userIdToken);
      }
    } catch (e) {
      console.error('Error checking session on checkSessionOnMount', e);
      await this.cleanIdTokenOnStorage();
    }
  }

  //TODO : 세션 체킹 로직 수정
  override async initialize(): Promise<void> {}

  public initValidator(fn: Validator) {
    this.validator = fn;
  }
}
