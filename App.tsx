import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

export default function App() {
  const [regex, onChangeRegex] = React.useState<any>(null);
  const [text, onChangeText] = React.useState<any>(null);
  let result;

  if (regex && text) {
    const regexx = new RegExp(`${regex}`, "gm");
    result = text.match(regexx);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeRegex}
        value={regex}
        placeholder="정규표현식을 입력하세요"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="검사할 문자열을 입력하세요"
      />
      <Text>모든 문자열</Text>
      <Text>{text}</Text>
      <Text>매칭된 문자열</Text>
      <View style={styles.result}>
        {result &&
          result.map((item, index) => {
            return <Text key={index}>{item} </Text>;
          })}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    flexDirection: "row",
  },
});
