export type RootObject = {
	list: RootObjectList[];
	pageTotal: number;
}
export type RootObjectList = {
	id: number;
	name: string;
	money: number;
	address: string;
	state: string;
	date: string;
	thumb: string;
}
