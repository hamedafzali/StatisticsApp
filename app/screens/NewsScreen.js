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
    title: "احمدعلى اشترى نژاد",
    description:
      "رئيس اداره كل آموزش و تحقيقات از تصويب و ابلاغ تقويم آموزشى سال ١٤٠٠ در روزهاى پايانى سال خبر داد.",
    image: require("../assets/ashtari.jpg"),
  },
  {
    id: 2,
    title: "دکتر بهزاد شیری",
    description: "پیام دکتر شیری مدیرعامل پست بانک ایران به مناسبت روز جانباز",
    image: require("../assets/shiri.jpg"),
  },
  {
    id: 3,
    title: "احمدعلى اشترى نژاد",
    description:
      "رئيس اداره كل آموزش و تحقيقات از تصويب و ابلاغ تقويم آموزشى سال ١٤٠٠ در روزهاى پايانى سال خبر داد.",
    image: require("../assets/ashtari.jpg"),
  },
  {
    id: 4,
    title: "دکتر بهزاد شیری",
    description: "پیام دکتر شیری مدیرعامل پست بانک ایران به مناسبت روز جانباز",
    image: require("../assets/shiri.jpg"),
  },
];

function NewsScreen(props) {
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
            title={item.title}
            subTitle={item.description}
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

export default NewsScreen;
