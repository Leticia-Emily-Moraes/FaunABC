import axios from "axios";

async function getCoordinates(address) {
	try {
		const response = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json`,
			{
				params: {
					address: address,
					key: "AIzaSyBR0uxL_UblXdJVYujjPPVKYde93HD4la8", 
				},
			},
		);

		if (response.data.results.length > 0) {
			const { lat, lng } = response.data.results[0].geometry.location;
			return { latitude: lat, longitude: lng };
		} else {
			throw new Error("Nenhum resultado encontrado para o endereço.");
		}
	} catch (error) {
		console.error(`Erro ao buscar coordenadas para ${address}:`, error);
		throw error;
	}
}

export default getCoordinates;
