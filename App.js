import { StatusBar } from 'expo-status-bar';
import { ScrollView,View, StyleSheet, Text, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./picture.jpg')} 
        style={styles.profileImage}
      />
      <Text>Student Names: Nthatuoa Rapeane</Text>
      <Text>Student Number: 901016416</Text>
      <Text>Semester: 2</Text>
      <Text>Class: BSCSMY2</Text>
      <Text>YearOfEnrollement: 2022</Text>
      <Text>CGPA: 3.44</Text>
      <Text>GPA: 3.6</Text>
      <View style={styles.grades}>
        <Text style={styles.title}>Semester grades</Text>
        <Text style={styles.module}>Mobile Device Programming A*</Text>
        <Text style={styles.module}>Software Modeling A</Text>
        <Text style={styles.module}>C++ Programming2 A*</Text>
  
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 340, 
    height: 700, 
    marginBottom: 20, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  module: {
    fontSize: 15,
    marginBottom: 5,
  }
});