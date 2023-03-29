import EventHandlerInterface from '../../shared/EventHandlerInterface';
import ProductCreatedEvent from '../productCreatedEvent';

export default class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
  handle(event: ProductCreatedEvent): void {
    console.log('Sending email to......');
  }
}
