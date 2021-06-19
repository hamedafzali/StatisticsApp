import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "مدیر سیستم",
    description:
      "ثبت اطلاعات طرح پایش و پویش مورخ 1400/01/07 جهت ثبت فعال میباشد",
    // image: require("../assets/shiri.jpg"),
    date: "1399/12/25",
  },
  {
    id: 2,
    title: "مدیر سیستم",
    description:
      "بخش ثبت جابجایی پرسنل در نرم افزار آمار و بودجه برای فروردین 1400 فعال شد",
    // image: require("../assets/shiri.jpg"),
    date: "1400/01/01",
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={"پیام از طرف:" + item.title}
            subTitle={item.description}
            date={" تاریخ:" + item.date}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/shiri.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
