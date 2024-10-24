import React, { useState } from "react";
import { AccordionOffline, IconeFolha, Button } from "../../components";
import {
	Container,
	ContentViewAlertas,
	ContentViewAjudasRapidas,
	ContainerButtons,
	ContainerPrincipal,
} from "./style";
import "react-native-gesture-handler";

function AjudasRapidas() {
	const [isAlertas, setIsAlertas] = useState(true);

	return (
		<Container>
			<ContainerPrincipal>
				<ContainerButtons>
					<Button
						title="Alertas"
						onPress={() => setIsAlertas(true)}
						isActive={isAlertas === true}
					/>
					<Button
						title="Ajudas rápidas"
						onPress={() => setIsAlertas(false)}
						isActive={isAlertas === false}
					/>
				</ContainerButtons>
				<ContentViewAlertas isAlertas={isAlertas}></ContentViewAlertas>
				<ContentViewAjudasRapidas isAlertas={isAlertas}>
					<AccordionOffline
						title="Picadas"
						textAccordion="Lavar o local da picada com água e sabão; não fazer torniquete ou garrote, não furar, cortar, queimar, espremer ou fazer sucção no local da ferida, nem aplicar folhas, pó de café ou terra para não provocar infecções; não ingerir bebida alcoólica, querosene, ou fumo; levar a vítima imediatamente ao serviço de saúde mais próximo.(Para obter mais informações cadastre-se no nosso aplicativo)"
					/>
					<IconeFolha />
					<AccordionOffline
						title="Mordidas"
						textAccordion="Você deve cuidar da sua ferida e depois obter ajuda; lave a ferida com bastante água e sabão; não coloque álcool, iodo ou qualquer outro tipo de antisséptico na ferida; pare qualquer sangramento: pressione a ferida firmemente usando um pano limpo; procure um médico imediatamente. (Para obter mais informações cadastre-se no nosso aplicativo)"
					/>
					<IconeFolha />
					<AccordionOffline
						title="Bicadas"
						textAccordion="Você deve cuidar da sua ferida e depois obter ajuda; lave a ferida com bastante água e sabão; não coloque álcool, iodo ou qualquer outro tipo de antisséptico na ferida; procure um médico imediatamente. ATENÇÃO: DEJETOS DE PASSÁROS TAMBÉM PODEM CAUSAR DOENÇAS, FIQUE ATENTO NALIMPEZA DE LUGARES EXTERNOS ONDE ELES PODEM TER ACESSO. (Para obter mais informações cadastre-se no nosso aplicativo)"
					/>
					<IconeFolha />
					<AccordionOffline
						title="Precauções"
						textAccordion="Em caso de contato acidental, mordedura, lambedura ou arranhadura por mamíferos, lave o local atingido com água corrente e sabão, e procure imediatamente assistência médica. Se tiver acidentes com animais peçonhentos, não realize procedimentos caseiros e procure imediatamente o serviço de saúde público local. Durante o socorro, mova-se o mínimo possível."
					/>
				</ContentViewAjudasRapidas>
			</ContainerPrincipal>
		</Container>
	);
}

export default AjudasRapidas;
