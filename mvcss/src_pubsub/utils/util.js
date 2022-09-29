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

export function ListUnshift(list, item) {
	return list.unshift(item);
}

export function ListUpdate(oldList) {
	const newList = oldList.filter((item) => item.complated !== true)
	oldList.splice(0,oldList.length);
	newList.forEach((item) =>oldList.push(item));
}
