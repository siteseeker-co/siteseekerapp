import debug from 'debug';
import {StyleSheet, Text, View} from 'react-native';
import {server} from "../../core/server";
import {useEffect, useState} from "react";

const d = debug('terrene.server');

export function Content() {
	const [users, setUsers] = useState<[]>();
	useEffect(() => {
		server
			.fetch('users/get-top-users', {}, undefined, 'POST').then((response) => {
			setUsers(response.data);
		}).catch(error => console.log(error));
	});
	return (
		<View>
			{users?.map(user => <Text key={user.id}>{JSON.stringify(user)}</Text>)}
			<Text>Welcome to Site Seeker</Text>
		</View>
	);
}
