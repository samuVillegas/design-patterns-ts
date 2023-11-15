import AirLogistics from "./air_logistics";
import { LogisticType } from "./logistic_type";
import Logistics from "./logistics";
import RoadLogistics from "./road_logistics";
import SeaLogistics from "./sea_logistics";
import dotenv from "dotenv";
dotenv.config();
const logisticType = process.env.LOGISTIC_TYPE;
console.log(logisticType);

let logistics: Logistics;

switch (logisticType) {
  case LogisticType.SEA:
    logistics = new SeaLogistics();
    break;
  case LogisticType.ROAD:
    logistics = new RoadLogistics();
    break;
  case LogisticType.AIR:
    logistics = new AirLogistics();
    break;
  default:
    throw new Error("Logistics not implemented");
}

logistics.planDelivery();