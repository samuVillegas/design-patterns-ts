import AirPlane from "./airplane";
import Logistics from "./logistics";
import Transport from "./transport";

export default class AirLogistics extends Logistics {
    public createTransport(): Transport {
        return new AirPlane();
    }
}