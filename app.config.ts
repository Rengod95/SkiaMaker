import {ExpoConfig, ConfigContext} from 'expo/config';

const APP_NAME = '';
const APP_SLUG = '';

type Plugin = [string, any] | string;

// 폰트
const FONT_PLUGIN: Plugin = [
  'expo-font',
  {
    fonts: ['./assets/fonts/PretendardStdVariable.ttf'],
  },
];

// 퍼미션
const TRACKING_TRANSPARENCY_PLUGIN: Plugin = [
  'expo-tracking-transparency',
  {
    userTrackingPermission: 'This identifier will be used to deliver personalized ads to you.',
  },
];

// 파이어베이스
const FIREBASE_APP_PLUGIN: Plugin = '@react-native-firebase/app';
const FIREBASE_AUTH_PLUGIN: Plugin = '@react-native-firebase/auth';
const FIREBASE_CRASH_PLUGIN: Plugin = '@react-native-firebase/crashlytics';

// 소셜로그인
// TODO-P : 파이어베이스와 연동되므로 서비스 파일 삽입 후 정상동작
const GOOGLE_SIGNIN_PLUGIN: Plugin = '@react-native-google-signin/google-signin';
const APPLE_SIGNIN_PLUGIN: Plugin = 'expo-apple-authentication';

// 빌드 프로파티
const EXPO_BUILD_PROPERTIES_PLUGIN: Plugin = [
  'expo-build-properties',
  {
    android: {
      compileSdkVersion: 34,
      targetSdkVersion: 34,
      buildToolsVersion: '34.0.0',
    },
    ios: {
      useFrameworks: 'static',
      deploymentTarget: '13.4',
    },
  },
];

// 애드몹
const ADMOB_PLUGIN: Plugin = [
  'react-native-google-mobile-ads',
  {
    //TODO-P : 애드몹 프로젝트 생성 및 아래 APPID 삽입 필요
    androidAppId: 'ca-app-pub-xxxxxxxx~xxxxxxxx',
    iosAppId: 'ca-app-pub-xxxxxxxx~xxxxxxxx',
    userTrackingUsageDescription: 'This identifier will be used to deliver personalized ads to you.',
    skAdNetworkItems: [
      'cstr6suwn9.skadnetwork',
      '4fzdc2evr5.skadnetwork',
      '4pfyvq9l8r.skadnetwork',
      '2fnua5tdw4.skadnetwork',
      'ydx93a7ass.skadnetwork',
      '5a6flpkh64.skadnetwork',
      'p78axxw29g.skadnetwork',
      'v72qych5uu.skadnetwork',
      'ludvb6z3bs.skadnetwork',
      'cp8zw746q7.skadnetwork',
      '3sh42y64q3.skadnetwork',
      'c6k4g5qg8m.skadnetwork',
      's39g8k73mm.skadnetwork',
      '3qy4746246.skadnetwork',
      'f38h382jlk.skadnetwork',
      'hs6bdukanm.skadnetwork',
      'v4nxqhlyqp.skadnetwork',
      'wzmmz9fp6w.skadnetwork',
      'yclnxrl5pm.skadnetwork',
      't38b2kh725.skadnetwork',
      '7ug5zh24hu.skadnetwork',
      'gta9lk7p23.skadnetwork',
      'vutu7akeur.skadnetwork',
      'y5ghdn5j9k.skadnetwork',
      'n6fk4nfna4.skadnetwork',
      'v9wttpbfk9.skadnetwork',
      'n38lu8286q.skadnetwork',
      '47vhws6wlr.skadnetwork',
      'kbd757ywx3.skadnetwork',
      '9t245vhmpl.skadnetwork',
      'eh6m2bh4zr.skadnetwork',
      'a2p9lx4jpn.skadnetwork',
      '22mmun2rn5.skadnetwork',
      '4468km3ulz.skadnetwork',
      '2u9pt9hc89.skadnetwork',
      '8s468mfl3y.skadnetwork',
      'klf5c3l5u5.skadnetwork',
      'ppxm28t8ap.skadnetwork',
      'ecpz2srf59.skadnetwork',
      'uw77j35x4d.skadnetwork',
      'pwa73g5rt2.skadnetwork',
      'mlmmfzh3r3.skadnetwork',
      '578prtvx9j.skadnetwork',
      '4dzt52r2t5.skadnetwork',
      'e5fvkxwrpn.skadnetwork',
      '8c4e2ghe7u.skadnetwork',
      'zq492l623r.skadnetwork',
      '3rd42ekr43.skadnetwork',
      '3qcr597p9d.skadnetwork',
    ],
  },
];

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: APP_NAME,
  slug: APP_SLUG,
  android: {
    ...config.android,
    // TODO-P: 파이어베이스 프로젝트 설정 후 서비스 파일 삽입 필요
    googleServicesFile: './google-services.json',
  },
  ios: {
    ...config.ios,
    usesAppleSignIn: true,
    // TODO-P: 파이어베이스 프로젝트 설정 후 서비스 파일 삽입 필요
    googleServicesFile: './GoogleService-Info.plist',
  },
  plugins: [
    ...(config.plugins as []),
    FONT_PLUGIN,
    TRACKING_TRANSPARENCY_PLUGIN,
    FIREBASE_APP_PLUGIN,
    FIREBASE_AUTH_PLUGIN,
    FIREBASE_CRASH_PLUGIN,
    EXPO_BUILD_PROPERTIES_PLUGIN,
    GOOGLE_SIGNIN_PLUGIN,
    APPLE_SIGNIN_PLUGIN,
    ADMOB_PLUGIN,
  ],
});
