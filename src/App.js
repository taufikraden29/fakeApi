import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import Home from "./screens/Home";

const App = () => {
	return (
		<View style={styles.container}>
			<Home />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
