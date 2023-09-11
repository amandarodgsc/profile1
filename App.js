import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    
    <View style={styles.profile}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocKTBxSLxlF8pE6ioTK8s80q5GTODwjnYPHJVUA5-WrktA=s360-c-no' }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Amanda Rodrigues</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.sectionTitle}>INFORMAÇÕES BÁSICAS</Text>
        <View style={styles.infoRow}>
          <Ionicons name="mail" size={24} color="#333" />
          <Text style={styles.infoText}>Email: amanda.r.correia@iesb.edu.br</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="man" size={24} color="#333" />
          <Text style={styles.infoText}>Altura: 5' 7" (170 centímetros)</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="ios-barbell" size={24} color="#333" />
          <Text style={styles.infoText}>Peso: 180.4 pounds (72.0 kilograms)</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="ios-brush" size={24} color="#333" />
          <Text style={styles.infoText}>Cor do Cabelo: preto</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="transgender-outline" size={24} color="#333" />
          <Text style={styles.infoText}>Tipo Sanguíneo: O+</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="star" size={24} color="#333" />
          <Text style={styles.infoText}>Signo (Zodíaco Tropical): Touro</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="person" size={24} color="#333" />
          <Text style={styles.infoText}>Nome de Solteira da Mãe: Francineide</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="heart" size={24} color="#333" />
          <Text style={styles.infoText}>Estado Civil: Casada</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="book" size={24} color="#333" />
          <Text style={styles.infoText}>Educação: Graduação Profissional</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="medkit" size={24} color="#333" />
          <Text style={styles.infoText}>Histórico de Doenças</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: 'pink',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 60 },
    shadowOpacity: 0.2,
    elevation: 7,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
    marginTop: 50,
    alignSelf: 'center',
    

  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  userInfo: {
    marginTop: 60,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Profile;
