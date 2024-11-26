import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Container, ContentMapa, ContainerPrincipal, StyledMap } from "./style";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { verAlertas } from "../../service/api/apiVerAlertas";
import { VerEmergencias } from "../../service/api/apiVerEmergencias";
import getCoordinates from "../../service/trazerCoordenadas";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Mapa = () => {
	const [location, setLocation] = useState(null);
	const [locationsAlertas, setLocationsAlertas] = useState([]);
	const [locationsEmergencias, setLocationsEmergencias] = useState([]);
	const [error, setError] = useState(null);

	const getUserLocation = async () => {
		try {
			const { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				alert("Permissão negada", "É necessário permitir acesso à localização.");
				return;
			}

			const userLocation = await Location.getCurrentPositionAsync({
				accuracy: Location.Accuracy.High,
			});
			setLocation({
				latitude: userLocation.coords.latitude,
				longitude: userLocation.coords.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			});
		} catch (error) {
			console.error("Erro ao obter localização do usuário: ", error);
		}
	};

	const fetchAlertLocations = async () => {
		try {
			const response = await verAlertas();
			const alerts = response;

			const alertLocations = await Promise.all(
				alerts.map(async (alert) => {
					const address = `${alert.Logradouro}, ${alert.Bairro}, ${alert.Cidade}`;
					try {
						const coordinates = await getCoordinates(address);
						return {
							id: alert.IdAlerta,
							title: alert.Titulo,
							latitude: coordinates.latitude,
							longitude: coordinates.longitude,
						};
					} catch (e) {
						console.error(`Erro ao buscar coordenadas para ${address}:`, e);
						return null;
					}
				})
			);

			const validLocations = alertLocations.filter((loc) => loc);
			setLocationsAlertas(validLocations);
			setError(null);
		} catch (error) {
			setError("Erro ao carregar os alertas.");
		}
	};

	const fetchEmergencias = async () => {
		try {
			const response = await VerEmergencias();
			const emergencias = response;

			const emergenciasLocation = await Promise.all(
				emergencias.map(async (emergencia) => {
					const address = `${emergencia.logradouro}, ${emergencia.bairro}, ${emergencia.cidade}`;
					try {
						const coordinates = await getCoordinates(address);
						return {
							id: emergencia.id,
							title: emergencia.orgao,
							latitude: coordinates.latitude,
							longitude: coordinates.longitude,
						};
					} catch (e) {
						console.error(`Erro ao buscar coordenadas para ${address}:`, e);
						return null;
					}
				})
			);

			const validLocations = emergenciasLocation.filter((loc) => loc);
			setLocationsEmergencias(validLocations);
			setError(null);
		} catch (error) {
			setError("Erro ao carregar os alertas.");
		}
	};

	useEffect(() => {
		getUserLocation();
		fetchEmergencias();
		fetchAlertLocations();
	}, []);

	useFocusEffect(
		useCallback(() => {
			fetchAlertLocations();
			fetchEmergencias();
		}, [])
	);

	return (
		<Container>
			<ContainerPrincipal>
				<ContentMapa>
					{location && (
						<StyledMap
						initialRegion={location}
						showsUserLocation={true}
						showsMyLocationButton={true}
						zoomEnabled={true}
						showsPointsOfInterest={false}
						showsBuildings={false}
						>
							{locationsAlertas.length > 0 &&
								locationsAlertas.map((loc) => (
									<Marker
										key={loc.id}
										coordinate={{
											latitude: loc.latitude,
											longitude: loc.longitude,
										}}
										title={loc.title}
									>
										<MaterialCommunityIcons
											name="map-marker-alert"
											size={40}
											color="#008DC4"
										/>
									</Marker>
								))}
								{locationsEmergencias.length > 0 &&
								locationsEmergencias.map((loc) => (
									<Marker
										key={loc.id}
										coordinate={{
											latitude: loc.latitude,
											longitude: loc.longitude,
										}}
										title={loc.title}
									>
										<MaterialCommunityIcons name="map-marker-star" size={40} color="#F5BD63" />
									</Marker>
								))}
						</StyledMap>
					)}
				</ContentMapa>
			</ContainerPrincipal>
		</Container>
	);
};

export default Mapa;
