import Component_ from "vue-class-component";

export * from "@/types";
export * from "@/conditions";
export * from "@/decorator";
export * from "@/descriptor";
export * from "@/function";
export * from "@/util";
export * from "@/vue";
export * from "vue-class-component";
// Oh, vue-class-component, why must you use default exports?
export const Component: typeof import("vue-class-component").default = Component_;
