import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import usuarioScreen from "./screens/usuario";
import recomendationScreen from "./screens/recomendation";
import { ImageBackground } from "react-native-web";

const Stack = createStackNavigator();

//Pantalla Home
function HomeScreen({ navigation }) {
	return (
		<View>
			<Icon
				name="user"
				size={15}
				color="black"
				style={styles.btnuser}
				onPress={() => navigation.navigate("login")}
			/>
			<Text style={styles.login}>What are you looking for?</Text>
			<Text style={styles.buscar} onPress={() => navigation.navigate("search")}>
				search
			</Text>
			<Text style={styles.subtexto}>Cant decide?</Text>
			<Text style={styles.subtexto2}>Let us help you.</Text>
			<Text
				style={styles.button2}
				onPress={() => navigation.navigate("recomendation")}
			>
				<Icon name="envelope" size={20} color="white" /> Do survey
			</Text>
			<Text
				style={styles.button}
				onPress={() => navigation.navigate("Details")}
			>
				<Icon
					style={styles.iconito}
					name="address-book"
					size={50}
					color="#DD4D26"
				/>{" "}
				Catalog
			</Text>
		</View>
	);
}
//pantalla search
function searchScreen({ navigation }) {
	return (
		<View>
			<View>
				<Icon
					name="user"
					size={15}
					color="black"
					style={styles.btnuser}
					onPress={() => navigation.navigate("login")}
				/>
			</View>
			<Text style={styles.buscar2}>
				<Icon name="search" size={15} color="black" /> Double click to edit{" "}
			</Text>
			<Text style={{ marginLeft: "10" }}>137 results found</Text>
		</View>
	);
}

//Pantalla Login
function LoginScreen({ navigation }) {
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
				source={require("./img/logo.png")}
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
					<Text
						onPress={() => navigation.navigate("usuario")}
						style={{ color: "white" }}
					>
						sign in
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ marginTop: "5%", width: "80%", fontSize: "15" }}>
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

//Pantalla Register
function RegisterScreen({ navigation }) {
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
				source={require("./img/logo.png")}
				style={styles.logo}
				resizeMode="stretch"
			></Image>
			<Text style={styles.signin}>Register</Text>
			<Text
				style={{ height: 30, width: "80%", marginTop: 5, fontWeight: "bold" }}
			>
				Username
			</Text>
			<TextInput
				placeholder={"Enter the user Name"}
				onChangeText={(value) => this.setState({})}
				style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
			/>
			<Text
				style={{ height: 30, width: "80%", marginTop: 5, fontWeight: "bold" }}
			>
				Email
			</Text>
			<TextInput
				placeholder={"Enter the email"}
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
					<Text
						onPress={() => navigation.navigate("usuario")}
						style={{ color: "white" }}
					>
						sign in
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ marginTop: "5%", width: "80%", fontSize: "15" }}>
				<Text style={{ color: "black" }}>
					already have an account?{" "}
					<Text
						onPress={() => navigation.navigate("login")}
						style={{ color: "red" }}
					>
						Login in!
					</Text>{" "}
				</Text>
			</View>
		</View>
	);
}

//Pantalla principal
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="register"
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="search"
					component={searchScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="recomendation"
					component={recomendationScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="usuario"
					component={usuarioScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "pink",
		alignItems: "center",
		justifyContent: "center",
	},
	login: {
		fontSize: 30,
		fontWeight: "bold",
		paddingLeft: 15,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
	},
	buscar: {
		fontSize: 20,
		fontWeight: "bold",
		color: "gray",
		margin: 20,
		padding: 15,
		backgroundColor: "#EBEBEB",
	},
	subtexto: {
		fontSize: 20,
		fontWeight: "bold",
		color: "gray",
		margin: 20,
		marginBottom: 0,
		marginTop: 30,
		marginLeft: 40,
	},
	subtexto2: {
		fontSize: 20,
		fontWeight: "bold",
		color: "gray",
		margin: 20,
		marginLeft: 40,
		marginTop: 0,
	},
	image: {
		height: 128,
		width: 128,
		borderRadius: 64,
	},
	button: {
		borderRadius: 8,
		borderColor: "#DD4D26",
		borderWidth: 2,
		padding: 20,
		paddingLeft: 10,
		margin: 60,
		marginTop: 30,
		textAlign: "center",
		fontSize: 25,
		color: "#DD4D26",
		fontWeight: "bold",
		alignItems: "center",
	},
	button2: {
		backgroundColor: "#26B4DD",
		textAlign: "center",
		padding: 15,
		borderRadius: 4,
		marginLeft: 25,
		marginRight: 25,
		fontSize: 15,
		color: "white",
		fontWeight: "bold",
		alignItems: "center",
	},
	iconito: {
		marginRight: 10,
		paddingRight: 10,
	},
	btnuser: {
		fontSize: 30,
		fontWeight: "bold",
		marginTop: 30,
		marginLeft: 5,
		paddingTop: 15,
		backgroundColor: "#D1D1D1",
		borderRadius: 50,
		width: 50,
		height: 50,
		alignItems: "center",
		textAlign: "center",
		marginBottom: 15,
	},
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
	buscar2: {
		fontSize: 15,
		fontWeight: "bold",
		color: "#898989",
		margin: 10,
		padding: 15,
		backgroundColor: "#FFF",
	},
});
