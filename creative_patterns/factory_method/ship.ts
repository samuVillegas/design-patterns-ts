import Transport from "./transport";

export default class Ship implements Transport {
  deliver(): string {
    return "Delivering in ship";
  }
}
