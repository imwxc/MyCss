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

export function ListUnshift(list, item){
	return list.unshift(item);
}
