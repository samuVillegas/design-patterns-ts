import Transport from './transport';

export default class Truck implements Transport {
    deliver(): string {
        return "Delivering in truck"
    }
}