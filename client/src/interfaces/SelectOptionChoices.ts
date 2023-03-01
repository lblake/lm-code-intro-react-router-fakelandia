import { Misdemeanours } from "../data/MisdemeanourRecord";

export interface NameValueStringPair {
  name: string;
  value: Misdemeanours | '' | 'lift';
}