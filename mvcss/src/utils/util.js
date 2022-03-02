export function ListDelete(list, propertie, key) {
	return list.splice(
		list.indexOf(
			list.find((item) => {
				return item[`${propertie}`] == key;
			})
		),
		1
	);
}
