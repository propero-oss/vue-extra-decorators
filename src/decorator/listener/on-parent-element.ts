import { createListenerDecorator } from "../../vue";

/**
 * Registers the decorated method as a dom event listener for the parent vue component.
 * if more than one event is given, it will listen for multiple events
 * All event parameters are passed as arguments to the decorated method.
 *
 * @param events - The events to listen for
 *
 * @remarks
 * This decorator doesn't work for dom events, only for dom events.
 * If you want to attach to vue events, use {@link OnParent} instead.
 *
 * @example
 * ```TS
 *   @OnParentElement("click")
 *   private onToggleFade(ev: MouseEvent) {
 *     // Called when this.$parent.$el is clicked
 *   }
 * ```
 *
 * {@Link On} {@Link OnElement} {@Link OnDocument} {@Link OnWindow} {@Link OnParent} {@Link OnParentElement}
 * @public
 */
export function OnParentElement(...events: string[]) {
  return createListenerDecorator(events, el => el.$parent.$el, true, ["mouted", "updated"], ["destroyed", "beforeUpdate"]);
}
