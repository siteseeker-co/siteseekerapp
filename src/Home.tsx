import debug from 'debug';
import {StyleSheet, Text, View} from 'react-native';

const d = debug('terrene.server');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>Welcome to Site Seeker</Text>
		</View>
	);
}
