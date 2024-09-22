import {useEffect, useMemo, useState} from 'react';
import {AdEventType} from 'react-native-google-mobile-ads';
import {AdShowOptions} from 'react-native-google-mobile-ads/src/types/AdShowOptions.ts';

import {AdvertisementService} from '@/Service/lib/Ad/Adapter.ts';

export const useInterstitialAd = () => {
  const [isInterstitialInitialized, setIsInterstitialInitialized] = useState<boolean>(false);
  const interstitial = useMemo(() => AdvertisementService.getInstance().createInterstitialAdInstance(), []);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setIsInterstitialInitialized(true);
    });

    interstitial.load();

    return unsubscribe;
  }, []);

  const showInterstitialAd = async (options?: AdShowOptions) => {
    if (isInterstitialInitialized && interstitial.loaded) {
      setTimeout(() => {
        interstitial.show(options);
      }, 1000);
    } else {
      interstitial.load();
    }
  };

  return {
    interstitial,
    isInterstitialInitialized,
    showInterstitialAd,
  };
};
