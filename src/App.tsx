import debug from 'debug';
import {
    createNavigationContainerRef,
    NavigationContainer, NavigationContainerRef,
    ParamListBase,
    useNavigation
} from '@react-navigation/native';
import {Pages} from "./Pages";
import { StackNavigationProp } from '@react-navigation/stack';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {registerRootComponent} from "expo";
import {Appbar, DefaultTheme, Provider, Menu} from "react-native-paper";
import {useState} from "react";

const d = debug('terrene.server');

function App() {
    const Stack = createNativeStackNavigator();
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'tomato',
            accent: 'yellow',
        },
    };
    const navigation = createNavigationContainerRef<NavigationContainerRef<string>>()

    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return(
      <Provider theme={theme}>
          <Appbar.Header>
              <Appbar.Content title="Site Seeker" />
              <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
                  {Pages.map(page => {
                      function navigate() {
                          if(navigation.isReady()) {
                              navigation.navigate(page.route);
                              closeMenu();
                          }
                      }
                      return (
                          <Menu.Item key={page.route} onPress={navigate} title={page.name} />
                      );
                  })}
              </Menu>
          </Appbar.Header>
          <NavigationContainer ref={navigation}>
              <Stack.Navigator>
                  {Pages.map(page => {
                      return (
                          <Stack.Screen
                              key={page.route}
                              name={page.route}
                              component={page.Content}
                              options={{title: page.name}}
                          />
                      );
                  })}
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    )
}

export default registerRootComponent(App)