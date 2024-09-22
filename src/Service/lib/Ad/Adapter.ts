import mobileAds, {AppOpenAd, InterstitialAd, TestIds} from 'react-native-google-mobile-ads';
import {Platform} from 'react-native';
import {RequestOptions} from 'react-native-google-mobile-ads/src/types/RequestOptions.ts';
import {InitializationSingleTon} from '@/Service/lib/shared.ts';
import {getTrackingPermissionsAsync} from 'expo-tracking-transparency';

export class AdvertisementService extends InitializationSingleTon<AdvertisementService> {
  private appOpenAdUnitId: string;
  private bannerAdUnitId: string;
  private interstitialAdUnitId: string;

  constructor() {
    super();
    this.bannerAdUnitId = __DEV__
      ? TestIds.BANNER
      : Platform.select({
          ios: 'ca-app-pub-2037720801514821/4302841236',
          android: 'ca-app-pub-2037720801514821/7121975061',
          default: 'ca-app-pub-2037720801514821/4302841236',
        });

    this.interstitialAdUnitId = __DEV__
      ? TestIds.INTERSTITIAL
      : Platform.select({
          ios: 'ca-app-pub-2037720801514821/8913940016',
          android: 'ca-app-pub-2037720801514821/2095845258',
          default: 'ca-app-pub-2037720801514821~5226934308',
        });

    this.appOpenAdUnitId = __DEV__
      ? TestIds.APP_OPEN
      : Platform.select({
          ios: 'ca-app-pub-2037720801514821/3324801482',
          android: 'ca-app-pub-2037720801514821/9991680982',
          default: 'ca-app-pub-2037720801514821~5226934308',
        });
  }

  public createInterstitialAdInstance(options?: RequestOptions) {
    return InterstitialAd.createForAdRequest(this.interstitialAdUnitId, options);
  }

  public createAppOpenAdInstance(options?: RequestOptions) {
    return AppOpenAd.createForAdRequest(this.appOpenAdUnitId, options);
  }

  public getBannerAdUnitId() {
    return this.bannerAdUnitId;
  }

  public getInterstitialAdUnitId() {
    return this.interstitialAdUnitId;
  }

  override async initialize() {
    console.log('initialize AD Service');
    await getTrackingPermissionsAsync();
    await mobileAds().initialize();
  }
}
