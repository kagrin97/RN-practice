import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { COLOR } from "../color";

export default function Dict() {
  const nString = "{n}";
  const nStringDescription = "{3}";

  const minString = "{min,}";
  const minStringDescription = "{3,}";

  const maxString = "{min,max}";
  const maxStringDescription = "{2,4}";
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.index}>그룹과 범위</Text>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>| </Text>
          <Text style={styles.about}> or</Text>
        </Text>
        <Text style={styles.meaning}>또는</Text>
        <Text style={styles.description}>/g|b/ ⇒ g또는 b를 찾음</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>() </Text>
          <Text style={styles.about}> 소괄호</Text>
        </Text>
        <Text style={styles.meaning}>그룹</Text>
        <Text style={styles.description}>/(g|b)/ ⇒ 그룹으로 묶음</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>[] </Text>
          <Text style={styles.about}> 대괄호</Text>
        </Text>
        <Text style={styles.meaning}>문자셋, 괄호안의 어떤 문자든</Text>
        <Text style={styles.description}>
          /[a-f]/ ⇒ a부터f까지 한개라도 있으면
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>[^] </Text>
          <Text style={styles.about}> 캐럿</Text>
        </Text>
        <Text style={styles.meaning}>부정 문자셋, 괄호안의 어떤 문자 </Text>
        <Text style={styles.description}>
          /[^a-f]/ ⇒ a부터f까지 포함되지 않는
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>(?:) </Text>
          <Text style={styles.about}> 물음표, 콜론</Text>
        </Text>
        <Text style={styles.meaning}>찾지만 기억하지는 않음</Text>
        <Text style={styles.description}>
          /(?:a-f)/ ⇒ a부터f까지 찾지만 가져오지않음
        </Text>
      </View>

      <Text style={styles.index}>수량</Text>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>? </Text>
          <Text style={styles.about}> 물음표</Text>
        </Text>
        <Text style={styles.meaning}>없거나 있거나 (zero or one)</Text>
        <Text style={styles.description}>
          /gra?y/ ⇒ a가 포함된 문자나 안포함된 문자 모두 가져옴
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>* </Text>
          <Text style={styles.about}> 별표</Text>
        </Text>
        <Text style={styles.meaning}>없거나 있거나 많거나 (zero or more)</Text>
        <Text style={styles.description}>/gra*y/ ⇒ gry, gray, graaaay</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>+ </Text>
          <Text style={styles.about}> 더하기</Text>
        </Text>
        <Text style={styles.meaning}>하나 또는 많이 (one or more)</Text>
        <Text style={styles.description}>/gra+y/ ⇒ gray, graaaaay</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>{nString} </Text>
          <Text style={styles.about}> 갯수</Text>
        </Text>
        <Text style={styles.meaning}>앞 문자 n번 반복</Text>
        <Text style={styles.description}>
          /gra{nStringDescription}y/ ⇒ graaay
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>{minString} </Text>
          <Text style={styles.about}> 최소 갯수</Text>
        </Text>
        <Text style={styles.meaning}>앞에 있는 문자의 최소 갯수</Text>
        <Text style={styles.description}>
          /gra{minStringDescription}y/ ⇒ graaay, graaaay …..
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>{maxString} </Text>
          <Text style={styles.about}> 최대 갯수</Text>
        </Text>
        <Text style={styles.meaning}>앞문자 최소갯수와 최대갯수</Text>
        <Text style={styles.description}>
          /gra{maxStringDescription}y/ ⇒ graay, graaay, graaaay
        </Text>
      </View>

      <Text style={styles.index}>경계</Text>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>\b </Text>
          <Text style={styles.about}> 슬래쉬b</Text>
        </Text>
        <Text style={styles.meaning}>단어 경계</Text>
        <Text style={styles.description}>
          /\bYa/ ⇒ Ya라는 단어가 문장 맨앞에 있을때만 적용, /Ya\b/ ⇒ Ya문장 뒤에
          있을때 적용
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>\B </Text>
          <Text style={styles.about}> 슬래쉬B</Text>
        </Text>
        <Text style={styles.meaning}>단어 경계 반전</Text>
        <Text style={styles.description}>
          \b 와는 반대로 작용이됨 예를 들어 /Ya\b/ ⇒ YaYaYa 맨뒤만 가져옴 ,
          /Ya\B/ ⇒YaYaYa 맨뒤 뺴고 가져옴
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>^ </Text>
          <Text style={styles.about}> 캐럿</Text>
        </Text>
        <Text style={styles.meaning}>문장의 시작</Text>
        <Text style={styles.description}>
          /^Ya/ ⇒ 문자열 시작부분과 일치하거나 줄의 시작 부분과 일치함
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>$ </Text>
          <Text style={styles.about}> 달러</Text>
        </Text>
        <Text style={styles.meaning}>문장의 끝</Text>
        <Text style={styles.description}>
          /Ya$/ ⇒ 문자끝이나 줄의 끝부분과 일치함
        </Text>
      </View>

      <Text style={styles.index}>문자</Text>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>\ </Text>
          <Text style={styles.about}> 백슬래쉬</Text>
        </Text>
        <Text style={styles.meaning}>특수 문자가 아닌 문자</Text>
        <Text style={styles.description}>
          특수문자를 가져올때 특수문자 앞에 사용한다
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>. </Text>
          <Text style={styles.about}> 닷</Text>
        </Text>
        <Text style={styles.meaning}>어떤 글자 (줄바꿈 문자 제외)</Text>
        <Text style={styles.description}>
          줄바꿈을 제외한 모든 문자를 가져옵니다.
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>\d </Text>
          <Text style={styles.about}> 백슬래쉬d</Text>
        </Text>
        <Text style={styles.meaning}>digit 숫자</Text>
        <Text style={styles.description}>모든 숫자를 가져올때 사용합니다.</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>\D </Text>
          <Text style={styles.about}> 백슬래쉬D</Text>
        </Text>
        <Text style={styles.meaning}>digit 숫자 제외</Text>
        <Text style={styles.description}>
          숫자를 제외한 모든것을 가져옵니다.
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>\w </Text>
          <Text style={styles.about}> 백슬래쉬w</Text>
        </Text>
        <Text style={styles.meaning}>word 문자</Text>
        <Text style={styles.description}>
          특수문자를 제외한 모든 문자를 가져옵니다.
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>\W </Text>
          <Text style={styles.about}> 백슬래쉬W</Text>
        </Text>
        <Text style={styles.meaning}>word 문자 제외</Text>
        <Text style={styles.description}>
          일반 문자를 제외한 모든 특수문자를 가져옵니다.
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>\s </Text>
          <Text style={styles.about}> 백슬래쉬s</Text>
        </Text>
        <Text style={styles.meaning}>space 공백</Text>
        <Text style={styles.description}>공백을 모두 가져옵니다.</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.title}>
          <Text style={styles.grammar}>\S </Text>
          <Text style={styles.about}> 백슬래쉬S</Text>
        </Text>
        <Text style={styles.meaning}>space 공백 제외</Text>
        <Text style={styles.description}>
          공백을 제외한 모든 문자를 가져옵니다.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: COLOR.black,
    borderRadius: 5,
  },
  index: {
    fontSize: 40,
    color: "white",
    marginLeft: 9,
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    backgroundColor: COLOR.yellow,
    marginBottom: 10,
    marginHorizontal: 9,
    borderRadius: 5,
  },
  title: {
    marginLeft: 10,
    marginBottom: 5,
    flexDirection: "row",
  },
  grammar: {
    fontSize: 30,
  },
  about: {
    fontSize: 15,
    opacity: 0.5,
  },
  meaning: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 5,
  },
});
