import {Vue} from "vue/types/vue";



export function isOneInPath(...refs: string[]) {
  return function(this: Vue, ev: Event) {
    if (!ev || !ev.composedPath) return false;
    if (!this.$refs) return refs.length === 0;
    const resolvedRefs = refs.map(ref => this.$refs[ref]) as any[];
    const path = ev.composedPath();
    return !!resolvedRefs.find(ref => path.indexOf(ref.$el || ref) !== -1);
  }
}
