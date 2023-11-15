import Transport from './transport';

export default abstract class Logistics {
    public abstract createTransport(): Transport;
    public planDelivery(){
        const transport = this.createTransport();
        const message = transport.deliver();
        console.log(message);
    }
}