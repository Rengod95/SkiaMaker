import servicesMediator from '@/Service/lib/ServicesMediator.ts';
import {RouteService} from '@/Service/lib/Route/Adapter.ts';
import {AdvertisementService} from '@/Service/lib/Ad/Adapter.ts';
import {ComponentValidatorService} from '@/Service/lib/ComponentValidation/Adapter.ts';
import {StorageService} from '@/Service/lib/Storage/Adpater.ts';
import {AuthService} from '@/Service/lib/Auth/Adapter.ts';

export const registerServices = () => {
  servicesMediator.registerServiceForInitialization(RouteService.getInstance());
  servicesMediator.registerServiceForInitialization(AdvertisementService.getInstance());
  servicesMediator.registerServiceForInitialization(ComponentValidatorService.getInstance());
  servicesMediator.registerServiceForInitialization(StorageService.getInstance());
  servicesMediator.registerServiceForInitialization(AuthService.getInstance());
};
