import {Unmatched, useNavigation} from 'expo-router';

const CustomNotFound = () => {
  const nav = useNavigation();

  console.log(nav.getState());

  return Unmatched;
};

export default CustomNotFound;
