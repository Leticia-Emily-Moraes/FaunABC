import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "../../context/themeContext";
import { Feather, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../../pages/home";

const Tab = createBottomTabNavigator();

function NavPrincipal() {
	const { theme } = useTheme();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					if (route.name === "Home") {
						return (
							<Octicons
								name="home"
								size={40}
								color={color}
							/>
						);
					} else if (route.name === "Alert") {
						return (
							<Feather
								name="alert-triangle"
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
					} else if (route.name === "Location") {
						return (
							<Octicons
								name="location"
								size={38}
								color={color}
							/>
						);
					} else if (route.name === "Email") {
						return (
							<MaterialCommunityIcons
								name="email-outline"
								size={42}
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
				name="Home"
				component={Home}
			/>
			<Tab.Screen
				name="Alert"
				component={() => null}
			/>
			<Tab.Screen
				name="Call"
				component={() => null}
			/>
			<Tab.Screen
				name="Location"
				component={() => null}
			/>
			<Tab.Screen
				name="Email"
				component={() => null}
			/>
		</Tab.Navigator>
	);
}

export default NavPrincipal;
