// components/UserCard.tsx
import {View, Text, Image, StyleSheet} from 'react-native';

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type Props = {
  user: User;
};

export default function UserCard({user}: Props) {
  return (
    <View style={styles.card}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <View>
        <Text style={styles.name}>
          {user.last_name} {user.first_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    color: '#555',
  },
});
