import React, { useEffect, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';

import Layout from '../components/layout/Layout';
import { getString } from '../modules/common';

const Home = (): JSX.Element => {
  const { width } = useWindowDimensions();
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUser = async () => {
      setUser(await getString('user'));
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
