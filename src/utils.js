import Papa from "papaparse";
import { getData } from "./data.js";

function getUsers() {
  const data = getData();
  return Papa.parse(data, { header: true }).data;
}

export { getUsers };
