import React, { useState } from "react";
import {
	ContainerRButton,
	RadioButton,
	RadioButtonText,
} from "../radioButton/style";
import { MaterialIcons } from "@expo/vector-icons";

const Radio = ({ options, valorCheckado, onChange }) => {
	return (
		<ContainerRButton>
			{options.map((option) => {
				let active = valorCheckado == option.value;
				return (
					<RadioButton
						key={option.value}
						onPress={() => {
							onChange(option.value);
						}}
						keyy={option.value}
					>
						<MaterialIcons
							name={
								active
									? "radio-button-checked"
									: "radio-button-unchecked"
							}
							size={25}
							color={active ? "#F5BD63" : "#FFF"}
						></MaterialIcons>
						<RadioButtonText>{option.label}</RadioButtonText>
					</RadioButton>
				);
			})}
		</ContainerRButton>
	);
};

export default Radio;
/*

*/
