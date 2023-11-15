import Logistics from "./logistics";
import Truck from "./truck";
import Transport from "./transport";

export default class RoadLogistics extends Logistics {
  public createTransport(): Transport {
    return new Truck();
  }
}
