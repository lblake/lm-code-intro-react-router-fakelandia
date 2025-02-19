export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'manchester',
] as const;

export type Misdemeanours = typeof MISDEMEANOURS[number];

export interface MisdemeanourRecord {
	citizenId: number;
	misdemeanour: Misdemeanours;
	date: string;
	misdemeanourDescription?: string;
	misdemeanourSubject?: string;
	misdemeanourDetail?: string;
}