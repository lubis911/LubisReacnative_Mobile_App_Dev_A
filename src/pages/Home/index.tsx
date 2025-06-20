import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import profile from '../../assets/profile.png';

const Home: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hi, Lubis</Text>
          <Text style={styles.subtitle}>Have you track your money today?</Text>
        </View>
        <Image source={profile} style={styles.image} />
      </View>

      <Text style={styles.label}>Your Balance</Text>
      <Text style={styles.balance}>Rp. 10.000.000</Text>
      <View style={styles.divider} />

      <View style={styles.row}>
        <Text>Cash on Hand</Text>
        <Text>Rp. 4.000.000</Text>
      </View>
      <View style={styles.row}>
        <Text>Cash on Bank</Text>
        <Text>Rp. 6.000.000</Text>
      </View>

      <Gap height={32} />

      <Text style={styles.label}>Add Transaction</Text>
      <Button text="Cash On Hand" onPress={() => {}} />
      <Gap height={16} />
      <Button text="Cash On Bank" onPress={() => {}} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    color: '#8D92A3',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    fontFamily: 'Poppins-Medium',
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    marginBottom: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
});
