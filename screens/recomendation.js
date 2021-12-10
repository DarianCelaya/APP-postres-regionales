import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
	Text,
	View,
	StyleSheet,
	Dimensions,
	Image,
	Platform,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function recomendationScreen({ navigation }) {
	return (
		<View style={styles.container}>
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
			<View>
				{/* <Text style={styles.text_footer}>Email</Text> */}
				{/* <View style={styles.action}> */}
				{/* 	<Icon name="user" color="#05375a" size={20} /> */}
				<TextInput placeholder="Enter the user Name" />
			</View>
		</View>
	);
}

export default recomendationScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.07;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "pink",
	},
});
