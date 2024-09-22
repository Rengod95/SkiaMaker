// import Purchases from 'react-native-purchases';
//
// // TODO : 프로젝트 변경 시 수정 필요
// const REVENUECAT_PUBLIC_API_KEY = 'appl_KjnUiiuhsbiEvlfIMMDCPaeXJRB';
//
// export const configureRevenueCat = () => {
//   Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
//   Purchases.configure({apiKey: REVENUECAT_PUBLIC_API_KEY});
//
//   // 플랫폼 별 별도 프로젝트 적용 시 아래 코드
//   if (Platform.OS === 'ios') {
//       Purchases.configure({apiKey: <revenuecat_project_apple_api_key>});
//   } else if (Platform.OS === 'android') {
//       Purchases.configure({apiKey: <revenuecat_project_google_api_key>});
//
//       // OR: if building for Amazon, be sure to follow the installation instructions then:
//       Purchases.configure({ apiKey: <revenuecat_project_amazon_api_key>, useAmazon: true });
//   }
// };
