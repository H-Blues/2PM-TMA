import ages from "./ages.json";

// Define the type for the ages object
type AgesType = {
  [key: string]: number;
};

// Assert the type of ages
const typedAges: AgesType = ages as AgesType;

const ids: string[] = Object.keys(typedAges);
const nids: number[] = ids.map((e) => parseInt(e));

const minId: number = nids[0];
const maxId: number = nids[nids.length - 1];

const getDate = (id: number): [number, Date] => {
  if (id < minId) {
    const firstDate = typedAges[ids[0]];
    return [-1, new Date(firstDate)];
  } else if (id > maxId) {
    const lastDate = typedAges[ids[ids.length - 1]];
    return [1, new Date(lastDate)];
  } else {
    let lid = nids[0];
    for (let i = 0; i < ids.length; i++) {
      if (id <= nids[i]) {
        // calculate middle date
        const uid = nids[i];
        const lage = typedAges[lid.toString()];
        const uage = typedAges[uid.toString()];

        if (lage !== undefined && uage !== undefined) {
          const idratio = (id - lid) / (uid - lid);
          const midDate = Math.floor(idratio * (uage - lage) + lage);
          return [0, new Date(midDate)];
        }
      } else {
        lid = nids[i];
      }
    }
  }
  // This should never happen, but TypeScript requires a return statement here
  throw new Error("Unexpected error in getDate function");
};

export const getAge = (id: number): [string, string] => {
  const d = getDate(id);
  return [
    d[0] < 0 ? "older_than" : d[0] > 0 ? "newer_than" : "aprox",
    `${d[1].getUTCMonth() + 1}/${d[1].getUTCFullYear()}`,
  ];
};

export default getAge;
