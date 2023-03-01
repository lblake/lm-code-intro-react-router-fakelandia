import getCitizenId from '../helpers/CitizenId';
import {
  Misdemeanours,
  MisdemeanourRecord,
  MISDEMEANOURS,
} from './MisdemeanourRecord';

export default async function generateMisdemeanours(
  number: number
): Promise<Array<MisdemeanourRecord>> {
  // pretend this is an API we're calling, wait 1.5s
  await sleep(1500);

  let amount = number ?? 50;

  const misdemeanours = [];

  for (let i = 0; i < amount; i++) {
    misdemeanours.push({
      citizenId: getCitizenId(),
      misdemeanour: choose<Misdemeanours>([...MISDEMEANOURS]),
      date: new Date().toLocaleDateString(),
    });
  }

  return misdemeanours;
}

function choose<T>(arr: Array<T>): T {
  if (!arr) arr = [];
  return arr[Math.floor(Math.random() * arr.length)];
}

const sleep = async (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
