// screens/HomeScreen.tsx
import {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import UserCard from '../components/UserCard';

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => setUsers(res.data.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#eee',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
});
