import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Alert,
	ToastAndroid,
} from "react-native";
import Slider from "@react-native-community/slider";
import Clipboard from "@react-native-clipboard/clipboard";

export default function App() {
	const [value, setValue] = useState(1);

	function generate() {
		var password = "";
		for (let i = 0; i < value; i++) {
			var random = randomizer();
			password = password + random.toString();
		}
		Alert.alert("Senha gerada!", password, [
			{
				text: "Copiar",
				onPress: () => {
					Clipboard.setString(password);
					ToastAndroid.show("Copiado!", 2000);
				},
			},
			{
				text: "Ok",
				onPress: () => {},
			},
		]);
	}

	function randomizer() {
		return Math.floor(Math.random() * 9);
	}

	return (
		<View style={{ flex: 1 }}>
			<View style={Styles.HeaderView}>
				<Text style={Styles.Header}>SecuriSenha</Text>
				<Text style={{ marginTop: 10 }}></Text>
				<Text style={Styles.Subheader}>
					Gerador de senhas aleatórias
				</Text>
				<Text style={Styles.Subheader}>
					Selecione o numero de caracteres e clique em Gerar
				</Text>
			</View>
			<View style={Styles.Container}>
				<Slider
					style={Styles.Slider}
					step={1}
					minimumValue={1}
					maximumValue={15}
					onValueChange={(newValue) => setValue(newValue)}
				/>
				<Text>Número de caracteres: {value}</Text>
				<Pressable style={Styles.Button} onPress={() => generate()}>
					<Text style={Styles.ButtonText}>Gerar!</Text>
				</Pressable>
			</View>
		</View>
	);
}

const Styles = StyleSheet.create({
	HeaderView: {
		paddingTop: 20,
	},
	Header: {
		textAlign: "center",
		fontSize: 30,
	},
	Subheader: {
		textAlign: "center",
		fontSize: 13,
		color: "#939197",
	},
	Container: {
		justifyContent: "center",
		flex: 1,
		alignItems: "center",
	},
	Slider: {
		width: 250,
		height: 30,
	},
	Button: {
		marginTop: 30,
		backgroundColor: "#0957ff",
		borderRadius: 5,
		padding: 10,
	},
	ButtonText: {
		color: "white",
		fontSize: 20,
	},
});
