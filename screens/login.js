import React, { Component } from "react";
import {
	Text,
	View,
	StyleSheet,
	Dimensions,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";

export class login extends Component {
	render() {
		return (
			<View
				style={{
					width: "100%",
					height: "100%",
					justifyContent: "center",
					alignSelf: "center",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				<Image
					source={require("../img/logo.png")}
					style={styles.logo}
					resizeMode="stretch"
				></Image>
				<Text style={styles.signin}>Sign In</Text>
				<Text
					style={{ height: 30, width: "80%", marginTop: 5, fontWeight: "bold" }}
				>
					Email
				</Text>
				<TextInput
					placeholder={"Enter the user Name"}
					onChangeText={(value) => this.setState({})}
					style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
				/>

				<Text
					style={{ height: 30, width: "80%", marginTop: 5, fontWeight: "bold" }}
				>
					Password
				</Text>
				<TextInput
					placeholder={"Enter the password"}
					onChangeText={(value) => this.setState({})}
					style={{
						height: 42,
						width: "80%",
						borderBottomWidth: 1,
					}}
				/>
				<View style={{ marginTop: "10%", width: "80%" }}>
					<TouchableOpacity
						style={{
							borderWidth: 1,
							height: 42,
							width: "80%",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: "black",
							alignSelf: "center",
							textAlign: "center",
						}}
					>
						<Text style={{ color: "white" }}>sign in</Text>
					</TouchableOpacity>
				</View>
				<View style={{ marginTop: "5%", width: "80%" }}>
					<Text style={{ color: "black" }}>
						Don´t have an account?{" "}
						<Text
							onPress={() => navigation.navigate("register")}
							style={{ color: "red" }}
						>
							Register here!
						</Text>{" "}
					</Text>
				</View>
			</View>
		);
	}
}

export default login;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
	logo: {
		marginTop: 5,
		marginBottom: 5,
		padding: 20,
		width: height_logo,
		height: height_logo,
	},
	signin: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "left",
	},
});
