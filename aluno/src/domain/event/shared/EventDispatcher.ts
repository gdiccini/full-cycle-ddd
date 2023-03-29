import EventDispatcherInterface from './EventDispatcherInterface';
import EventHandlerInterface from './EventHandlerInterface';
import EventInterface from './EventInterface';

export default class EventDispatcher implements EventDispatcherInterface {
  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this.eventHandlers;
  }

  register(eventName: string, eventHandler: EventHandlerInterface): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHandler);
  }

  notify(event: EventInterface): void {}

  unregister(eventName: string, eventHandler: EventHandlerInterface): void {}

  unregisterAll(): void {}
}
