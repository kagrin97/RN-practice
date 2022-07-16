import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLOR } from "../color";

export default function Home() {
  const [regex, onChangeRegex] = React.useState<any>(null);
  const [text, onChangeText] = React.useState<any>(null);
  let result;

  if (regex && text) {
    const regexx = new RegExp(`${regex}`, "gm");
    result = text.match(regexx);
    console.log(result);
  }

  const onDeleteRegex = () => {
    onChangeRegex(null);
  };

  const onDeleteText = () => {
    onChangeText(null);
  };

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
      <View style={styles.btn}>
        <TouchableOpacity style={styles.btnA} onPress={onDeleteRegex}>
          <Text style={styles.btnText}>표현식 삭제</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnA} onPress={onDeleteText}>
          <Text style={styles.btnText}>문자열 삭제</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.count}>
        <Text>
          {text != null
            ? `전체 문자길이 : ${text.length}`
            : "전체 문자길이 : 0"}{" "}
        </Text>
        <Text>{result != null ? `매칭 : ${result.length}` : "매칭 : 0"}</Text>
      </View>

      <Text style={{ fontWeight: "500", fontSize: 18 }}>매칭된 문자열</Text>
      <View style={styles.text}>
        {result &&
          result.map((item, index) => {
            return (
              <Text
                style={{ color: COLOR.yellow, marginHorizontal: 1 }}
                key={index}
              >
                {item}
              </Text>
            );
          })}
      </View>

      <Text style={{ fontWeight: "500", fontSize: 18 }}>모든 문자열</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnA: {
    padding: 10,
    backgroundColor: COLOR.black,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
  },
  count: {
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.5,
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: COLOR.black,
    borderRadius: 5,
    color: "white",
    padding: 4,
    minHeight: 100,
    flexDirection: "row",
  },
});
