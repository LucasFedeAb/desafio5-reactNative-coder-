import { TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./SearchInput.style";
import { useSelector } from "react-redux";

const SearchInput = ({ onSearch, handleSearch }) => {
  const [value, setValue] = useState("");
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const clearInput = () => {
    setValue("");
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.searchField}
        placeholder="Search..."
        placeholderTextColor="#010718"
      />

      <TouchableOpacity style={styles.searchIcon}>
        <Ionicons
          name={"search-outline"}
          size={22}
          color={currentTheme.color}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.closeIcon} onPress={clearInput}>
        <Ionicons name="close" size={25} color={currentTheme.color} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
