import Logistics from './logistics';
import Ship from './ship';
import Transport from './transport';

export default class SeaLogistics extends Logistics {
    public createTransport(): Transport {
        return new Ship();
    }
}