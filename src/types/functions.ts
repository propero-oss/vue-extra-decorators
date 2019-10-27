


/**
 * The type of a function.
 * Can be parameterized with a return type, argument types and a context (this) type.
 * @internal
 */
export type TFunction<RETURN = any, ARGS extends unknown[] = any[], THIS = any> = (this: THIS, ...args: ARGS) => RETURN;

/**
 * The type of a named function.
 * Can be parameterized with a return type, argument types and a context (this) type.
 * @internal
 */
export type NamedFunction<RETURN = any, ARGS extends unknown[] = any[], THIS = any> = TFunction<RETURN, ARGS, THIS> & { name: string };

/**
 * The type of a function without arguments.
 * Can be parameterized with a return type and a context (this) type.
 * @internal
 */
export type NoArgsFunction<RETURN = any> = TFunction<RETURN, []>;

/**
 * The type of a function with a single argument.
 * Can be parameterized with a return type, argument type and a context (this) type.
 * @internal
 */
export type SingleArgFunction<RETURN = any, ARG = any> = TFunction<RETURN, [ARG]>;


/**
 * The type of a function returning any.
 * Can be parameterized with argument types and a context (this) type.
 * @internal
 */
export type AnyFunction<ARGS extends unknown[] = any[], THIS = any> = TFunction<any, ARGS, THIS>;

/**
 * The type of a function returning undefined / void.
 * Can be parameterized with argument types and a context (this) type.
 * @internal
 */
export type VoidFunction<ARGS extends unknown[] = any[], THIS = any> = TFunction<any, ARGS, void>;


/**
 * Changes the return type of a given function type parameter
 * @internal
 */
export type FunctionReturning<RETURN = any, BASE extends TFunction = any>
  = TFunction<RETURN, Parameters<BASE>, ThisParameterType<BASE>>;

/**
 * Changes the context (this) type of a given function type parameter
 * @internal
 */
export type FunctionWithContext<THIS = any, BASE extends TFunction = any>
  = TFunction<ReturnType<BASE>, Parameters<BASE>, THIS>;

/**
 * Changes the parameter types of a given function type parameter
 * @internal
 */
export type FunctionWithParams<ARGS extends unknown[] = any[], BASE extends TFunction = any>
  = TFunction<ReturnType<BASE>, ARGS, ThisParameterType<BASE>>;
