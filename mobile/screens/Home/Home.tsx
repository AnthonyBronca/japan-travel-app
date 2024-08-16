import React from 'react';
import { View, Text, SafeAreaView, Button, Pressable, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import yen from '../../assets/yen.png';
import list from '../../assets/list.png';
import profile from '../../assets/profile.png';
import katakana from '../../assets/katakana.png';
import hirigana from '../../assets/hirigana.png';
import guides from '../../assets/guides.png';
import settings from '../../assets/settings.png';
import phrases from '../../assets/phrases.png';
import file from '../../assets/file.png';
import cherry from '../../assets/cherry.png';


interface IHomeProps {
  navigation: any;
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {

  const buttons = [
    { icon: yen, title: "Yen/USD" },
    { icon: list, title: "To-Dos" },
    { icon: file, title: "Docs" },
    { icon: katakana, title: "Kata" },
    { icon: hirigana, title: "Hiri" },
    { icon: phrases, title: "Phrases" },
    { icon: guides, title: "Guides" },
    { icon: profile, title: "Profile" },
    { icon: settings, title: "Settings" },
  ];

  const handleNav = (name: string) => {
    navigation.navigate(name);
  }

  return (
      <View style={stlyes.container}>
      <ImageBackground source={cherry} resizeMode='cover' style={stlyes.backgroundImage} />
        <View style={stlyes.body}>
          <View style={stlyes.buttonMenuContainer}>
            <View style={stlyes.buttonBody}>
              {buttons.map((el, idx) => (
                <View key={`${el.title}-${idx}`}>
                  <Pressable
                    onPress={() => handleNav(el.title)}
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                      },
                      {
                        backgroundColor: "#ffffff",
                        borderRadius: 7,
                      }
                    ]}
                  >
                    <View style={stlyes.button}>
                      <Image source={el.icon} style={{ height: 45, width: 45 }} />
                    </View>
                  </Pressable>
                  <View style={{ alignItems: "center", paddingTop: 3 }}>
                    <Text style={{ fontWeight: "bold" }}>{el.title}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
  );
}


const stlyes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(200,200,200)',
  },
  body: {
    marginHorizontal: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    zIndex: 1,
    position: "absolute" ,
  },

  buttonMenuContainer: {
    width: Dimensions.get("screen").width - 60,
    height: (Dimensions.get("screen").height / 2) - 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor : "rgba(230, 230, 230, .6)",
    borderColor: "black",
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonBody: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: "black",
    height: 60,
    width: 60,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
})


export default Home;
