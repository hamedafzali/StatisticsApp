import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
//import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import defaultStyles from "../config/styles";
import colors from "../config/colors";
const menuItems = [
  {
    title: "خبرها",
    icon: {
      name: "newspaper",
      backgroundColor: defaultStyles.colors.warning,
    },
    targetScreen: routes.NEWS,
  },

  {
    title: "میز امداد",
    icon: {
      name: "account-search",
      backgroundColor: defaultStyles.colors.pbGreenColor,
    },
    targetScreen: routes.HELPDESK,
  },
  {
    title: "پیامها",
    icon: {
      name: "email",
      backgroundColor: defaultStyles.colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
  {
    title: "تنظیمات",
    icon: {
      name: "keyboard-settings",
      backgroundColor: defaultStyles.colors.primary,
    },
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  // const user = {
  //   name: "حامد افضلی نژاد",
  //   email: "hamed.afzali@gmail.com",
  //   department: "اداره کل آمار و بودجه",
  // };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.Name + " " + user.Family}
          subTitle={user.BranchName}
          image={require("../assets/hamed.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="خروج"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => setModalVisible(true)}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>آیا از خروج اطمینان دارید؟</Text>
            <View style={{ flexDirection: "row-reverse" }}>
              <TouchableOpacity onPress={() => logOut()}>
                <View style={[styles.button]}>
                  <Text style={styles.modalText}>بله</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={[styles.button]}>
                  <Text style={styles.modalText}>خیر</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
  container: {
    marginVertical: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 15,
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: colors.silver,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 25,
    borderWidth: 1,
    borderColor: colors.pbGreenColor,
  },
  button: {
    backgroundColor: colors.light,
    borderRadius: 10,
    borderColor: colors.pbGreenColor,
    borderWidth: 1,
    padding: 10,
    elevation: 2,
    width: 100,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },

  modalText: {
    marginBottom: 0,
    textAlign: "center",
    fontFamily: "Harmattan",
    fontSize: 25,
  },
});
export default AccountScreen;
