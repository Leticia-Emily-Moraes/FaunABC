import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "../../context/themeContext";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { TelefonesOffline, AjudasRapidasOffline} from "../../pages";

const Tab = createBottomTabNavigator();

function NavOffline() {
	const { theme } = useTheme();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					if (route.name === "Plus") {
						return (
							<MaterialCommunityIcons
								name="medical-bag"
								size={40}
								color={color}
							/>
						);
					} else if (route.name === "Call") {
						return (
							<Feather
								name="phone"
								size={40}
								color={color}
							/>
						);
					}
				},
				tabBarShowLabel: false,
				headerShown: false,
				tabBarActiveTintColor: theme.colors.iconSelectedNavColor,
				tabBarInactiveTintColor: theme.colors.iconNavColor,
				tabBarStyle: {
					backgroundColor: theme.colors.navColor,
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					height: 50,
				},
			})}
		>
			<Tab.Screen
				name="Plus"
				component={AjudasRapidasOffline}
			/>
			<Tab.Screen
				name="Call"
				component={TelefonesOffline}
			/>
		</Tab.Navigator>
	);
}

export default NavOffline;
