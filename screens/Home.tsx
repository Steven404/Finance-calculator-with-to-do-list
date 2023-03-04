import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import Layout from '../components/layout/Layout';
import { getData } from '../modules/common';
import { RootStackParamList } from '../types/CommonTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props): JSX.Element => {
  const { width } = useWindowDimensions();
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const fetchedUser = await getData('user');
      if (!fetchedUser) {
        Toast.show({ text1: 'Error', text2: 'No user found', type: 'error' });
        navigation.push('Onboarding');
      }
      setUser(fetchedUser);
    };
    getUser();
  }, []);

  return (
    <Layout
      width={width}
      headerTitle={`Welcome ${user}`}
      headerSubtitle="You have 0 tasks left for today."
      fillBackground
    >
      <View style={{ alignItems: 'center' }} />
    </Layout>
  );
};

export default Home;
