import mediator from '@/Service/lib/ServicesMediator.ts';
import ApplicationStore from '@/Service/lib/Application/Store.ts';
import {useEffect} from 'react';
import {AuthService} from '@/Service/lib/Auth/Adapter.ts';

type UseInitializeServicesProps = {
  autoInit?: boolean;
  callback?: () => void;
};

export const useInitializeServices = ({autoInit = true, callback}: UseInitializeServicesProps) => {
  const initializeServices = async (additionalCallback?: () => void) => {
    // 비동기 콜백은 initializeServices 파라미터로 전달해야 함
    await mediator.initializeServices(async () => {
      // auth 검사 api 등록
      // AuthService.getInstance().initValidator(postAuthLogin);
    });

    // 스토리지 내 로그인 내역 존재하는 지 체크 및 auth 검사 api 호출 뒤 axios 헤더에 토큰 등록
    await AuthService.getInstance().checkSessionOnMount();

    //동기 콜백들은 여기에 작성,
    ApplicationStore.changeServiceInitializationState(true);
    ApplicationStore.changeApplicationInitializationState(true);
    additionalCallback?.();
  };

  useEffect(() => {
    if (autoInit) {
      initializeServices(callback);
    }
  }, []);

  return {
    initializeServices,
  };
};
