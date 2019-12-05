import { GraphQLFieldResolver } from 'graphql';

export type ComposableResolver<TSource, TContext> =
    (fn: GraphQLFieldResolver<TSource, TContext>) => GraphQLFieldResolver<TSource, TContext>;

// '...funcs' transforma os parametros em um array
export function compose<TSource, TContext> (
    ...funcs: ComposableResolver<TSource, TContext>[]
): ComposableResolver<TSource, TContext> {

  if (funcs.length === 0) {
    // if no functions return the identity
    return o => {
      return o;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  const last = funcs[funcs.length - 1];
  return (f: GraphQLFieldResolver<TSource, TContext>):GraphQLFieldResolver<TSource, TContext> => {
    let result = last(f);
    for (let index = funcs.length - 2; index >= 0; index -= 1) {
      const fn = funcs[index];
      result = fn(result);
    }
    return result;
  };
}
