export type TFunction<RETURN = any, ARGS extends unknown[] = any[], THIS = any> = (this: THIS, ...args: ARGS) => RETURN;
export type NamedFunction<RETURN = any, ARGS extends unknown[] = any[], THIS = any> = TFunction<RETURN, ARGS, THIS> & { name: string };
export type NoArgsFunction<RETURN = any> = TFunction<RETURN, []>;
export type SingleArgFunction<RETURN = any, ARG = any> = TFunction<RETURN, [ARG]>;


export type AnyFunction<ARGS extends unknown[] = any[], THIS = any> = TFunction<any, ARGS, THIS>;
export type VoidFunction<ARGS extends unknown[] = any[], THIS = any> = TFunction<any, ARGS, void>;

export type FunctionReturning<RETURN = any, BASE extends TFunction = any>
  = TFunction<RETURN, Parameters<BASE>, ThisParameterType<BASE>>;
export type FunctionWithContext<THIS = any, BASE extends TFunction = any>
  = TFunction<ReturnType<BASE>, Parameters<BASE>, THIS>;
export type FunctionWithParams<ARGS extends unknown[] = any[], BASE extends TFunction = any>
  = TFunction<ReturnType<BASE>, ARGS, ThisParameterType<BASE>>;
