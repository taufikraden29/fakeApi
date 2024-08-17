// Eslist-Disable

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "api_key=cb4032777da090f4cab2c829f564ff5f";

export const getPopularMovies = async () => {
	const response = await axios.get(`${apiUrl}movie/popular?${apiKey}`);
	return response.data.results;
};
const request = () => {
	return (
		<View>
			<Text>request</Text>
		</View>
	);
};

export default request;

const styles = StyleSheet.create({});
