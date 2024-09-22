import {InitializationSingleTon} from '@/Service/shared.ts';
import {VariantService} from '@/Service/Outbound/Invariant/Adapter.ts';

export class ServiceMediator {
  private services: Set<InitializationSingleTon<any>> = new Set();

  constructor() {}

  public registerServiceForInitialization(service: InitializationSingleTon<any>) {
    const serviceName = service.constructor.name;

    // 중복된 서비스가 있는지 확인
    for (const registeredService of this.services) {
      const isDuplicatedService = registeredService.constructor.name === serviceName;

      VariantService.invariant(!isDuplicatedService, {
        type: 'warning',
        message: `Service ${serviceName} is already registered.`,
      });
    }

    console.log(`${serviceName}service registered`);
    this.services.add(service);
  }

  public async initializeServices(callback?: () => Promise<void>) {
    try {
      await Promise.all(
        Array.from(this.services).map(service => {
          return service.initialize();
        }),
      );
      await callback?.();
    } catch (e: unknown) {
      console.warn(`There are some problem on initializing Services, ${e}`);
    }
  }
}

export default new ServiceMediator();
