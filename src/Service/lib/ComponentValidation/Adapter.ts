import {InitializationSingleTon} from '@/Service/lib/shared.ts';
import {isValidElement} from 'react';

export class ComponentValidatorService extends InitializationSingleTon<ComponentValidatorService> {
  public isFunctionComponent<T>(element: any): element is React.FunctionComponent<T> {
    return typeof element === 'function' && element.prototype?.isReactComponent === undefined;
  }

  public isJSXElement(element: any): element is React.JSX.Element {
    return isValidElement(element);
  }
}
