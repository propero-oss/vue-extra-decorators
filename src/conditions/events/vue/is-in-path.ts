import {Vue} from "vue/types/vue";



/**
 * Creates a predicate that checks if its first parameter (assumed event) has
 * one or more given vue refs in its {@link Event#composedPath | composedPath}.
 *
 * @param refs - The vue refs to check against
 * @returns A predicate that returns true if all refs are part of the events composedPath.
 *
 * @remarks
 * This function is meant to be a condition for {@link If} alike methods.
 * If you want to check if one of many matches use {@link isOneInPath} instead.
 *
 * Example:
 * ```TS
 *   @If(isInPath("drawer"))
 *   private doSomething(ev: Event) {
 *     // this.$refs["drawer"](.$el) is a member of ev.composedPath()
 *   }
 * ```
 *
 * {@link If} {@link IfNot} {@link or} {@link and} {@link not}
 * {@link isOneInPath}
 * @public
 */
export function isInPath(...refs: string[]) {
  return function(this: Vue, ev: Event) {
    if (!ev || !ev.composedPath) return false;
    if (!this.$refs) return refs.length === 0;
    const resolvedRefs = refs.map(ref => this.$refs[ref]) as any[];
    const path = ev.composedPath();
    return !resolvedRefs.find(ref => path.indexOf(ref.$el || ref) === -1);
  };
}
