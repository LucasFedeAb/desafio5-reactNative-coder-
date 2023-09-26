import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./CategoryDetail.style";
import gifsData from "../../../../../data/gifsData";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const CategoryDetail = ({ category }) => {
  const filteredItemsByCategory = gifsData.filter(
    (item) => item.category === category
  );
  const navigation = useNavigation();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const handleAllGifsByTitle = (title) => {
    navigation.navigate("AllGifsTitle", {
      gifs: filteredItemsByCategory,
      category,
      title,
    });
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <View
        style={[
          styles.containerCategory,
          { backgroundColor: currentTheme.backgroundColor },
        ]}
      >
        <Image
          source={{ uri: filteredItemsByCategory[0]?.imageCategory }}
          style={[
            styles.imageCategory,
            { backgroundColor: currentTheme.backgroundColor },
          ]}
        />
      </View>

      <ScrollView style={styles.scrollContainer}>
        {filteredItemsByCategory.map((item) => (
          <View style={styles.containerGifsCharacter} key={item.id}>
            <View style={styles.headerListGifs}>
              <Text style={[styles.title, { color: currentTheme.textColor }]}>
                {item.title}
              </Text>
              <TouchableOpacity
                onPress={() => handleAllGifsByTitle(item.title)}
              >
                <Text
                  style={[styles.label, { color: currentTheme.textColor }]}
                >{`Ver más`}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.gifsContainer}>
              {item.gifs.slice(0, 3).map((gif, index) => (
                <View style={styles.gif}>
                  <Image
                    source={{ uri: gif }}
                    style={styles.imageGif}
                    key={index}
                  />
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryDetail;
