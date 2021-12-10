import React, { Component } from "react";
import {
	Text,
	View,
	StyleSheet,
	Dimensions,
	Image,
	Platform,
} from "react-native";

function LogoScreen({ navigation }) {
	return (
		<View style={styles.container} onPress={() => navigation.navigate("Home")}>
			<View style={styles.header}>
				<Text style={styles.logotext}>
					U-D
					<Image
						source={require("../img/logo.png")}
						style={styles.logo}
						resizeMode="stretch"
					></Image>
					LCE
				</Text>
			</View>
		</View>
	);
}

export default LogoScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.07;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "pink",
	},
	footer: {
		flex: 1,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 130,
		paddingHorizontal: 150,
	},
	logo: {
		marginTop: 50,
		padding: 20,
		width: height_logo,
		height: height_logo,
	},
	logotext: {
		fontSize: 40,
		fontWeight: "bold",
		color: "white",
		margin: 55,
		paddingLeft: 15,
		marginTop: 250,
		paddingTop: 25,
	},
});
