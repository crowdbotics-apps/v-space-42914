import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Modal, Pressable, TextInput } from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigateToHomePage, setNavigateToHomePage] = useState(false);

  const handleRegister = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCompleteRegistration = () => {
    if (email && password) {
      // Perform registration logic here
      setModalVisible(false);
      setNavigateToHomePage(true);
    } else {// Display error message or validation
    }
  };

  const handleOpenHomePage = () => {
    navigation.navigate("activityFeed");
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group}>
          <Text style={styles.title}>V Space</Text>
          <Text style={styles.subtitle}>A place to make school great.</Text>
          <TouchableOpacity style={styles.buttonBlue} onPress={handleRegister}>
            <Text style={styles.buttonTextBlue}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWhite} onPress={handleRegister}>
            <Text style={styles.buttonTextWhite}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Registration</Text>
            <Text style={styles.modalText}>Enter your school email here:</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="School Email" placeholderTextColor="#999" />
            <Text style={styles.modalText}>Password:</Text>
            <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
            <TouchableOpacity style={styles.completeButton} onPress={handleCompleteRegistration}>
              <Text style={styles.completeButtonText}>
                Complete Registration
              </Text>
            </TouchableOpacity>
            <Pressable style={styles.modalButton} onPress={handleOpenHomePage}>
              <Text style={styles.modalButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {navigateToHomePage}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%",
    justifyContent: "space-between"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    fontFamily: "Arial",
    borderRadius: 10
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Arial",
    borderRadius: 10,
    textAlign: "center"
  },
  buttonBlue: {
    backgroundColor: "#fb95ca",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonTextBlue: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Arial"
  },
  buttonWhite: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10
  },
  buttonTextWhite: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Arial"
  },
  footer: {
    textAlign: "center",
    fontSize: 14,
    color: "#828AB0",
    fontWeight: "bold",
    marginBottom: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    fontFamily: "Arial",
    textAlign: "center"
  },
  modalText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Arial",
    marginBottom: 10,
    textAlign: "center"
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  completeButton: {
    backgroundColor: "#FF69B4",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginBottom: 10
  },
  completeButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Arial"
  },
  modalButton: {
    backgroundColor: "#007BFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center"
  },
  modalButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Arial"
  }
});
export default WelcomeScreen;