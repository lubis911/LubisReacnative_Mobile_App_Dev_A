import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const Exercise2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.profileBox}>
          <Image
            source={require('./assets/cv.ezer.jpg')}
            style={styles.image}
          />
          <Text style={styles.name}>Ebenezer Lubis</Text>
          <Text style={styles.section}>📍 Bekasi, Indonesia</Text>
          <Text style={styles.section}>📧 lubis@email.com</Text>
          <Text style={styles.section}>📞 0812-3456-7890</Text>
        </View>

        <View style={styles.sectionBox}>
          <Text style={styles.heading}>🎓 EDUCATION</Text>
          <Text style={styles.item}>
            Universitas Klabat - Informatika (2021 - 2025)
          </Text>
        </View>

        <View style={styles.sectionBox}>
          <Text style={styles.heading}>💼 WORK EXPERIENCE</Text>
          <Text style={styles.item}>
            - Frontend Developer, Project Kampus Merdeka (2024)
          </Text>
          <Text style={styles.item}>
            - UI Designer, Proyek Startup UKM (2023)
          </Text>
        </View>

        <View style={styles.sectionBox}>
          <Text style={styles.heading}>🛠️ SKILL</Text>
          <Text style={styles.item}>- React Native, JavaScript, HTML/CSS</Text>
          <Text style={styles.item}>- Figma, Canva, Git, Firebase</Text>
        </View>

        <View style={styles.sectionBox}>
          <Text style={styles.heading}>📌 PROJECT</Text>
          <Text style={styles.item}>
            🛍️ E-Commerce App – Aplikasi belanja berbasis React Native &
            Firebase
          </Text>
          <Text style={styles.item}>
            💬 Chat App – Komunikasi real-time menggunakan Firebase & Expo
          </Text>
          <Text style={styles.item}>
            📅 Task Manager – Manajemen tugas harian dengan notifikasi lokal
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e8ecf4',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  profileBox: {
    backgroundColor: '#dbeafe',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#1e293b',
  },
  section: {
    fontSize: 14,
    textAlign: 'center',
    color: '#334155',
    marginBottom: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#2e3a59',
  },
  item: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  sectionBox: {
    backgroundColor: '#f0f4ff',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
});

export default Exercise2;
