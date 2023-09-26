import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Header.style";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../features/themeSlice";

const Header = ({ title }) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const navigation = useNavigation();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setSidebarActive(true);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  const toggleTheme = () => {
    dispatch(setTheme());
  };

  return (
    <View style={styles.nav}>
      <View style={styles.navBar}>
        {title === "Home" ? (
          <>
            <TouchableOpacity
              style={styles.sidebarIcon}
              onPress={toggleSidebar}
            >
              <Ionicons name="menu-sharp" size={30} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.logo}>{title}</Text>
            <TouchableOpacity style={styles.endIcon}>
              <Ionicons name="notifications" size={25} color="#FFF" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.endIcon}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={35} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.titleDetail}>{title}</Text>

            <View />
          </>
        )}
      </View>
      {sidebarActive && (
        <View style={styles.sidebar}>
          <View style={styles.sidebarHeader}>
            <Text style={styles.sidebarLogo}>My app</Text>
            <TouchableOpacity
              style={styles.sidebarCloseIcon}
              onPress={closeSidebar}
            >
              <Ionicons name="close" size={30} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.sidebarNavLinks}>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Ionicons name="person-outline" size={22} color="#FFF" />
              <Text style={styles.sidebarNavLinkText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Ionicons name="settings-outline" size={22} color="#FFF" />
              <Text style={styles.sidebarNavLinkText}>Configuración</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Ionicons name="document-text-outline" size={22} color="#FFF" />
              <Text style={styles.sidebarNavLinkText}>
                Términos y condiciones
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Ionicons name="cog-outline" size={22} color="#FFF" />
              <Text style={styles.sidebarNavLinkText}>Servicios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarNavLink}>
              <Ionicons name="mail-outline" size={22} color="#FFF" />
              <Text style={styles.sidebarNavLinkText}>Contacto</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidebarNavLink}
              onPress={toggleTheme}
            >
              {isDarkMode ? (
                <>
                  <Ionicons name="sunny-outline" size={24} color="yellow" />
                  <Text style={styles.sidebarNavLinkText}>Modo Claro</Text>
                </>
              ) : (
                <>
                  <Ionicons name="moon-outline" size={24} color="#ccc" />
                  <Text style={styles.sidebarNavLinkText}>Modo Oscuro</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
