import Transport from "./transport";

export default class AirPlane implements Transport {
    deliver(): string {
        return "Delivering in airplane";
    }
}