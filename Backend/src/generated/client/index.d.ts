
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BusinessProfile
 * 
 */
export type BusinessProfile = $Result.DefaultSelection<Prisma.$BusinessProfilePayload>
/**
 * Model Analysis
 * 
 */
export type Analysis = $Result.DefaultSelection<Prisma.$AnalysisPayload>
/**
 * Model KnowledgeBase
 * 
 */
export type KnowledgeBase = $Result.DefaultSelection<Prisma.$KnowledgeBasePayload>
/**
 * Model DocumentSnippet
 * 
 */
export type DocumentSnippet = $Result.DefaultSelection<Prisma.$DocumentSnippetPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessProfile`: Exposes CRUD operations for the **BusinessProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessProfiles
    * const businessProfiles = await prisma.businessProfile.findMany()
    * ```
    */
  get businessProfile(): Prisma.BusinessProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysis`: Exposes CRUD operations for the **Analysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analyses
    * const analyses = await prisma.analysis.findMany()
    * ```
    */
  get analysis(): Prisma.AnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledgeBase`: Exposes CRUD operations for the **KnowledgeBase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeBases
    * const knowledgeBases = await prisma.knowledgeBase.findMany()
    * ```
    */
  get knowledgeBase(): Prisma.KnowledgeBaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentSnippet`: Exposes CRUD operations for the **DocumentSnippet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentSnippets
    * const documentSnippets = await prisma.documentSnippet.findMany()
    * ```
    */
  get documentSnippet(): Prisma.DocumentSnippetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    BusinessProfile: 'BusinessProfile',
    Analysis: 'Analysis',
    KnowledgeBase: 'KnowledgeBase',
    DocumentSnippet: 'DocumentSnippet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "businessProfile" | "analysis" | "knowledgeBase" | "documentSnippet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BusinessProfile: {
        payload: Prisma.$BusinessProfilePayload<ExtArgs>
        fields: Prisma.BusinessProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          findFirst: {
            args: Prisma.BusinessProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          findMany: {
            args: Prisma.BusinessProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>[]
          }
          create: {
            args: Prisma.BusinessProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          createMany: {
            args: Prisma.BusinessProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>[]
          }
          delete: {
            args: Prisma.BusinessProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          update: {
            args: Prisma.BusinessProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          deleteMany: {
            args: Prisma.BusinessProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>[]
          }
          upsert: {
            args: Prisma.BusinessProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          aggregate: {
            args: Prisma.BusinessProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessProfile>
          }
          groupBy: {
            args: Prisma.BusinessProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessProfileCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessProfileCountAggregateOutputType> | number
          }
        }
      }
      Analysis: {
        payload: Prisma.$AnalysisPayload<ExtArgs>
        fields: Prisma.AnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          findFirst: {
            args: Prisma.AnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          findMany: {
            args: Prisma.AnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          create: {
            args: Prisma.AnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          createMany: {
            args: Prisma.AnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          delete: {
            args: Prisma.AnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          update: {
            args: Prisma.AnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          aggregate: {
            args: Prisma.AnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysis>
          }
          groupBy: {
            args: Prisma.AnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisCountAggregateOutputType> | number
          }
        }
      }
      KnowledgeBase: {
        payload: Prisma.$KnowledgeBasePayload<ExtArgs>
        fields: Prisma.KnowledgeBaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeBaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeBaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          findFirst: {
            args: Prisma.KnowledgeBaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeBaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          findMany: {
            args: Prisma.KnowledgeBaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>[]
          }
          create: {
            args: Prisma.KnowledgeBaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          createMany: {
            args: Prisma.KnowledgeBaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeBaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>[]
          }
          delete: {
            args: Prisma.KnowledgeBaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          update: {
            args: Prisma.KnowledgeBaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeBaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeBaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeBaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeBaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeBasePayload>
          }
          aggregate: {
            args: Prisma.KnowledgeBaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeBase>
          }
          groupBy: {
            args: Prisma.KnowledgeBaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeBaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeBaseCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeBaseCountAggregateOutputType> | number
          }
        }
      }
      DocumentSnippet: {
        payload: Prisma.$DocumentSnippetPayload<ExtArgs>
        fields: Prisma.DocumentSnippetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentSnippetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentSnippetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload>
          }
          findFirst: {
            args: Prisma.DocumentSnippetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentSnippetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload>
          }
          findMany: {
            args: Prisma.DocumentSnippetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload>[]
          }
          create: {
            args: Prisma.DocumentSnippetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload>
          }
          createMany: {
            args: Prisma.DocumentSnippetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentSnippetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload>[]
          }
          delete: {
            args: Prisma.DocumentSnippetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload>
          }
          update: {
            args: Prisma.DocumentSnippetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload>
          }
          deleteMany: {
            args: Prisma.DocumentSnippetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentSnippetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentSnippetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload>[]
          }
          upsert: {
            args: Prisma.DocumentSnippetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSnippetPayload>
          }
          aggregate: {
            args: Prisma.DocumentSnippetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentSnippet>
          }
          groupBy: {
            args: Prisma.DocumentSnippetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentSnippetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentSnippetCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentSnippetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    businessProfile?: BusinessProfileOmit
    analysis?: AnalysisOmit
    knowledgeBase?: KnowledgeBaseOmit
    documentSnippet?: DocumentSnippetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    analyses: number
    knowledgeBases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | UserCountOutputTypeCountAnalysesArgs
    knowledgeBases?: boolean | UserCountOutputTypeCountKnowledgeBasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKnowledgeBasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeBaseWhereInput
  }


  /**
   * Count Type KnowledgeBaseCountOutputType
   */

  export type KnowledgeBaseCountOutputType = {
    snippets: number
  }

  export type KnowledgeBaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snippets?: boolean | KnowledgeBaseCountOutputTypeCountSnippetsArgs
  }

  // Custom InputTypes
  /**
   * KnowledgeBaseCountOutputType without action
   */
  export type KnowledgeBaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBaseCountOutputType
     */
    select?: KnowledgeBaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KnowledgeBaseCountOutputType without action
   */
  export type KnowledgeBaseCountOutputTypeCountSnippetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentSnippetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    analyses?: boolean | User$analysesArgs<ExtArgs>
    businessProfile?: boolean | User$businessProfileArgs<ExtArgs>
    knowledgeBases?: boolean | User$knowledgeBasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | User$analysesArgs<ExtArgs>
    businessProfile?: boolean | User$businessProfileArgs<ExtArgs>
    knowledgeBases?: boolean | User$knowledgeBasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      analyses: Prisma.$AnalysisPayload<ExtArgs>[]
      businessProfile: Prisma.$BusinessProfilePayload<ExtArgs> | null
      knowledgeBases: Prisma.$KnowledgeBasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyses<T extends User$analysesArgs<ExtArgs> = {}>(args?: Subset<T, User$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    businessProfile<T extends User$businessProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$businessProfileArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    knowledgeBases<T extends User$knowledgeBasesArgs<ExtArgs> = {}>(args?: Subset<T, User$knowledgeBasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.analyses
   */
  export type User$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    cursor?: AnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * User.businessProfile
   */
  export type User$businessProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    where?: BusinessProfileWhereInput
  }

  /**
   * User.knowledgeBases
   */
  export type User$knowledgeBasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    where?: KnowledgeBaseWhereInput
    orderBy?: KnowledgeBaseOrderByWithRelationInput | KnowledgeBaseOrderByWithRelationInput[]
    cursor?: KnowledgeBaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KnowledgeBaseScalarFieldEnum | KnowledgeBaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BusinessProfile
   */

  export type AggregateBusinessProfile = {
    _count: BusinessProfileCountAggregateOutputType | null
    _min: BusinessProfileMinAggregateOutputType | null
    _max: BusinessProfileMaxAggregateOutputType | null
  }

  export type BusinessProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    companyDescription: string | null
    supportTone: string | null
    refundPolicy: string | null
    deliveryPolicy: string | null
    businessHours: string | null
    faq: string | null
    escalationInstructions: string | null
    brandVoiceExamples: string | null
    restrictedPhrases: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    companyDescription: string | null
    supportTone: string | null
    refundPolicy: string | null
    deliveryPolicy: string | null
    businessHours: string | null
    faq: string | null
    escalationInstructions: string | null
    brandVoiceExamples: string | null
    restrictedPhrases: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    companyDescription: number
    supportTone: number
    refundPolicy: number
    deliveryPolicy: number
    businessHours: number
    faq: number
    escalationInstructions: number
    brandVoiceExamples: number
    restrictedPhrases: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    companyDescription?: true
    supportTone?: true
    refundPolicy?: true
    deliveryPolicy?: true
    businessHours?: true
    faq?: true
    escalationInstructions?: true
    brandVoiceExamples?: true
    restrictedPhrases?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    companyDescription?: true
    supportTone?: true
    refundPolicy?: true
    deliveryPolicy?: true
    businessHours?: true
    faq?: true
    escalationInstructions?: true
    brandVoiceExamples?: true
    restrictedPhrases?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    companyDescription?: true
    supportTone?: true
    refundPolicy?: true
    deliveryPolicy?: true
    businessHours?: true
    faq?: true
    escalationInstructions?: true
    brandVoiceExamples?: true
    restrictedPhrases?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessProfile to aggregate.
     */
    where?: BusinessProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessProfiles to fetch.
     */
    orderBy?: BusinessProfileOrderByWithRelationInput | BusinessProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessProfiles
    **/
    _count?: true | BusinessProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessProfileMaxAggregateInputType
  }

  export type GetBusinessProfileAggregateType<T extends BusinessProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessProfile[P]>
      : GetScalarType<T[P], AggregateBusinessProfile[P]>
  }




  export type BusinessProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessProfileWhereInput
    orderBy?: BusinessProfileOrderByWithAggregationInput | BusinessProfileOrderByWithAggregationInput[]
    by: BusinessProfileScalarFieldEnum[] | BusinessProfileScalarFieldEnum
    having?: BusinessProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessProfileCountAggregateInputType | true
    _min?: BusinessProfileMinAggregateInputType
    _max?: BusinessProfileMaxAggregateInputType
  }

  export type BusinessProfileGroupByOutputType = {
    id: string
    userId: string
    companyName: string
    companyDescription: string | null
    supportTone: string
    refundPolicy: string | null
    deliveryPolicy: string | null
    businessHours: string | null
    faq: string | null
    escalationInstructions: string | null
    brandVoiceExamples: string | null
    restrictedPhrases: string | null
    createdAt: Date
    updatedAt: Date
    _count: BusinessProfileCountAggregateOutputType | null
    _min: BusinessProfileMinAggregateOutputType | null
    _max: BusinessProfileMaxAggregateOutputType | null
  }

  type GetBusinessProfileGroupByPayload<T extends BusinessProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessProfileGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessProfileGroupByOutputType[P]>
        }
      >
    >


  export type BusinessProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    companyDescription?: boolean
    supportTone?: boolean
    refundPolicy?: boolean
    deliveryPolicy?: boolean
    businessHours?: boolean
    faq?: boolean
    escalationInstructions?: boolean
    brandVoiceExamples?: boolean
    restrictedPhrases?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessProfile"]>

  export type BusinessProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    companyDescription?: boolean
    supportTone?: boolean
    refundPolicy?: boolean
    deliveryPolicy?: boolean
    businessHours?: boolean
    faq?: boolean
    escalationInstructions?: boolean
    brandVoiceExamples?: boolean
    restrictedPhrases?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessProfile"]>

  export type BusinessProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    companyDescription?: boolean
    supportTone?: boolean
    refundPolicy?: boolean
    deliveryPolicy?: boolean
    businessHours?: boolean
    faq?: boolean
    escalationInstructions?: boolean
    brandVoiceExamples?: boolean
    restrictedPhrases?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessProfile"]>

  export type BusinessProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    companyDescription?: boolean
    supportTone?: boolean
    refundPolicy?: boolean
    deliveryPolicy?: boolean
    businessHours?: boolean
    faq?: boolean
    escalationInstructions?: boolean
    brandVoiceExamples?: boolean
    restrictedPhrases?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "companyDescription" | "supportTone" | "refundPolicy" | "deliveryPolicy" | "businessHours" | "faq" | "escalationInstructions" | "brandVoiceExamples" | "restrictedPhrases" | "createdAt" | "updatedAt", ExtArgs["result"]["businessProfile"]>
  export type BusinessProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string
      companyDescription: string | null
      supportTone: string
      refundPolicy: string | null
      deliveryPolicy: string | null
      businessHours: string | null
      faq: string | null
      escalationInstructions: string | null
      brandVoiceExamples: string | null
      restrictedPhrases: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessProfile"]>
    composites: {}
  }

  type BusinessProfileGetPayload<S extends boolean | null | undefined | BusinessProfileDefaultArgs> = $Result.GetResult<Prisma.$BusinessProfilePayload, S>

  type BusinessProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessProfileCountAggregateInputType | true
    }

  export interface BusinessProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessProfile'], meta: { name: 'BusinessProfile' } }
    /**
     * Find zero or one BusinessProfile that matches the filter.
     * @param {BusinessProfileFindUniqueArgs} args - Arguments to find a BusinessProfile
     * @example
     * // Get one BusinessProfile
     * const businessProfile = await prisma.businessProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessProfileFindUniqueArgs>(args: SelectSubset<T, BusinessProfileFindUniqueArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessProfileFindUniqueOrThrowArgs} args - Arguments to find a BusinessProfile
     * @example
     * // Get one BusinessProfile
     * const businessProfile = await prisma.businessProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileFindFirstArgs} args - Arguments to find a BusinessProfile
     * @example
     * // Get one BusinessProfile
     * const businessProfile = await prisma.businessProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessProfileFindFirstArgs>(args?: SelectSubset<T, BusinessProfileFindFirstArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileFindFirstOrThrowArgs} args - Arguments to find a BusinessProfile
     * @example
     * // Get one BusinessProfile
     * const businessProfile = await prisma.businessProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessProfiles
     * const businessProfiles = await prisma.businessProfile.findMany()
     * 
     * // Get first 10 BusinessProfiles
     * const businessProfiles = await prisma.businessProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessProfileWithIdOnly = await prisma.businessProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessProfileFindManyArgs>(args?: SelectSubset<T, BusinessProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessProfile.
     * @param {BusinessProfileCreateArgs} args - Arguments to create a BusinessProfile.
     * @example
     * // Create one BusinessProfile
     * const BusinessProfile = await prisma.businessProfile.create({
     *   data: {
     *     // ... data to create a BusinessProfile
     *   }
     * })
     * 
     */
    create<T extends BusinessProfileCreateArgs>(args: SelectSubset<T, BusinessProfileCreateArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessProfiles.
     * @param {BusinessProfileCreateManyArgs} args - Arguments to create many BusinessProfiles.
     * @example
     * // Create many BusinessProfiles
     * const businessProfile = await prisma.businessProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessProfileCreateManyArgs>(args?: SelectSubset<T, BusinessProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessProfiles and returns the data saved in the database.
     * @param {BusinessProfileCreateManyAndReturnArgs} args - Arguments to create many BusinessProfiles.
     * @example
     * // Create many BusinessProfiles
     * const businessProfile = await prisma.businessProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessProfiles and only return the `id`
     * const businessProfileWithIdOnly = await prisma.businessProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessProfile.
     * @param {BusinessProfileDeleteArgs} args - Arguments to delete one BusinessProfile.
     * @example
     * // Delete one BusinessProfile
     * const BusinessProfile = await prisma.businessProfile.delete({
     *   where: {
     *     // ... filter to delete one BusinessProfile
     *   }
     * })
     * 
     */
    delete<T extends BusinessProfileDeleteArgs>(args: SelectSubset<T, BusinessProfileDeleteArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessProfile.
     * @param {BusinessProfileUpdateArgs} args - Arguments to update one BusinessProfile.
     * @example
     * // Update one BusinessProfile
     * const businessProfile = await prisma.businessProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessProfileUpdateArgs>(args: SelectSubset<T, BusinessProfileUpdateArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessProfiles.
     * @param {BusinessProfileDeleteManyArgs} args - Arguments to filter BusinessProfiles to delete.
     * @example
     * // Delete a few BusinessProfiles
     * const { count } = await prisma.businessProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessProfileDeleteManyArgs>(args?: SelectSubset<T, BusinessProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessProfiles
     * const businessProfile = await prisma.businessProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessProfileUpdateManyArgs>(args: SelectSubset<T, BusinessProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessProfiles and returns the data updated in the database.
     * @param {BusinessProfileUpdateManyAndReturnArgs} args - Arguments to update many BusinessProfiles.
     * @example
     * // Update many BusinessProfiles
     * const businessProfile = await prisma.businessProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessProfiles and only return the `id`
     * const businessProfileWithIdOnly = await prisma.businessProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessProfile.
     * @param {BusinessProfileUpsertArgs} args - Arguments to update or create a BusinessProfile.
     * @example
     * // Update or create a BusinessProfile
     * const businessProfile = await prisma.businessProfile.upsert({
     *   create: {
     *     // ... data to create a BusinessProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessProfile we want to update
     *   }
     * })
     */
    upsert<T extends BusinessProfileUpsertArgs>(args: SelectSubset<T, BusinessProfileUpsertArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileCountArgs} args - Arguments to filter BusinessProfiles to count.
     * @example
     * // Count the number of BusinessProfiles
     * const count = await prisma.businessProfile.count({
     *   where: {
     *     // ... the filter for the BusinessProfiles we want to count
     *   }
     * })
    **/
    count<T extends BusinessProfileCountArgs>(
      args?: Subset<T, BusinessProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessProfileAggregateArgs>(args: Subset<T, BusinessProfileAggregateArgs>): Prisma.PrismaPromise<GetBusinessProfileAggregateType<T>>

    /**
     * Group by BusinessProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessProfileGroupByArgs['orderBy'] }
        : { orderBy?: BusinessProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessProfile model
   */
  readonly fields: BusinessProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessProfile model
   */
  interface BusinessProfileFieldRefs {
    readonly id: FieldRef<"BusinessProfile", 'String'>
    readonly userId: FieldRef<"BusinessProfile", 'String'>
    readonly companyName: FieldRef<"BusinessProfile", 'String'>
    readonly companyDescription: FieldRef<"BusinessProfile", 'String'>
    readonly supportTone: FieldRef<"BusinessProfile", 'String'>
    readonly refundPolicy: FieldRef<"BusinessProfile", 'String'>
    readonly deliveryPolicy: FieldRef<"BusinessProfile", 'String'>
    readonly businessHours: FieldRef<"BusinessProfile", 'String'>
    readonly faq: FieldRef<"BusinessProfile", 'String'>
    readonly escalationInstructions: FieldRef<"BusinessProfile", 'String'>
    readonly brandVoiceExamples: FieldRef<"BusinessProfile", 'String'>
    readonly restrictedPhrases: FieldRef<"BusinessProfile", 'String'>
    readonly createdAt: FieldRef<"BusinessProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessProfile findUnique
   */
  export type BusinessProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfile to fetch.
     */
    where: BusinessProfileWhereUniqueInput
  }

  /**
   * BusinessProfile findUniqueOrThrow
   */
  export type BusinessProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfile to fetch.
     */
    where: BusinessProfileWhereUniqueInput
  }

  /**
   * BusinessProfile findFirst
   */
  export type BusinessProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfile to fetch.
     */
    where?: BusinessProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessProfiles to fetch.
     */
    orderBy?: BusinessProfileOrderByWithRelationInput | BusinessProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessProfiles.
     */
    cursor?: BusinessProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessProfiles.
     */
    distinct?: BusinessProfileScalarFieldEnum | BusinessProfileScalarFieldEnum[]
  }

  /**
   * BusinessProfile findFirstOrThrow
   */
  export type BusinessProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfile to fetch.
     */
    where?: BusinessProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessProfiles to fetch.
     */
    orderBy?: BusinessProfileOrderByWithRelationInput | BusinessProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessProfiles.
     */
    cursor?: BusinessProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessProfiles.
     */
    distinct?: BusinessProfileScalarFieldEnum | BusinessProfileScalarFieldEnum[]
  }

  /**
   * BusinessProfile findMany
   */
  export type BusinessProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfiles to fetch.
     */
    where?: BusinessProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessProfiles to fetch.
     */
    orderBy?: BusinessProfileOrderByWithRelationInput | BusinessProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessProfiles.
     */
    cursor?: BusinessProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessProfiles.
     */
    distinct?: BusinessProfileScalarFieldEnum | BusinessProfileScalarFieldEnum[]
  }

  /**
   * BusinessProfile create
   */
  export type BusinessProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessProfile.
     */
    data: XOR<BusinessProfileCreateInput, BusinessProfileUncheckedCreateInput>
  }

  /**
   * BusinessProfile createMany
   */
  export type BusinessProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessProfiles.
     */
    data: BusinessProfileCreateManyInput | BusinessProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessProfile createManyAndReturn
   */
  export type BusinessProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessProfiles.
     */
    data: BusinessProfileCreateManyInput | BusinessProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessProfile update
   */
  export type BusinessProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessProfile.
     */
    data: XOR<BusinessProfileUpdateInput, BusinessProfileUncheckedUpdateInput>
    /**
     * Choose, which BusinessProfile to update.
     */
    where: BusinessProfileWhereUniqueInput
  }

  /**
   * BusinessProfile updateMany
   */
  export type BusinessProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessProfiles.
     */
    data: XOR<BusinessProfileUpdateManyMutationInput, BusinessProfileUncheckedUpdateManyInput>
    /**
     * Filter which BusinessProfiles to update
     */
    where?: BusinessProfileWhereInput
    /**
     * Limit how many BusinessProfiles to update.
     */
    limit?: number
  }

  /**
   * BusinessProfile updateManyAndReturn
   */
  export type BusinessProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * The data used to update BusinessProfiles.
     */
    data: XOR<BusinessProfileUpdateManyMutationInput, BusinessProfileUncheckedUpdateManyInput>
    /**
     * Filter which BusinessProfiles to update
     */
    where?: BusinessProfileWhereInput
    /**
     * Limit how many BusinessProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessProfile upsert
   */
  export type BusinessProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessProfile to update in case it exists.
     */
    where: BusinessProfileWhereUniqueInput
    /**
     * In case the BusinessProfile found by the `where` argument doesn't exist, create a new BusinessProfile with this data.
     */
    create: XOR<BusinessProfileCreateInput, BusinessProfileUncheckedCreateInput>
    /**
     * In case the BusinessProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessProfileUpdateInput, BusinessProfileUncheckedUpdateInput>
  }

  /**
   * BusinessProfile delete
   */
  export type BusinessProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter which BusinessProfile to delete.
     */
    where: BusinessProfileWhereUniqueInput
  }

  /**
   * BusinessProfile deleteMany
   */
  export type BusinessProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessProfiles to delete
     */
    where?: BusinessProfileWhereInput
    /**
     * Limit how many BusinessProfiles to delete.
     */
    limit?: number
  }

  /**
   * BusinessProfile without action
   */
  export type BusinessProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
  }


  /**
   * Model Analysis
   */

  export type AggregateAnalysis = {
    _count: AnalysisCountAggregateOutputType | null
    _avg: AnalysisAvgAggregateOutputType | null
    _sum: AnalysisSumAggregateOutputType | null
    _min: AnalysisMinAggregateOutputType | null
    _max: AnalysisMaxAggregateOutputType | null
  }

  export type AnalysisAvgAggregateOutputType = {
    confidence: number | null
    responseTimeMinutes: number | null
  }

  export type AnalysisSumAggregateOutputType = {
    confidence: number | null
    responseTimeMinutes: number | null
  }

  export type AnalysisMinAggregateOutputType = {
    id: string | null
    userId: string | null
    originalMessage: string | null
    category: string | null
    urgency: string | null
    sentiment: string | null
    summary: string | null
    suggestedReply: string | null
    recommendedAction: string | null
    confidence: number | null
    resolved: boolean | null
    responseTimeMinutes: number | null
    createdAt: Date | null
  }

  export type AnalysisMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    originalMessage: string | null
    category: string | null
    urgency: string | null
    sentiment: string | null
    summary: string | null
    suggestedReply: string | null
    recommendedAction: string | null
    confidence: number | null
    resolved: boolean | null
    responseTimeMinutes: number | null
    createdAt: Date | null
  }

  export type AnalysisCountAggregateOutputType = {
    id: number
    userId: number
    originalMessage: number
    category: number
    urgency: number
    sentiment: number
    summary: number
    suggestedReply: number
    recommendedAction: number
    confidence: number
    resolved: number
    responseTimeMinutes: number
    createdAt: number
    _all: number
  }


  export type AnalysisAvgAggregateInputType = {
    confidence?: true
    responseTimeMinutes?: true
  }

  export type AnalysisSumAggregateInputType = {
    confidence?: true
    responseTimeMinutes?: true
  }

  export type AnalysisMinAggregateInputType = {
    id?: true
    userId?: true
    originalMessage?: true
    category?: true
    urgency?: true
    sentiment?: true
    summary?: true
    suggestedReply?: true
    recommendedAction?: true
    confidence?: true
    resolved?: true
    responseTimeMinutes?: true
    createdAt?: true
  }

  export type AnalysisMaxAggregateInputType = {
    id?: true
    userId?: true
    originalMessage?: true
    category?: true
    urgency?: true
    sentiment?: true
    summary?: true
    suggestedReply?: true
    recommendedAction?: true
    confidence?: true
    resolved?: true
    responseTimeMinutes?: true
    createdAt?: true
  }

  export type AnalysisCountAggregateInputType = {
    id?: true
    userId?: true
    originalMessage?: true
    category?: true
    urgency?: true
    sentiment?: true
    summary?: true
    suggestedReply?: true
    recommendedAction?: true
    confidence?: true
    resolved?: true
    responseTimeMinutes?: true
    createdAt?: true
    _all?: true
  }

  export type AnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analysis to aggregate.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analyses
    **/
    _count?: true | AnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisMaxAggregateInputType
  }

  export type GetAnalysisAggregateType<T extends AnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysis[P]>
      : GetScalarType<T[P], AggregateAnalysis[P]>
  }




  export type AnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithAggregationInput | AnalysisOrderByWithAggregationInput[]
    by: AnalysisScalarFieldEnum[] | AnalysisScalarFieldEnum
    having?: AnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisCountAggregateInputType | true
    _avg?: AnalysisAvgAggregateInputType
    _sum?: AnalysisSumAggregateInputType
    _min?: AnalysisMinAggregateInputType
    _max?: AnalysisMaxAggregateInputType
  }

  export type AnalysisGroupByOutputType = {
    id: string
    userId: string
    originalMessage: string
    category: string
    urgency: string
    sentiment: string
    summary: string
    suggestedReply: string
    recommendedAction: string
    confidence: number | null
    resolved: boolean
    responseTimeMinutes: number | null
    createdAt: Date
    _count: AnalysisCountAggregateOutputType | null
    _avg: AnalysisAvgAggregateOutputType | null
    _sum: AnalysisSumAggregateOutputType | null
    _min: AnalysisMinAggregateOutputType | null
    _max: AnalysisMaxAggregateOutputType | null
  }

  type GetAnalysisGroupByPayload<T extends AnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalMessage?: boolean
    category?: boolean
    urgency?: boolean
    sentiment?: boolean
    summary?: boolean
    suggestedReply?: boolean
    recommendedAction?: boolean
    confidence?: boolean
    resolved?: boolean
    responseTimeMinutes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalMessage?: boolean
    category?: boolean
    urgency?: boolean
    sentiment?: boolean
    summary?: boolean
    suggestedReply?: boolean
    recommendedAction?: boolean
    confidence?: boolean
    resolved?: boolean
    responseTimeMinutes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalMessage?: boolean
    category?: boolean
    urgency?: boolean
    sentiment?: boolean
    summary?: boolean
    suggestedReply?: boolean
    recommendedAction?: boolean
    confidence?: boolean
    resolved?: boolean
    responseTimeMinutes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectScalar = {
    id?: boolean
    userId?: boolean
    originalMessage?: boolean
    category?: boolean
    urgency?: boolean
    sentiment?: boolean
    summary?: boolean
    suggestedReply?: boolean
    recommendedAction?: boolean
    confidence?: boolean
    resolved?: boolean
    responseTimeMinutes?: boolean
    createdAt?: boolean
  }

  export type AnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "originalMessage" | "category" | "urgency" | "sentiment" | "summary" | "suggestedReply" | "recommendedAction" | "confidence" | "resolved" | "responseTimeMinutes" | "createdAt", ExtArgs["result"]["analysis"]>
  export type AnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      originalMessage: string
      category: string
      urgency: string
      sentiment: string
      summary: string
      suggestedReply: string
      recommendedAction: string
      confidence: number | null
      resolved: boolean
      responseTimeMinutes: number | null
      createdAt: Date
    }, ExtArgs["result"]["analysis"]>
    composites: {}
  }

  type AnalysisGetPayload<S extends boolean | null | undefined | AnalysisDefaultArgs> = $Result.GetResult<Prisma.$AnalysisPayload, S>

  type AnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisCountAggregateInputType | true
    }

  export interface AnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analysis'], meta: { name: 'Analysis' } }
    /**
     * Find zero or one Analysis that matches the filter.
     * @param {AnalysisFindUniqueArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisFindUniqueArgs>(args: SelectSubset<T, AnalysisFindUniqueArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisFindUniqueOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisFindFirstArgs>(args?: SelectSubset<T, AnalysisFindFirstArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analyses
     * const analyses = await prisma.analysis.findMany()
     * 
     * // Get first 10 Analyses
     * const analyses = await prisma.analysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisWithIdOnly = await prisma.analysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisFindManyArgs>(args?: SelectSubset<T, AnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analysis.
     * @param {AnalysisCreateArgs} args - Arguments to create a Analysis.
     * @example
     * // Create one Analysis
     * const Analysis = await prisma.analysis.create({
     *   data: {
     *     // ... data to create a Analysis
     *   }
     * })
     * 
     */
    create<T extends AnalysisCreateArgs>(args: SelectSubset<T, AnalysisCreateArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analyses.
     * @param {AnalysisCreateManyArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisCreateManyArgs>(args?: SelectSubset<T, AnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analyses and returns the data saved in the database.
     * @param {AnalysisCreateManyAndReturnArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analyses and only return the `id`
     * const analysisWithIdOnly = await prisma.analysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analysis.
     * @param {AnalysisDeleteArgs} args - Arguments to delete one Analysis.
     * @example
     * // Delete one Analysis
     * const Analysis = await prisma.analysis.delete({
     *   where: {
     *     // ... filter to delete one Analysis
     *   }
     * })
     * 
     */
    delete<T extends AnalysisDeleteArgs>(args: SelectSubset<T, AnalysisDeleteArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analysis.
     * @param {AnalysisUpdateArgs} args - Arguments to update one Analysis.
     * @example
     * // Update one Analysis
     * const analysis = await prisma.analysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisUpdateArgs>(args: SelectSubset<T, AnalysisUpdateArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analyses.
     * @param {AnalysisDeleteManyArgs} args - Arguments to filter Analyses to delete.
     * @example
     * // Delete a few Analyses
     * const { count } = await prisma.analysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisDeleteManyArgs>(args?: SelectSubset<T, AnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisUpdateManyArgs>(args: SelectSubset<T, AnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses and returns the data updated in the database.
     * @param {AnalysisUpdateManyAndReturnArgs} args - Arguments to update many Analyses.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analyses and only return the `id`
     * const analysisWithIdOnly = await prisma.analysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analysis.
     * @param {AnalysisUpsertArgs} args - Arguments to update or create a Analysis.
     * @example
     * // Update or create a Analysis
     * const analysis = await prisma.analysis.upsert({
     *   create: {
     *     // ... data to create a Analysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analysis we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisUpsertArgs>(args: SelectSubset<T, AnalysisUpsertArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCountArgs} args - Arguments to filter Analyses to count.
     * @example
     * // Count the number of Analyses
     * const count = await prisma.analysis.count({
     *   where: {
     *     // ... the filter for the Analyses we want to count
     *   }
     * })
    **/
    count<T extends AnalysisCountArgs>(
      args?: Subset<T, AnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalysisAggregateArgs>(args: Subset<T, AnalysisAggregateArgs>): Prisma.PrismaPromise<GetAnalysisAggregateType<T>>

    /**
     * Group by Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analysis model
   */
  readonly fields: AnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Analysis model
   */
  interface AnalysisFieldRefs {
    readonly id: FieldRef<"Analysis", 'String'>
    readonly userId: FieldRef<"Analysis", 'String'>
    readonly originalMessage: FieldRef<"Analysis", 'String'>
    readonly category: FieldRef<"Analysis", 'String'>
    readonly urgency: FieldRef<"Analysis", 'String'>
    readonly sentiment: FieldRef<"Analysis", 'String'>
    readonly summary: FieldRef<"Analysis", 'String'>
    readonly suggestedReply: FieldRef<"Analysis", 'String'>
    readonly recommendedAction: FieldRef<"Analysis", 'String'>
    readonly confidence: FieldRef<"Analysis", 'Int'>
    readonly resolved: FieldRef<"Analysis", 'Boolean'>
    readonly responseTimeMinutes: FieldRef<"Analysis", 'Int'>
    readonly createdAt: FieldRef<"Analysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analysis findUnique
   */
  export type AnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis findUniqueOrThrow
   */
  export type AnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis findFirst
   */
  export type AnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis findFirstOrThrow
   */
  export type AnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis findMany
   */
  export type AnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis create
   */
  export type AnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a Analysis.
     */
    data: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>
  }

  /**
   * Analysis createMany
   */
  export type AnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analysis createManyAndReturn
   */
  export type AnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analysis update
   */
  export type AnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a Analysis.
     */
    data: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>
    /**
     * Choose, which Analysis to update.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis updateMany
   */
  export type AnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalysisWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
  }

  /**
   * Analysis updateManyAndReturn
   */
  export type AnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalysisWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analysis upsert
   */
  export type AnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the Analysis to update in case it exists.
     */
    where: AnalysisWhereUniqueInput
    /**
     * In case the Analysis found by the `where` argument doesn't exist, create a new Analysis with this data.
     */
    create: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>
    /**
     * In case the Analysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>
  }

  /**
   * Analysis delete
   */
  export type AnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter which Analysis to delete.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis deleteMany
   */
  export type AnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyses to delete
     */
    where?: AnalysisWhereInput
    /**
     * Limit how many Analyses to delete.
     */
    limit?: number
  }

  /**
   * Analysis without action
   */
  export type AnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
  }


  /**
   * Model KnowledgeBase
   */

  export type AggregateKnowledgeBase = {
    _count: KnowledgeBaseCountAggregateOutputType | null
    _min: KnowledgeBaseMinAggregateOutputType | null
    _max: KnowledgeBaseMaxAggregateOutputType | null
  }

  export type KnowledgeBaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type KnowledgeBaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type KnowledgeBaseCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type KnowledgeBaseMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type KnowledgeBaseMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type KnowledgeBaseCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type KnowledgeBaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeBase to aggregate.
     */
    where?: KnowledgeBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeBases to fetch.
     */
    orderBy?: KnowledgeBaseOrderByWithRelationInput | KnowledgeBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeBases
    **/
    _count?: true | KnowledgeBaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeBaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeBaseMaxAggregateInputType
  }

  export type GetKnowledgeBaseAggregateType<T extends KnowledgeBaseAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeBase[P]>
      : GetScalarType<T[P], AggregateKnowledgeBase[P]>
  }




  export type KnowledgeBaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeBaseWhereInput
    orderBy?: KnowledgeBaseOrderByWithAggregationInput | KnowledgeBaseOrderByWithAggregationInput[]
    by: KnowledgeBaseScalarFieldEnum[] | KnowledgeBaseScalarFieldEnum
    having?: KnowledgeBaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeBaseCountAggregateInputType | true
    _min?: KnowledgeBaseMinAggregateInputType
    _max?: KnowledgeBaseMaxAggregateInputType
  }

  export type KnowledgeBaseGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    createdAt: Date
    _count: KnowledgeBaseCountAggregateOutputType | null
    _min: KnowledgeBaseMinAggregateOutputType | null
    _max: KnowledgeBaseMaxAggregateOutputType | null
  }

  type GetKnowledgeBaseGroupByPayload<T extends KnowledgeBaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeBaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeBaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeBaseGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeBaseGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeBaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    snippets?: boolean | KnowledgeBase$snippetsArgs<ExtArgs>
    _count?: boolean | KnowledgeBaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeBase"]>

  export type KnowledgeBaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeBase"]>

  export type KnowledgeBaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeBase"]>

  export type KnowledgeBaseSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type KnowledgeBaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "createdAt", ExtArgs["result"]["knowledgeBase"]>
  export type KnowledgeBaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    snippets?: boolean | KnowledgeBase$snippetsArgs<ExtArgs>
    _count?: boolean | KnowledgeBaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KnowledgeBaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KnowledgeBaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KnowledgeBasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeBase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      snippets: Prisma.$DocumentSnippetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["knowledgeBase"]>
    composites: {}
  }

  type KnowledgeBaseGetPayload<S extends boolean | null | undefined | KnowledgeBaseDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeBasePayload, S>

  type KnowledgeBaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeBaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeBaseCountAggregateInputType | true
    }

  export interface KnowledgeBaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeBase'], meta: { name: 'KnowledgeBase' } }
    /**
     * Find zero or one KnowledgeBase that matches the filter.
     * @param {KnowledgeBaseFindUniqueArgs} args - Arguments to find a KnowledgeBase
     * @example
     * // Get one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeBaseFindUniqueArgs>(args: SelectSubset<T, KnowledgeBaseFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KnowledgeBase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeBaseFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeBase
     * @example
     * // Get one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeBaseFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeBaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeBase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseFindFirstArgs} args - Arguments to find a KnowledgeBase
     * @example
     * // Get one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeBaseFindFirstArgs>(args?: SelectSubset<T, KnowledgeBaseFindFirstArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeBase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseFindFirstOrThrowArgs} args - Arguments to find a KnowledgeBase
     * @example
     * // Get one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeBaseFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeBaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KnowledgeBases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeBases
     * const knowledgeBases = await prisma.knowledgeBase.findMany()
     * 
     * // Get first 10 KnowledgeBases
     * const knowledgeBases = await prisma.knowledgeBase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeBaseWithIdOnly = await prisma.knowledgeBase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeBaseFindManyArgs>(args?: SelectSubset<T, KnowledgeBaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KnowledgeBase.
     * @param {KnowledgeBaseCreateArgs} args - Arguments to create a KnowledgeBase.
     * @example
     * // Create one KnowledgeBase
     * const KnowledgeBase = await prisma.knowledgeBase.create({
     *   data: {
     *     // ... data to create a KnowledgeBase
     *   }
     * })
     * 
     */
    create<T extends KnowledgeBaseCreateArgs>(args: SelectSubset<T, KnowledgeBaseCreateArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KnowledgeBases.
     * @param {KnowledgeBaseCreateManyArgs} args - Arguments to create many KnowledgeBases.
     * @example
     * // Create many KnowledgeBases
     * const knowledgeBase = await prisma.knowledgeBase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeBaseCreateManyArgs>(args?: SelectSubset<T, KnowledgeBaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeBases and returns the data saved in the database.
     * @param {KnowledgeBaseCreateManyAndReturnArgs} args - Arguments to create many KnowledgeBases.
     * @example
     * // Create many KnowledgeBases
     * const knowledgeBase = await prisma.knowledgeBase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeBases and only return the `id`
     * const knowledgeBaseWithIdOnly = await prisma.knowledgeBase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeBaseCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeBaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KnowledgeBase.
     * @param {KnowledgeBaseDeleteArgs} args - Arguments to delete one KnowledgeBase.
     * @example
     * // Delete one KnowledgeBase
     * const KnowledgeBase = await prisma.knowledgeBase.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeBase
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeBaseDeleteArgs>(args: SelectSubset<T, KnowledgeBaseDeleteArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KnowledgeBase.
     * @param {KnowledgeBaseUpdateArgs} args - Arguments to update one KnowledgeBase.
     * @example
     * // Update one KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeBaseUpdateArgs>(args: SelectSubset<T, KnowledgeBaseUpdateArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KnowledgeBases.
     * @param {KnowledgeBaseDeleteManyArgs} args - Arguments to filter KnowledgeBases to delete.
     * @example
     * // Delete a few KnowledgeBases
     * const { count } = await prisma.knowledgeBase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeBaseDeleteManyArgs>(args?: SelectSubset<T, KnowledgeBaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeBases
     * const knowledgeBase = await prisma.knowledgeBase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeBaseUpdateManyArgs>(args: SelectSubset<T, KnowledgeBaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeBases and returns the data updated in the database.
     * @param {KnowledgeBaseUpdateManyAndReturnArgs} args - Arguments to update many KnowledgeBases.
     * @example
     * // Update many KnowledgeBases
     * const knowledgeBase = await prisma.knowledgeBase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KnowledgeBases and only return the `id`
     * const knowledgeBaseWithIdOnly = await prisma.knowledgeBase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KnowledgeBaseUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeBaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KnowledgeBase.
     * @param {KnowledgeBaseUpsertArgs} args - Arguments to update or create a KnowledgeBase.
     * @example
     * // Update or create a KnowledgeBase
     * const knowledgeBase = await prisma.knowledgeBase.upsert({
     *   create: {
     *     // ... data to create a KnowledgeBase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeBase we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeBaseUpsertArgs>(args: SelectSubset<T, KnowledgeBaseUpsertArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KnowledgeBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseCountArgs} args - Arguments to filter KnowledgeBases to count.
     * @example
     * // Count the number of KnowledgeBases
     * const count = await prisma.knowledgeBase.count({
     *   where: {
     *     // ... the filter for the KnowledgeBases we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeBaseCountArgs>(
      args?: Subset<T, KnowledgeBaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeBaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KnowledgeBaseAggregateArgs>(args: Subset<T, KnowledgeBaseAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeBaseAggregateType<T>>

    /**
     * Group by KnowledgeBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeBaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KnowledgeBaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeBaseGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeBaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KnowledgeBaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeBase model
   */
  readonly fields: KnowledgeBaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeBase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeBaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    snippets<T extends KnowledgeBase$snippetsArgs<ExtArgs> = {}>(args?: Subset<T, KnowledgeBase$snippetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KnowledgeBase model
   */
  interface KnowledgeBaseFieldRefs {
    readonly id: FieldRef<"KnowledgeBase", 'String'>
    readonly userId: FieldRef<"KnowledgeBase", 'String'>
    readonly name: FieldRef<"KnowledgeBase", 'String'>
    readonly description: FieldRef<"KnowledgeBase", 'String'>
    readonly createdAt: FieldRef<"KnowledgeBase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeBase findUnique
   */
  export type KnowledgeBaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeBase to fetch.
     */
    where: KnowledgeBaseWhereUniqueInput
  }

  /**
   * KnowledgeBase findUniqueOrThrow
   */
  export type KnowledgeBaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeBase to fetch.
     */
    where: KnowledgeBaseWhereUniqueInput
  }

  /**
   * KnowledgeBase findFirst
   */
  export type KnowledgeBaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeBase to fetch.
     */
    where?: KnowledgeBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeBases to fetch.
     */
    orderBy?: KnowledgeBaseOrderByWithRelationInput | KnowledgeBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeBases.
     */
    cursor?: KnowledgeBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeBases.
     */
    distinct?: KnowledgeBaseScalarFieldEnum | KnowledgeBaseScalarFieldEnum[]
  }

  /**
   * KnowledgeBase findFirstOrThrow
   */
  export type KnowledgeBaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeBase to fetch.
     */
    where?: KnowledgeBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeBases to fetch.
     */
    orderBy?: KnowledgeBaseOrderByWithRelationInput | KnowledgeBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeBases.
     */
    cursor?: KnowledgeBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeBases.
     */
    distinct?: KnowledgeBaseScalarFieldEnum | KnowledgeBaseScalarFieldEnum[]
  }

  /**
   * KnowledgeBase findMany
   */
  export type KnowledgeBaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeBases to fetch.
     */
    where?: KnowledgeBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeBases to fetch.
     */
    orderBy?: KnowledgeBaseOrderByWithRelationInput | KnowledgeBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeBases.
     */
    cursor?: KnowledgeBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeBases.
     */
    distinct?: KnowledgeBaseScalarFieldEnum | KnowledgeBaseScalarFieldEnum[]
  }

  /**
   * KnowledgeBase create
   */
  export type KnowledgeBaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeBase.
     */
    data: XOR<KnowledgeBaseCreateInput, KnowledgeBaseUncheckedCreateInput>
  }

  /**
   * KnowledgeBase createMany
   */
  export type KnowledgeBaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeBases.
     */
    data: KnowledgeBaseCreateManyInput | KnowledgeBaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeBase createManyAndReturn
   */
  export type KnowledgeBaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * The data used to create many KnowledgeBases.
     */
    data: KnowledgeBaseCreateManyInput | KnowledgeBaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeBase update
   */
  export type KnowledgeBaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeBase.
     */
    data: XOR<KnowledgeBaseUpdateInput, KnowledgeBaseUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeBase to update.
     */
    where: KnowledgeBaseWhereUniqueInput
  }

  /**
   * KnowledgeBase updateMany
   */
  export type KnowledgeBaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeBases.
     */
    data: XOR<KnowledgeBaseUpdateManyMutationInput, KnowledgeBaseUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeBases to update
     */
    where?: KnowledgeBaseWhereInput
    /**
     * Limit how many KnowledgeBases to update.
     */
    limit?: number
  }

  /**
   * KnowledgeBase updateManyAndReturn
   */
  export type KnowledgeBaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * The data used to update KnowledgeBases.
     */
    data: XOR<KnowledgeBaseUpdateManyMutationInput, KnowledgeBaseUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeBases to update
     */
    where?: KnowledgeBaseWhereInput
    /**
     * Limit how many KnowledgeBases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeBase upsert
   */
  export type KnowledgeBaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeBase to update in case it exists.
     */
    where: KnowledgeBaseWhereUniqueInput
    /**
     * In case the KnowledgeBase found by the `where` argument doesn't exist, create a new KnowledgeBase with this data.
     */
    create: XOR<KnowledgeBaseCreateInput, KnowledgeBaseUncheckedCreateInput>
    /**
     * In case the KnowledgeBase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeBaseUpdateInput, KnowledgeBaseUncheckedUpdateInput>
  }

  /**
   * KnowledgeBase delete
   */
  export type KnowledgeBaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
    /**
     * Filter which KnowledgeBase to delete.
     */
    where: KnowledgeBaseWhereUniqueInput
  }

  /**
   * KnowledgeBase deleteMany
   */
  export type KnowledgeBaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeBases to delete
     */
    where?: KnowledgeBaseWhereInput
    /**
     * Limit how many KnowledgeBases to delete.
     */
    limit?: number
  }

  /**
   * KnowledgeBase.snippets
   */
  export type KnowledgeBase$snippetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    where?: DocumentSnippetWhereInput
    orderBy?: DocumentSnippetOrderByWithRelationInput | DocumentSnippetOrderByWithRelationInput[]
    cursor?: DocumentSnippetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentSnippetScalarFieldEnum | DocumentSnippetScalarFieldEnum[]
  }

  /**
   * KnowledgeBase without action
   */
  export type KnowledgeBaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeBase
     */
    select?: KnowledgeBaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeBase
     */
    omit?: KnowledgeBaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeBaseInclude<ExtArgs> | null
  }


  /**
   * Model DocumentSnippet
   */

  export type AggregateDocumentSnippet = {
    _count: DocumentSnippetCountAggregateOutputType | null
    _min: DocumentSnippetMinAggregateOutputType | null
    _max: DocumentSnippetMaxAggregateOutputType | null
  }

  export type DocumentSnippetMinAggregateOutputType = {
    id: string | null
    knowledgeBaseId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type DocumentSnippetMaxAggregateOutputType = {
    id: string | null
    knowledgeBaseId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type DocumentSnippetCountAggregateOutputType = {
    id: number
    knowledgeBaseId: number
    content: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type DocumentSnippetMinAggregateInputType = {
    id?: true
    knowledgeBaseId?: true
    content?: true
    createdAt?: true
  }

  export type DocumentSnippetMaxAggregateInputType = {
    id?: true
    knowledgeBaseId?: true
    content?: true
    createdAt?: true
  }

  export type DocumentSnippetCountAggregateInputType = {
    id?: true
    knowledgeBaseId?: true
    content?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentSnippetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentSnippet to aggregate.
     */
    where?: DocumentSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentSnippets to fetch.
     */
    orderBy?: DocumentSnippetOrderByWithRelationInput | DocumentSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentSnippets
    **/
    _count?: true | DocumentSnippetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentSnippetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentSnippetMaxAggregateInputType
  }

  export type GetDocumentSnippetAggregateType<T extends DocumentSnippetAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentSnippet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentSnippet[P]>
      : GetScalarType<T[P], AggregateDocumentSnippet[P]>
  }




  export type DocumentSnippetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentSnippetWhereInput
    orderBy?: DocumentSnippetOrderByWithAggregationInput | DocumentSnippetOrderByWithAggregationInput[]
    by: DocumentSnippetScalarFieldEnum[] | DocumentSnippetScalarFieldEnum
    having?: DocumentSnippetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentSnippetCountAggregateInputType | true
    _min?: DocumentSnippetMinAggregateInputType
    _max?: DocumentSnippetMaxAggregateInputType
  }

  export type DocumentSnippetGroupByOutputType = {
    id: string
    knowledgeBaseId: string
    content: string
    metadata: JsonValue | null
    createdAt: Date
    _count: DocumentSnippetCountAggregateOutputType | null
    _min: DocumentSnippetMinAggregateOutputType | null
    _max: DocumentSnippetMaxAggregateOutputType | null
  }

  type GetDocumentSnippetGroupByPayload<T extends DocumentSnippetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentSnippetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentSnippetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentSnippetGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentSnippetGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSnippetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    knowledgeBaseId?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    knowledgeBase?: boolean | KnowledgeBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentSnippet"]>

  export type DocumentSnippetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    knowledgeBaseId?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    knowledgeBase?: boolean | KnowledgeBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentSnippet"]>

  export type DocumentSnippetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    knowledgeBaseId?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    knowledgeBase?: boolean | KnowledgeBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentSnippet"]>

  export type DocumentSnippetSelectScalar = {
    id?: boolean
    knowledgeBaseId?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type DocumentSnippetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "knowledgeBaseId" | "content" | "metadata" | "createdAt", ExtArgs["result"]["documentSnippet"]>
  export type DocumentSnippetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    knowledgeBase?: boolean | KnowledgeBaseDefaultArgs<ExtArgs>
  }
  export type DocumentSnippetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    knowledgeBase?: boolean | KnowledgeBaseDefaultArgs<ExtArgs>
  }
  export type DocumentSnippetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    knowledgeBase?: boolean | KnowledgeBaseDefaultArgs<ExtArgs>
  }

  export type $DocumentSnippetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentSnippet"
    objects: {
      knowledgeBase: Prisma.$KnowledgeBasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      knowledgeBaseId: string
      content: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["documentSnippet"]>
    composites: {}
  }

  type DocumentSnippetGetPayload<S extends boolean | null | undefined | DocumentSnippetDefaultArgs> = $Result.GetResult<Prisma.$DocumentSnippetPayload, S>

  type DocumentSnippetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentSnippetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentSnippetCountAggregateInputType | true
    }

  export interface DocumentSnippetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentSnippet'], meta: { name: 'DocumentSnippet' } }
    /**
     * Find zero or one DocumentSnippet that matches the filter.
     * @param {DocumentSnippetFindUniqueArgs} args - Arguments to find a DocumentSnippet
     * @example
     * // Get one DocumentSnippet
     * const documentSnippet = await prisma.documentSnippet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentSnippetFindUniqueArgs>(args: SelectSubset<T, DocumentSnippetFindUniqueArgs<ExtArgs>>): Prisma__DocumentSnippetClient<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentSnippet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentSnippetFindUniqueOrThrowArgs} args - Arguments to find a DocumentSnippet
     * @example
     * // Get one DocumentSnippet
     * const documentSnippet = await prisma.documentSnippet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentSnippetFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentSnippetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentSnippetClient<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentSnippet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentSnippetFindFirstArgs} args - Arguments to find a DocumentSnippet
     * @example
     * // Get one DocumentSnippet
     * const documentSnippet = await prisma.documentSnippet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentSnippetFindFirstArgs>(args?: SelectSubset<T, DocumentSnippetFindFirstArgs<ExtArgs>>): Prisma__DocumentSnippetClient<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentSnippet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentSnippetFindFirstOrThrowArgs} args - Arguments to find a DocumentSnippet
     * @example
     * // Get one DocumentSnippet
     * const documentSnippet = await prisma.documentSnippet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentSnippetFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentSnippetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentSnippetClient<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentSnippets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentSnippetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentSnippets
     * const documentSnippets = await prisma.documentSnippet.findMany()
     * 
     * // Get first 10 DocumentSnippets
     * const documentSnippets = await prisma.documentSnippet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentSnippetWithIdOnly = await prisma.documentSnippet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentSnippetFindManyArgs>(args?: SelectSubset<T, DocumentSnippetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentSnippet.
     * @param {DocumentSnippetCreateArgs} args - Arguments to create a DocumentSnippet.
     * @example
     * // Create one DocumentSnippet
     * const DocumentSnippet = await prisma.documentSnippet.create({
     *   data: {
     *     // ... data to create a DocumentSnippet
     *   }
     * })
     * 
     */
    create<T extends DocumentSnippetCreateArgs>(args: SelectSubset<T, DocumentSnippetCreateArgs<ExtArgs>>): Prisma__DocumentSnippetClient<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentSnippets.
     * @param {DocumentSnippetCreateManyArgs} args - Arguments to create many DocumentSnippets.
     * @example
     * // Create many DocumentSnippets
     * const documentSnippet = await prisma.documentSnippet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentSnippetCreateManyArgs>(args?: SelectSubset<T, DocumentSnippetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentSnippets and returns the data saved in the database.
     * @param {DocumentSnippetCreateManyAndReturnArgs} args - Arguments to create many DocumentSnippets.
     * @example
     * // Create many DocumentSnippets
     * const documentSnippet = await prisma.documentSnippet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentSnippets and only return the `id`
     * const documentSnippetWithIdOnly = await prisma.documentSnippet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentSnippetCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentSnippetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentSnippet.
     * @param {DocumentSnippetDeleteArgs} args - Arguments to delete one DocumentSnippet.
     * @example
     * // Delete one DocumentSnippet
     * const DocumentSnippet = await prisma.documentSnippet.delete({
     *   where: {
     *     // ... filter to delete one DocumentSnippet
     *   }
     * })
     * 
     */
    delete<T extends DocumentSnippetDeleteArgs>(args: SelectSubset<T, DocumentSnippetDeleteArgs<ExtArgs>>): Prisma__DocumentSnippetClient<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentSnippet.
     * @param {DocumentSnippetUpdateArgs} args - Arguments to update one DocumentSnippet.
     * @example
     * // Update one DocumentSnippet
     * const documentSnippet = await prisma.documentSnippet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentSnippetUpdateArgs>(args: SelectSubset<T, DocumentSnippetUpdateArgs<ExtArgs>>): Prisma__DocumentSnippetClient<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentSnippets.
     * @param {DocumentSnippetDeleteManyArgs} args - Arguments to filter DocumentSnippets to delete.
     * @example
     * // Delete a few DocumentSnippets
     * const { count } = await prisma.documentSnippet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentSnippetDeleteManyArgs>(args?: SelectSubset<T, DocumentSnippetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentSnippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentSnippetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentSnippets
     * const documentSnippet = await prisma.documentSnippet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentSnippetUpdateManyArgs>(args: SelectSubset<T, DocumentSnippetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentSnippets and returns the data updated in the database.
     * @param {DocumentSnippetUpdateManyAndReturnArgs} args - Arguments to update many DocumentSnippets.
     * @example
     * // Update many DocumentSnippets
     * const documentSnippet = await prisma.documentSnippet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentSnippets and only return the `id`
     * const documentSnippetWithIdOnly = await prisma.documentSnippet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentSnippetUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentSnippetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentSnippet.
     * @param {DocumentSnippetUpsertArgs} args - Arguments to update or create a DocumentSnippet.
     * @example
     * // Update or create a DocumentSnippet
     * const documentSnippet = await prisma.documentSnippet.upsert({
     *   create: {
     *     // ... data to create a DocumentSnippet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentSnippet we want to update
     *   }
     * })
     */
    upsert<T extends DocumentSnippetUpsertArgs>(args: SelectSubset<T, DocumentSnippetUpsertArgs<ExtArgs>>): Prisma__DocumentSnippetClient<$Result.GetResult<Prisma.$DocumentSnippetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentSnippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentSnippetCountArgs} args - Arguments to filter DocumentSnippets to count.
     * @example
     * // Count the number of DocumentSnippets
     * const count = await prisma.documentSnippet.count({
     *   where: {
     *     // ... the filter for the DocumentSnippets we want to count
     *   }
     * })
    **/
    count<T extends DocumentSnippetCountArgs>(
      args?: Subset<T, DocumentSnippetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentSnippetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentSnippet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentSnippetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentSnippetAggregateArgs>(args: Subset<T, DocumentSnippetAggregateArgs>): Prisma.PrismaPromise<GetDocumentSnippetAggregateType<T>>

    /**
     * Group by DocumentSnippet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentSnippetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentSnippetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentSnippetGroupByArgs['orderBy'] }
        : { orderBy?: DocumentSnippetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentSnippetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentSnippetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentSnippet model
   */
  readonly fields: DocumentSnippetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentSnippet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentSnippetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    knowledgeBase<T extends KnowledgeBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KnowledgeBaseDefaultArgs<ExtArgs>>): Prisma__KnowledgeBaseClient<$Result.GetResult<Prisma.$KnowledgeBasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentSnippet model
   */
  interface DocumentSnippetFieldRefs {
    readonly id: FieldRef<"DocumentSnippet", 'String'>
    readonly knowledgeBaseId: FieldRef<"DocumentSnippet", 'String'>
    readonly content: FieldRef<"DocumentSnippet", 'String'>
    readonly metadata: FieldRef<"DocumentSnippet", 'Json'>
    readonly createdAt: FieldRef<"DocumentSnippet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentSnippet findUnique
   */
  export type DocumentSnippetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    /**
     * Filter, which DocumentSnippet to fetch.
     */
    where: DocumentSnippetWhereUniqueInput
  }

  /**
   * DocumentSnippet findUniqueOrThrow
   */
  export type DocumentSnippetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    /**
     * Filter, which DocumentSnippet to fetch.
     */
    where: DocumentSnippetWhereUniqueInput
  }

  /**
   * DocumentSnippet findFirst
   */
  export type DocumentSnippetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    /**
     * Filter, which DocumentSnippet to fetch.
     */
    where?: DocumentSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentSnippets to fetch.
     */
    orderBy?: DocumentSnippetOrderByWithRelationInput | DocumentSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentSnippets.
     */
    cursor?: DocumentSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentSnippets.
     */
    distinct?: DocumentSnippetScalarFieldEnum | DocumentSnippetScalarFieldEnum[]
  }

  /**
   * DocumentSnippet findFirstOrThrow
   */
  export type DocumentSnippetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    /**
     * Filter, which DocumentSnippet to fetch.
     */
    where?: DocumentSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentSnippets to fetch.
     */
    orderBy?: DocumentSnippetOrderByWithRelationInput | DocumentSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentSnippets.
     */
    cursor?: DocumentSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentSnippets.
     */
    distinct?: DocumentSnippetScalarFieldEnum | DocumentSnippetScalarFieldEnum[]
  }

  /**
   * DocumentSnippet findMany
   */
  export type DocumentSnippetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    /**
     * Filter, which DocumentSnippets to fetch.
     */
    where?: DocumentSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentSnippets to fetch.
     */
    orderBy?: DocumentSnippetOrderByWithRelationInput | DocumentSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentSnippets.
     */
    cursor?: DocumentSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentSnippets.
     */
    distinct?: DocumentSnippetScalarFieldEnum | DocumentSnippetScalarFieldEnum[]
  }

  /**
   * DocumentSnippet create
   */
  export type DocumentSnippetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentSnippet.
     */
    data: XOR<DocumentSnippetCreateInput, DocumentSnippetUncheckedCreateInput>
  }

  /**
   * DocumentSnippet createMany
   */
  export type DocumentSnippetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentSnippets.
     */
    data: DocumentSnippetCreateManyInput | DocumentSnippetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentSnippet createManyAndReturn
   */
  export type DocumentSnippetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentSnippets.
     */
    data: DocumentSnippetCreateManyInput | DocumentSnippetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentSnippet update
   */
  export type DocumentSnippetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentSnippet.
     */
    data: XOR<DocumentSnippetUpdateInput, DocumentSnippetUncheckedUpdateInput>
    /**
     * Choose, which DocumentSnippet to update.
     */
    where: DocumentSnippetWhereUniqueInput
  }

  /**
   * DocumentSnippet updateMany
   */
  export type DocumentSnippetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentSnippets.
     */
    data: XOR<DocumentSnippetUpdateManyMutationInput, DocumentSnippetUncheckedUpdateManyInput>
    /**
     * Filter which DocumentSnippets to update
     */
    where?: DocumentSnippetWhereInput
    /**
     * Limit how many DocumentSnippets to update.
     */
    limit?: number
  }

  /**
   * DocumentSnippet updateManyAndReturn
   */
  export type DocumentSnippetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * The data used to update DocumentSnippets.
     */
    data: XOR<DocumentSnippetUpdateManyMutationInput, DocumentSnippetUncheckedUpdateManyInput>
    /**
     * Filter which DocumentSnippets to update
     */
    where?: DocumentSnippetWhereInput
    /**
     * Limit how many DocumentSnippets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentSnippet upsert
   */
  export type DocumentSnippetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentSnippet to update in case it exists.
     */
    where: DocumentSnippetWhereUniqueInput
    /**
     * In case the DocumentSnippet found by the `where` argument doesn't exist, create a new DocumentSnippet with this data.
     */
    create: XOR<DocumentSnippetCreateInput, DocumentSnippetUncheckedCreateInput>
    /**
     * In case the DocumentSnippet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentSnippetUpdateInput, DocumentSnippetUncheckedUpdateInput>
  }

  /**
   * DocumentSnippet delete
   */
  export type DocumentSnippetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
    /**
     * Filter which DocumentSnippet to delete.
     */
    where: DocumentSnippetWhereUniqueInput
  }

  /**
   * DocumentSnippet deleteMany
   */
  export type DocumentSnippetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentSnippets to delete
     */
    where?: DocumentSnippetWhereInput
    /**
     * Limit how many DocumentSnippets to delete.
     */
    limit?: number
  }

  /**
   * DocumentSnippet without action
   */
  export type DocumentSnippetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentSnippet
     */
    select?: DocumentSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentSnippet
     */
    omit?: DocumentSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentSnippetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusinessProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    companyDescription: 'companyDescription',
    supportTone: 'supportTone',
    refundPolicy: 'refundPolicy',
    deliveryPolicy: 'deliveryPolicy',
    businessHours: 'businessHours',
    faq: 'faq',
    escalationInstructions: 'escalationInstructions',
    brandVoiceExamples: 'brandVoiceExamples',
    restrictedPhrases: 'restrictedPhrases',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessProfileScalarFieldEnum = (typeof BusinessProfileScalarFieldEnum)[keyof typeof BusinessProfileScalarFieldEnum]


  export const AnalysisScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    originalMessage: 'originalMessage',
    category: 'category',
    urgency: 'urgency',
    sentiment: 'sentiment',
    summary: 'summary',
    suggestedReply: 'suggestedReply',
    recommendedAction: 'recommendedAction',
    confidence: 'confidence',
    resolved: 'resolved',
    responseTimeMinutes: 'responseTimeMinutes',
    createdAt: 'createdAt'
  };

  export type AnalysisScalarFieldEnum = (typeof AnalysisScalarFieldEnum)[keyof typeof AnalysisScalarFieldEnum]


  export const KnowledgeBaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type KnowledgeBaseScalarFieldEnum = (typeof KnowledgeBaseScalarFieldEnum)[keyof typeof KnowledgeBaseScalarFieldEnum]


  export const DocumentSnippetScalarFieldEnum: {
    id: 'id',
    knowledgeBaseId: 'knowledgeBaseId',
    content: 'content',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type DocumentSnippetScalarFieldEnum = (typeof DocumentSnippetScalarFieldEnum)[keyof typeof DocumentSnippetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    analyses?: AnalysisListRelationFilter
    businessProfile?: XOR<BusinessProfileNullableScalarRelationFilter, BusinessProfileWhereInput> | null
    knowledgeBases?: KnowledgeBaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    analyses?: AnalysisOrderByRelationAggregateInput
    businessProfile?: BusinessProfileOrderByWithRelationInput
    knowledgeBases?: KnowledgeBaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    analyses?: AnalysisListRelationFilter
    businessProfile?: XOR<BusinessProfileNullableScalarRelationFilter, BusinessProfileWhereInput> | null
    knowledgeBases?: KnowledgeBaseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BusinessProfileWhereInput = {
    AND?: BusinessProfileWhereInput | BusinessProfileWhereInput[]
    OR?: BusinessProfileWhereInput[]
    NOT?: BusinessProfileWhereInput | BusinessProfileWhereInput[]
    id?: StringFilter<"BusinessProfile"> | string
    userId?: StringFilter<"BusinessProfile"> | string
    companyName?: StringFilter<"BusinessProfile"> | string
    companyDescription?: StringNullableFilter<"BusinessProfile"> | string | null
    supportTone?: StringFilter<"BusinessProfile"> | string
    refundPolicy?: StringNullableFilter<"BusinessProfile"> | string | null
    deliveryPolicy?: StringNullableFilter<"BusinessProfile"> | string | null
    businessHours?: StringNullableFilter<"BusinessProfile"> | string | null
    faq?: StringNullableFilter<"BusinessProfile"> | string | null
    escalationInstructions?: StringNullableFilter<"BusinessProfile"> | string | null
    brandVoiceExamples?: StringNullableFilter<"BusinessProfile"> | string | null
    restrictedPhrases?: StringNullableFilter<"BusinessProfile"> | string | null
    createdAt?: DateTimeFilter<"BusinessProfile"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BusinessProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrderInput | SortOrder
    supportTone?: SortOrder
    refundPolicy?: SortOrderInput | SortOrder
    deliveryPolicy?: SortOrderInput | SortOrder
    businessHours?: SortOrderInput | SortOrder
    faq?: SortOrderInput | SortOrder
    escalationInstructions?: SortOrderInput | SortOrder
    brandVoiceExamples?: SortOrderInput | SortOrder
    restrictedPhrases?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BusinessProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BusinessProfileWhereInput | BusinessProfileWhereInput[]
    OR?: BusinessProfileWhereInput[]
    NOT?: BusinessProfileWhereInput | BusinessProfileWhereInput[]
    companyName?: StringFilter<"BusinessProfile"> | string
    companyDescription?: StringNullableFilter<"BusinessProfile"> | string | null
    supportTone?: StringFilter<"BusinessProfile"> | string
    refundPolicy?: StringNullableFilter<"BusinessProfile"> | string | null
    deliveryPolicy?: StringNullableFilter<"BusinessProfile"> | string | null
    businessHours?: StringNullableFilter<"BusinessProfile"> | string | null
    faq?: StringNullableFilter<"BusinessProfile"> | string | null
    escalationInstructions?: StringNullableFilter<"BusinessProfile"> | string | null
    brandVoiceExamples?: StringNullableFilter<"BusinessProfile"> | string | null
    restrictedPhrases?: StringNullableFilter<"BusinessProfile"> | string | null
    createdAt?: DateTimeFilter<"BusinessProfile"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BusinessProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrderInput | SortOrder
    supportTone?: SortOrder
    refundPolicy?: SortOrderInput | SortOrder
    deliveryPolicy?: SortOrderInput | SortOrder
    businessHours?: SortOrderInput | SortOrder
    faq?: SortOrderInput | SortOrder
    escalationInstructions?: SortOrderInput | SortOrder
    brandVoiceExamples?: SortOrderInput | SortOrder
    restrictedPhrases?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessProfileCountOrderByAggregateInput
    _max?: BusinessProfileMaxOrderByAggregateInput
    _min?: BusinessProfileMinOrderByAggregateInput
  }

  export type BusinessProfileScalarWhereWithAggregatesInput = {
    AND?: BusinessProfileScalarWhereWithAggregatesInput | BusinessProfileScalarWhereWithAggregatesInput[]
    OR?: BusinessProfileScalarWhereWithAggregatesInput[]
    NOT?: BusinessProfileScalarWhereWithAggregatesInput | BusinessProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusinessProfile"> | string
    userId?: StringWithAggregatesFilter<"BusinessProfile"> | string
    companyName?: StringWithAggregatesFilter<"BusinessProfile"> | string
    companyDescription?: StringNullableWithAggregatesFilter<"BusinessProfile"> | string | null
    supportTone?: StringWithAggregatesFilter<"BusinessProfile"> | string
    refundPolicy?: StringNullableWithAggregatesFilter<"BusinessProfile"> | string | null
    deliveryPolicy?: StringNullableWithAggregatesFilter<"BusinessProfile"> | string | null
    businessHours?: StringNullableWithAggregatesFilter<"BusinessProfile"> | string | null
    faq?: StringNullableWithAggregatesFilter<"BusinessProfile"> | string | null
    escalationInstructions?: StringNullableWithAggregatesFilter<"BusinessProfile"> | string | null
    brandVoiceExamples?: StringNullableWithAggregatesFilter<"BusinessProfile"> | string | null
    restrictedPhrases?: StringNullableWithAggregatesFilter<"BusinessProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BusinessProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessProfile"> | Date | string
  }

  export type AnalysisWhereInput = {
    AND?: AnalysisWhereInput | AnalysisWhereInput[]
    OR?: AnalysisWhereInput[]
    NOT?: AnalysisWhereInput | AnalysisWhereInput[]
    id?: StringFilter<"Analysis"> | string
    userId?: StringFilter<"Analysis"> | string
    originalMessage?: StringFilter<"Analysis"> | string
    category?: StringFilter<"Analysis"> | string
    urgency?: StringFilter<"Analysis"> | string
    sentiment?: StringFilter<"Analysis"> | string
    summary?: StringFilter<"Analysis"> | string
    suggestedReply?: StringFilter<"Analysis"> | string
    recommendedAction?: StringFilter<"Analysis"> | string
    confidence?: IntNullableFilter<"Analysis"> | number | null
    resolved?: BoolFilter<"Analysis"> | boolean
    responseTimeMinutes?: IntNullableFilter<"Analysis"> | number | null
    createdAt?: DateTimeFilter<"Analysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnalysisOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalMessage?: SortOrder
    category?: SortOrder
    urgency?: SortOrder
    sentiment?: SortOrder
    summary?: SortOrder
    suggestedReply?: SortOrder
    recommendedAction?: SortOrder
    confidence?: SortOrderInput | SortOrder
    resolved?: SortOrder
    responseTimeMinutes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisWhereInput | AnalysisWhereInput[]
    OR?: AnalysisWhereInput[]
    NOT?: AnalysisWhereInput | AnalysisWhereInput[]
    userId?: StringFilter<"Analysis"> | string
    originalMessage?: StringFilter<"Analysis"> | string
    category?: StringFilter<"Analysis"> | string
    urgency?: StringFilter<"Analysis"> | string
    sentiment?: StringFilter<"Analysis"> | string
    summary?: StringFilter<"Analysis"> | string
    suggestedReply?: StringFilter<"Analysis"> | string
    recommendedAction?: StringFilter<"Analysis"> | string
    confidence?: IntNullableFilter<"Analysis"> | number | null
    resolved?: BoolFilter<"Analysis"> | boolean
    responseTimeMinutes?: IntNullableFilter<"Analysis"> | number | null
    createdAt?: DateTimeFilter<"Analysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalMessage?: SortOrder
    category?: SortOrder
    urgency?: SortOrder
    sentiment?: SortOrder
    summary?: SortOrder
    suggestedReply?: SortOrder
    recommendedAction?: SortOrder
    confidence?: SortOrderInput | SortOrder
    resolved?: SortOrder
    responseTimeMinutes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalysisCountOrderByAggregateInput
    _avg?: AnalysisAvgOrderByAggregateInput
    _max?: AnalysisMaxOrderByAggregateInput
    _min?: AnalysisMinOrderByAggregateInput
    _sum?: AnalysisSumOrderByAggregateInput
  }

  export type AnalysisScalarWhereWithAggregatesInput = {
    AND?: AnalysisScalarWhereWithAggregatesInput | AnalysisScalarWhereWithAggregatesInput[]
    OR?: AnalysisScalarWhereWithAggregatesInput[]
    NOT?: AnalysisScalarWhereWithAggregatesInput | AnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analysis"> | string
    userId?: StringWithAggregatesFilter<"Analysis"> | string
    originalMessage?: StringWithAggregatesFilter<"Analysis"> | string
    category?: StringWithAggregatesFilter<"Analysis"> | string
    urgency?: StringWithAggregatesFilter<"Analysis"> | string
    sentiment?: StringWithAggregatesFilter<"Analysis"> | string
    summary?: StringWithAggregatesFilter<"Analysis"> | string
    suggestedReply?: StringWithAggregatesFilter<"Analysis"> | string
    recommendedAction?: StringWithAggregatesFilter<"Analysis"> | string
    confidence?: IntNullableWithAggregatesFilter<"Analysis"> | number | null
    resolved?: BoolWithAggregatesFilter<"Analysis"> | boolean
    responseTimeMinutes?: IntNullableWithAggregatesFilter<"Analysis"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Analysis"> | Date | string
  }

  export type KnowledgeBaseWhereInput = {
    AND?: KnowledgeBaseWhereInput | KnowledgeBaseWhereInput[]
    OR?: KnowledgeBaseWhereInput[]
    NOT?: KnowledgeBaseWhereInput | KnowledgeBaseWhereInput[]
    id?: StringFilter<"KnowledgeBase"> | string
    userId?: StringFilter<"KnowledgeBase"> | string
    name?: StringFilter<"KnowledgeBase"> | string
    description?: StringNullableFilter<"KnowledgeBase"> | string | null
    createdAt?: DateTimeFilter<"KnowledgeBase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    snippets?: DocumentSnippetListRelationFilter
  }

  export type KnowledgeBaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    snippets?: DocumentSnippetOrderByRelationAggregateInput
  }

  export type KnowledgeBaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KnowledgeBaseWhereInput | KnowledgeBaseWhereInput[]
    OR?: KnowledgeBaseWhereInput[]
    NOT?: KnowledgeBaseWhereInput | KnowledgeBaseWhereInput[]
    userId?: StringFilter<"KnowledgeBase"> | string
    name?: StringFilter<"KnowledgeBase"> | string
    description?: StringNullableFilter<"KnowledgeBase"> | string | null
    createdAt?: DateTimeFilter<"KnowledgeBase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    snippets?: DocumentSnippetListRelationFilter
  }, "id">

  export type KnowledgeBaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: KnowledgeBaseCountOrderByAggregateInput
    _max?: KnowledgeBaseMaxOrderByAggregateInput
    _min?: KnowledgeBaseMinOrderByAggregateInput
  }

  export type KnowledgeBaseScalarWhereWithAggregatesInput = {
    AND?: KnowledgeBaseScalarWhereWithAggregatesInput | KnowledgeBaseScalarWhereWithAggregatesInput[]
    OR?: KnowledgeBaseScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeBaseScalarWhereWithAggregatesInput | KnowledgeBaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    userId?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    name?: StringWithAggregatesFilter<"KnowledgeBase"> | string
    description?: StringNullableWithAggregatesFilter<"KnowledgeBase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KnowledgeBase"> | Date | string
  }

  export type DocumentSnippetWhereInput = {
    AND?: DocumentSnippetWhereInput | DocumentSnippetWhereInput[]
    OR?: DocumentSnippetWhereInput[]
    NOT?: DocumentSnippetWhereInput | DocumentSnippetWhereInput[]
    id?: StringFilter<"DocumentSnippet"> | string
    knowledgeBaseId?: StringFilter<"DocumentSnippet"> | string
    content?: StringFilter<"DocumentSnippet"> | string
    metadata?: JsonNullableFilter<"DocumentSnippet">
    createdAt?: DateTimeFilter<"DocumentSnippet"> | Date | string
    knowledgeBase?: XOR<KnowledgeBaseScalarRelationFilter, KnowledgeBaseWhereInput>
  }

  export type DocumentSnippetOrderByWithRelationInput = {
    id?: SortOrder
    knowledgeBaseId?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    knowledgeBase?: KnowledgeBaseOrderByWithRelationInput
  }

  export type DocumentSnippetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentSnippetWhereInput | DocumentSnippetWhereInput[]
    OR?: DocumentSnippetWhereInput[]
    NOT?: DocumentSnippetWhereInput | DocumentSnippetWhereInput[]
    knowledgeBaseId?: StringFilter<"DocumentSnippet"> | string
    content?: StringFilter<"DocumentSnippet"> | string
    metadata?: JsonNullableFilter<"DocumentSnippet">
    createdAt?: DateTimeFilter<"DocumentSnippet"> | Date | string
    knowledgeBase?: XOR<KnowledgeBaseScalarRelationFilter, KnowledgeBaseWhereInput>
  }, "id">

  export type DocumentSnippetOrderByWithAggregationInput = {
    id?: SortOrder
    knowledgeBaseId?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DocumentSnippetCountOrderByAggregateInput
    _max?: DocumentSnippetMaxOrderByAggregateInput
    _min?: DocumentSnippetMinOrderByAggregateInput
  }

  export type DocumentSnippetScalarWhereWithAggregatesInput = {
    AND?: DocumentSnippetScalarWhereWithAggregatesInput | DocumentSnippetScalarWhereWithAggregatesInput[]
    OR?: DocumentSnippetScalarWhereWithAggregatesInput[]
    NOT?: DocumentSnippetScalarWhereWithAggregatesInput | DocumentSnippetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentSnippet"> | string
    knowledgeBaseId?: StringWithAggregatesFilter<"DocumentSnippet"> | string
    content?: StringWithAggregatesFilter<"DocumentSnippet"> | string
    metadata?: JsonNullableWithAggregatesFilter<"DocumentSnippet">
    createdAt?: DateTimeWithAggregatesFilter<"DocumentSnippet"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    knowledgeBases?: KnowledgeBaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    knowledgeBases?: KnowledgeBaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    knowledgeBases?: KnowledgeBaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    knowledgeBases?: KnowledgeBaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessProfileCreateInput = {
    id?: string
    companyName: string
    companyDescription?: string | null
    supportTone: string
    refundPolicy?: string | null
    deliveryPolicy?: string | null
    businessHours?: string | null
    faq?: string | null
    escalationInstructions?: string | null
    brandVoiceExamples?: string | null
    restrictedPhrases?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBusinessProfileInput
  }

  export type BusinessProfileUncheckedCreateInput = {
    id?: string
    userId: string
    companyName: string
    companyDescription?: string | null
    supportTone: string
    refundPolicy?: string | null
    deliveryPolicy?: string | null
    businessHours?: string | null
    faq?: string | null
    escalationInstructions?: string | null
    brandVoiceExamples?: string | null
    restrictedPhrases?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    supportTone?: StringFieldUpdateOperationsInput | string
    refundPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    businessHours?: NullableStringFieldUpdateOperationsInput | string | null
    faq?: NullableStringFieldUpdateOperationsInput | string | null
    escalationInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    brandVoiceExamples?: NullableStringFieldUpdateOperationsInput | string | null
    restrictedPhrases?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusinessProfileNestedInput
  }

  export type BusinessProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    supportTone?: StringFieldUpdateOperationsInput | string
    refundPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    businessHours?: NullableStringFieldUpdateOperationsInput | string | null
    faq?: NullableStringFieldUpdateOperationsInput | string | null
    escalationInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    brandVoiceExamples?: NullableStringFieldUpdateOperationsInput | string | null
    restrictedPhrases?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessProfileCreateManyInput = {
    id?: string
    userId: string
    companyName: string
    companyDescription?: string | null
    supportTone: string
    refundPolicy?: string | null
    deliveryPolicy?: string | null
    businessHours?: string | null
    faq?: string | null
    escalationInstructions?: string | null
    brandVoiceExamples?: string | null
    restrictedPhrases?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    supportTone?: StringFieldUpdateOperationsInput | string
    refundPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    businessHours?: NullableStringFieldUpdateOperationsInput | string | null
    faq?: NullableStringFieldUpdateOperationsInput | string | null
    escalationInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    brandVoiceExamples?: NullableStringFieldUpdateOperationsInput | string | null
    restrictedPhrases?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    supportTone?: StringFieldUpdateOperationsInput | string
    refundPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    businessHours?: NullableStringFieldUpdateOperationsInput | string | null
    faq?: NullableStringFieldUpdateOperationsInput | string | null
    escalationInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    brandVoiceExamples?: NullableStringFieldUpdateOperationsInput | string | null
    restrictedPhrases?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCreateInput = {
    id?: string
    originalMessage: string
    category: string
    urgency: string
    sentiment: string
    summary: string
    suggestedReply: string
    recommendedAction: string
    confidence?: number | null
    resolved?: boolean
    responseTimeMinutes?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAnalysesInput
  }

  export type AnalysisUncheckedCreateInput = {
    id?: string
    userId: string
    originalMessage: string
    category: string
    urgency: string
    sentiment: string
    summary: string
    suggestedReply: string
    recommendedAction: string
    confidence?: number | null
    resolved?: boolean
    responseTimeMinutes?: number | null
    createdAt?: Date | string
  }

  export type AnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalMessage?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    suggestedReply?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type AnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalMessage?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    suggestedReply?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCreateManyInput = {
    id?: string
    userId: string
    originalMessage: string
    category: string
    urgency: string
    sentiment: string
    summary: string
    suggestedReply: string
    recommendedAction: string
    confidence?: number | null
    resolved?: boolean
    responseTimeMinutes?: number | null
    createdAt?: Date | string
  }

  export type AnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalMessage?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    suggestedReply?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalMessage?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    suggestedReply?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeBaseCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutKnowledgeBasesInput
    snippets?: DocumentSnippetCreateNestedManyWithoutKnowledgeBaseInput
  }

  export type KnowledgeBaseUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    snippets?: DocumentSnippetUncheckedCreateNestedManyWithoutKnowledgeBaseInput
  }

  export type KnowledgeBaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutKnowledgeBasesNestedInput
    snippets?: DocumentSnippetUpdateManyWithoutKnowledgeBaseNestedInput
  }

  export type KnowledgeBaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snippets?: DocumentSnippetUncheckedUpdateManyWithoutKnowledgeBaseNestedInput
  }

  export type KnowledgeBaseCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type KnowledgeBaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeBaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentSnippetCreateInput = {
    id?: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    knowledgeBase: KnowledgeBaseCreateNestedOneWithoutSnippetsInput
  }

  export type DocumentSnippetUncheckedCreateInput = {
    id?: string
    knowledgeBaseId: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentSnippetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    knowledgeBase?: KnowledgeBaseUpdateOneRequiredWithoutSnippetsNestedInput
  }

  export type DocumentSnippetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    knowledgeBaseId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentSnippetCreateManyInput = {
    id?: string
    knowledgeBaseId: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentSnippetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentSnippetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    knowledgeBaseId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnalysisListRelationFilter = {
    every?: AnalysisWhereInput
    some?: AnalysisWhereInput
    none?: AnalysisWhereInput
  }

  export type BusinessProfileNullableScalarRelationFilter = {
    is?: BusinessProfileWhereInput | null
    isNot?: BusinessProfileWhereInput | null
  }

  export type KnowledgeBaseListRelationFilter = {
    every?: KnowledgeBaseWhereInput
    some?: KnowledgeBaseWhereInput
    none?: KnowledgeBaseWhereInput
  }

  export type AnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeBaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BusinessProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrder
    supportTone?: SortOrder
    refundPolicy?: SortOrder
    deliveryPolicy?: SortOrder
    businessHours?: SortOrder
    faq?: SortOrder
    escalationInstructions?: SortOrder
    brandVoiceExamples?: SortOrder
    restrictedPhrases?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrder
    supportTone?: SortOrder
    refundPolicy?: SortOrder
    deliveryPolicy?: SortOrder
    businessHours?: SortOrder
    faq?: SortOrder
    escalationInstructions?: SortOrder
    brandVoiceExamples?: SortOrder
    restrictedPhrases?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrder
    supportTone?: SortOrder
    refundPolicy?: SortOrder
    deliveryPolicy?: SortOrder
    businessHours?: SortOrder
    faq?: SortOrder
    escalationInstructions?: SortOrder
    brandVoiceExamples?: SortOrder
    restrictedPhrases?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalMessage?: SortOrder
    category?: SortOrder
    urgency?: SortOrder
    sentiment?: SortOrder
    summary?: SortOrder
    suggestedReply?: SortOrder
    recommendedAction?: SortOrder
    confidence?: SortOrder
    resolved?: SortOrder
    responseTimeMinutes?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisAvgOrderByAggregateInput = {
    confidence?: SortOrder
    responseTimeMinutes?: SortOrder
  }

  export type AnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalMessage?: SortOrder
    category?: SortOrder
    urgency?: SortOrder
    sentiment?: SortOrder
    summary?: SortOrder
    suggestedReply?: SortOrder
    recommendedAction?: SortOrder
    confidence?: SortOrder
    resolved?: SortOrder
    responseTimeMinutes?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalMessage?: SortOrder
    category?: SortOrder
    urgency?: SortOrder
    sentiment?: SortOrder
    summary?: SortOrder
    suggestedReply?: SortOrder
    recommendedAction?: SortOrder
    confidence?: SortOrder
    resolved?: SortOrder
    responseTimeMinutes?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisSumOrderByAggregateInput = {
    confidence?: SortOrder
    responseTimeMinutes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DocumentSnippetListRelationFilter = {
    every?: DocumentSnippetWhereInput
    some?: DocumentSnippetWhereInput
    none?: DocumentSnippetWhereInput
  }

  export type DocumentSnippetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeBaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type KnowledgeBaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type KnowledgeBaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type KnowledgeBaseScalarRelationFilter = {
    is?: KnowledgeBaseWhereInput
    isNot?: KnowledgeBaseWhereInput
  }

  export type DocumentSnippetCountOrderByAggregateInput = {
    id?: SortOrder
    knowledgeBaseId?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentSnippetMaxOrderByAggregateInput = {
    id?: SortOrder
    knowledgeBaseId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentSnippetMinOrderByAggregateInput = {
    id?: SortOrder
    knowledgeBaseId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type BusinessProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutUserInput
    connect?: BusinessProfileWhereUniqueInput
  }

  export type KnowledgeBaseCreateNestedManyWithoutUserInput = {
    create?: XOR<KnowledgeBaseCreateWithoutUserInput, KnowledgeBaseUncheckedCreateWithoutUserInput> | KnowledgeBaseCreateWithoutUserInput[] | KnowledgeBaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KnowledgeBaseCreateOrConnectWithoutUserInput | KnowledgeBaseCreateOrConnectWithoutUserInput[]
    createMany?: KnowledgeBaseCreateManyUserInputEnvelope
    connect?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
  }

  export type AnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type BusinessProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutUserInput
    connect?: BusinessProfileWhereUniqueInput
  }

  export type KnowledgeBaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KnowledgeBaseCreateWithoutUserInput, KnowledgeBaseUncheckedCreateWithoutUserInput> | KnowledgeBaseCreateWithoutUserInput[] | KnowledgeBaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KnowledgeBaseCreateOrConnectWithoutUserInput | KnowledgeBaseCreateOrConnectWithoutUserInput[]
    createMany?: KnowledgeBaseCreateManyUserInputEnvelope
    connect?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutUserInput | AnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutUserInput | AnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutUserInput | AnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type BusinessProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutUserInput
    upsert?: BusinessProfileUpsertWithoutUserInput
    disconnect?: BusinessProfileWhereInput | boolean
    delete?: BusinessProfileWhereInput | boolean
    connect?: BusinessProfileWhereUniqueInput
    update?: XOR<XOR<BusinessProfileUpdateToOneWithWhereWithoutUserInput, BusinessProfileUpdateWithoutUserInput>, BusinessProfileUncheckedUpdateWithoutUserInput>
  }

  export type KnowledgeBaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<KnowledgeBaseCreateWithoutUserInput, KnowledgeBaseUncheckedCreateWithoutUserInput> | KnowledgeBaseCreateWithoutUserInput[] | KnowledgeBaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KnowledgeBaseCreateOrConnectWithoutUserInput | KnowledgeBaseCreateOrConnectWithoutUserInput[]
    upsert?: KnowledgeBaseUpsertWithWhereUniqueWithoutUserInput | KnowledgeBaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KnowledgeBaseCreateManyUserInputEnvelope
    set?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
    disconnect?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
    delete?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
    connect?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
    update?: KnowledgeBaseUpdateWithWhereUniqueWithoutUserInput | KnowledgeBaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KnowledgeBaseUpdateManyWithWhereWithoutUserInput | KnowledgeBaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KnowledgeBaseScalarWhereInput | KnowledgeBaseScalarWhereInput[]
  }

  export type AnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutUserInput | AnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutUserInput | AnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutUserInput | AnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type BusinessProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutUserInput
    upsert?: BusinessProfileUpsertWithoutUserInput
    disconnect?: BusinessProfileWhereInput | boolean
    delete?: BusinessProfileWhereInput | boolean
    connect?: BusinessProfileWhereUniqueInput
    update?: XOR<XOR<BusinessProfileUpdateToOneWithWhereWithoutUserInput, BusinessProfileUpdateWithoutUserInput>, BusinessProfileUncheckedUpdateWithoutUserInput>
  }

  export type KnowledgeBaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KnowledgeBaseCreateWithoutUserInput, KnowledgeBaseUncheckedCreateWithoutUserInput> | KnowledgeBaseCreateWithoutUserInput[] | KnowledgeBaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KnowledgeBaseCreateOrConnectWithoutUserInput | KnowledgeBaseCreateOrConnectWithoutUserInput[]
    upsert?: KnowledgeBaseUpsertWithWhereUniqueWithoutUserInput | KnowledgeBaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KnowledgeBaseCreateManyUserInputEnvelope
    set?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
    disconnect?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
    delete?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
    connect?: KnowledgeBaseWhereUniqueInput | KnowledgeBaseWhereUniqueInput[]
    update?: KnowledgeBaseUpdateWithWhereUniqueWithoutUserInput | KnowledgeBaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KnowledgeBaseUpdateManyWithWhereWithoutUserInput | KnowledgeBaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KnowledgeBaseScalarWhereInput | KnowledgeBaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBusinessProfileInput = {
    create?: XOR<UserCreateWithoutBusinessProfileInput, UserUncheckedCreateWithoutBusinessProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutBusinessProfileNestedInput = {
    create?: XOR<UserCreateWithoutBusinessProfileInput, UserUncheckedCreateWithoutBusinessProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessProfileInput
    upsert?: UserUpsertWithoutBusinessProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusinessProfileInput, UserUpdateWithoutBusinessProfileInput>, UserUncheckedUpdateWithoutBusinessProfileInput>
  }

  export type UserCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAnalysesNestedInput = {
    create?: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysesInput
    upsert?: UserUpsertWithoutAnalysesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalysesInput, UserUpdateWithoutAnalysesInput>, UserUncheckedUpdateWithoutAnalysesInput>
  }

  export type UserCreateNestedOneWithoutKnowledgeBasesInput = {
    create?: XOR<UserCreateWithoutKnowledgeBasesInput, UserUncheckedCreateWithoutKnowledgeBasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutKnowledgeBasesInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentSnippetCreateNestedManyWithoutKnowledgeBaseInput = {
    create?: XOR<DocumentSnippetCreateWithoutKnowledgeBaseInput, DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput> | DocumentSnippetCreateWithoutKnowledgeBaseInput[] | DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput[]
    connectOrCreate?: DocumentSnippetCreateOrConnectWithoutKnowledgeBaseInput | DocumentSnippetCreateOrConnectWithoutKnowledgeBaseInput[]
    createMany?: DocumentSnippetCreateManyKnowledgeBaseInputEnvelope
    connect?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
  }

  export type DocumentSnippetUncheckedCreateNestedManyWithoutKnowledgeBaseInput = {
    create?: XOR<DocumentSnippetCreateWithoutKnowledgeBaseInput, DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput> | DocumentSnippetCreateWithoutKnowledgeBaseInput[] | DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput[]
    connectOrCreate?: DocumentSnippetCreateOrConnectWithoutKnowledgeBaseInput | DocumentSnippetCreateOrConnectWithoutKnowledgeBaseInput[]
    createMany?: DocumentSnippetCreateManyKnowledgeBaseInputEnvelope
    connect?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutKnowledgeBasesNestedInput = {
    create?: XOR<UserCreateWithoutKnowledgeBasesInput, UserUncheckedCreateWithoutKnowledgeBasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutKnowledgeBasesInput
    upsert?: UserUpsertWithoutKnowledgeBasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKnowledgeBasesInput, UserUpdateWithoutKnowledgeBasesInput>, UserUncheckedUpdateWithoutKnowledgeBasesInput>
  }

  export type DocumentSnippetUpdateManyWithoutKnowledgeBaseNestedInput = {
    create?: XOR<DocumentSnippetCreateWithoutKnowledgeBaseInput, DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput> | DocumentSnippetCreateWithoutKnowledgeBaseInput[] | DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput[]
    connectOrCreate?: DocumentSnippetCreateOrConnectWithoutKnowledgeBaseInput | DocumentSnippetCreateOrConnectWithoutKnowledgeBaseInput[]
    upsert?: DocumentSnippetUpsertWithWhereUniqueWithoutKnowledgeBaseInput | DocumentSnippetUpsertWithWhereUniqueWithoutKnowledgeBaseInput[]
    createMany?: DocumentSnippetCreateManyKnowledgeBaseInputEnvelope
    set?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
    disconnect?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
    delete?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
    connect?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
    update?: DocumentSnippetUpdateWithWhereUniqueWithoutKnowledgeBaseInput | DocumentSnippetUpdateWithWhereUniqueWithoutKnowledgeBaseInput[]
    updateMany?: DocumentSnippetUpdateManyWithWhereWithoutKnowledgeBaseInput | DocumentSnippetUpdateManyWithWhereWithoutKnowledgeBaseInput[]
    deleteMany?: DocumentSnippetScalarWhereInput | DocumentSnippetScalarWhereInput[]
  }

  export type DocumentSnippetUncheckedUpdateManyWithoutKnowledgeBaseNestedInput = {
    create?: XOR<DocumentSnippetCreateWithoutKnowledgeBaseInput, DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput> | DocumentSnippetCreateWithoutKnowledgeBaseInput[] | DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput[]
    connectOrCreate?: DocumentSnippetCreateOrConnectWithoutKnowledgeBaseInput | DocumentSnippetCreateOrConnectWithoutKnowledgeBaseInput[]
    upsert?: DocumentSnippetUpsertWithWhereUniqueWithoutKnowledgeBaseInput | DocumentSnippetUpsertWithWhereUniqueWithoutKnowledgeBaseInput[]
    createMany?: DocumentSnippetCreateManyKnowledgeBaseInputEnvelope
    set?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
    disconnect?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
    delete?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
    connect?: DocumentSnippetWhereUniqueInput | DocumentSnippetWhereUniqueInput[]
    update?: DocumentSnippetUpdateWithWhereUniqueWithoutKnowledgeBaseInput | DocumentSnippetUpdateWithWhereUniqueWithoutKnowledgeBaseInput[]
    updateMany?: DocumentSnippetUpdateManyWithWhereWithoutKnowledgeBaseInput | DocumentSnippetUpdateManyWithWhereWithoutKnowledgeBaseInput[]
    deleteMany?: DocumentSnippetScalarWhereInput | DocumentSnippetScalarWhereInput[]
  }

  export type KnowledgeBaseCreateNestedOneWithoutSnippetsInput = {
    create?: XOR<KnowledgeBaseCreateWithoutSnippetsInput, KnowledgeBaseUncheckedCreateWithoutSnippetsInput>
    connectOrCreate?: KnowledgeBaseCreateOrConnectWithoutSnippetsInput
    connect?: KnowledgeBaseWhereUniqueInput
  }

  export type KnowledgeBaseUpdateOneRequiredWithoutSnippetsNestedInput = {
    create?: XOR<KnowledgeBaseCreateWithoutSnippetsInput, KnowledgeBaseUncheckedCreateWithoutSnippetsInput>
    connectOrCreate?: KnowledgeBaseCreateOrConnectWithoutSnippetsInput
    upsert?: KnowledgeBaseUpsertWithoutSnippetsInput
    connect?: KnowledgeBaseWhereUniqueInput
    update?: XOR<XOR<KnowledgeBaseUpdateToOneWithWhereWithoutSnippetsInput, KnowledgeBaseUpdateWithoutSnippetsInput>, KnowledgeBaseUncheckedUpdateWithoutSnippetsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnalysisCreateWithoutUserInput = {
    id?: string
    originalMessage: string
    category: string
    urgency: string
    sentiment: string
    summary: string
    suggestedReply: string
    recommendedAction: string
    confidence?: number | null
    resolved?: boolean
    responseTimeMinutes?: number | null
    createdAt?: Date | string
  }

  export type AnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    originalMessage: string
    category: string
    urgency: string
    sentiment: string
    summary: string
    suggestedReply: string
    recommendedAction: string
    confidence?: number | null
    resolved?: boolean
    responseTimeMinutes?: number | null
    createdAt?: Date | string
  }

  export type AnalysisCreateOrConnectWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    create: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput>
  }

  export type AnalysisCreateManyUserInputEnvelope = {
    data: AnalysisCreateManyUserInput | AnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BusinessProfileCreateWithoutUserInput = {
    id?: string
    companyName: string
    companyDescription?: string | null
    supportTone: string
    refundPolicy?: string | null
    deliveryPolicy?: string | null
    businessHours?: string | null
    faq?: string | null
    escalationInstructions?: string | null
    brandVoiceExamples?: string | null
    restrictedPhrases?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessProfileUncheckedCreateWithoutUserInput = {
    id?: string
    companyName: string
    companyDescription?: string | null
    supportTone: string
    refundPolicy?: string | null
    deliveryPolicy?: string | null
    businessHours?: string | null
    faq?: string | null
    escalationInstructions?: string | null
    brandVoiceExamples?: string | null
    restrictedPhrases?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessProfileCreateOrConnectWithoutUserInput = {
    where: BusinessProfileWhereUniqueInput
    create: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
  }

  export type KnowledgeBaseCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    snippets?: DocumentSnippetCreateNestedManyWithoutKnowledgeBaseInput
  }

  export type KnowledgeBaseUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    snippets?: DocumentSnippetUncheckedCreateNestedManyWithoutKnowledgeBaseInput
  }

  export type KnowledgeBaseCreateOrConnectWithoutUserInput = {
    where: KnowledgeBaseWhereUniqueInput
    create: XOR<KnowledgeBaseCreateWithoutUserInput, KnowledgeBaseUncheckedCreateWithoutUserInput>
  }

  export type KnowledgeBaseCreateManyUserInputEnvelope = {
    data: KnowledgeBaseCreateManyUserInput | KnowledgeBaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    update: XOR<AnalysisUpdateWithoutUserInput, AnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput>
  }

  export type AnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    data: XOR<AnalysisUpdateWithoutUserInput, AnalysisUncheckedUpdateWithoutUserInput>
  }

  export type AnalysisUpdateManyWithWhereWithoutUserInput = {
    where: AnalysisScalarWhereInput
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalysisScalarWhereInput = {
    AND?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
    OR?: AnalysisScalarWhereInput[]
    NOT?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
    id?: StringFilter<"Analysis"> | string
    userId?: StringFilter<"Analysis"> | string
    originalMessage?: StringFilter<"Analysis"> | string
    category?: StringFilter<"Analysis"> | string
    urgency?: StringFilter<"Analysis"> | string
    sentiment?: StringFilter<"Analysis"> | string
    summary?: StringFilter<"Analysis"> | string
    suggestedReply?: StringFilter<"Analysis"> | string
    recommendedAction?: StringFilter<"Analysis"> | string
    confidence?: IntNullableFilter<"Analysis"> | number | null
    resolved?: BoolFilter<"Analysis"> | boolean
    responseTimeMinutes?: IntNullableFilter<"Analysis"> | number | null
    createdAt?: DateTimeFilter<"Analysis"> | Date | string
  }

  export type BusinessProfileUpsertWithoutUserInput = {
    update: XOR<BusinessProfileUpdateWithoutUserInput, BusinessProfileUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    where?: BusinessProfileWhereInput
  }

  export type BusinessProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: BusinessProfileWhereInput
    data: XOR<BusinessProfileUpdateWithoutUserInput, BusinessProfileUncheckedUpdateWithoutUserInput>
  }

  export type BusinessProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    supportTone?: StringFieldUpdateOperationsInput | string
    refundPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    businessHours?: NullableStringFieldUpdateOperationsInput | string | null
    faq?: NullableStringFieldUpdateOperationsInput | string | null
    escalationInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    brandVoiceExamples?: NullableStringFieldUpdateOperationsInput | string | null
    restrictedPhrases?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    supportTone?: StringFieldUpdateOperationsInput | string
    refundPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    businessHours?: NullableStringFieldUpdateOperationsInput | string | null
    faq?: NullableStringFieldUpdateOperationsInput | string | null
    escalationInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    brandVoiceExamples?: NullableStringFieldUpdateOperationsInput | string | null
    restrictedPhrases?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeBaseUpsertWithWhereUniqueWithoutUserInput = {
    where: KnowledgeBaseWhereUniqueInput
    update: XOR<KnowledgeBaseUpdateWithoutUserInput, KnowledgeBaseUncheckedUpdateWithoutUserInput>
    create: XOR<KnowledgeBaseCreateWithoutUserInput, KnowledgeBaseUncheckedCreateWithoutUserInput>
  }

  export type KnowledgeBaseUpdateWithWhereUniqueWithoutUserInput = {
    where: KnowledgeBaseWhereUniqueInput
    data: XOR<KnowledgeBaseUpdateWithoutUserInput, KnowledgeBaseUncheckedUpdateWithoutUserInput>
  }

  export type KnowledgeBaseUpdateManyWithWhereWithoutUserInput = {
    where: KnowledgeBaseScalarWhereInput
    data: XOR<KnowledgeBaseUpdateManyMutationInput, KnowledgeBaseUncheckedUpdateManyWithoutUserInput>
  }

  export type KnowledgeBaseScalarWhereInput = {
    AND?: KnowledgeBaseScalarWhereInput | KnowledgeBaseScalarWhereInput[]
    OR?: KnowledgeBaseScalarWhereInput[]
    NOT?: KnowledgeBaseScalarWhereInput | KnowledgeBaseScalarWhereInput[]
    id?: StringFilter<"KnowledgeBase"> | string
    userId?: StringFilter<"KnowledgeBase"> | string
    name?: StringFilter<"KnowledgeBase"> | string
    description?: StringNullableFilter<"KnowledgeBase"> | string | null
    createdAt?: DateTimeFilter<"KnowledgeBase"> | Date | string
  }

  export type UserCreateWithoutBusinessProfileInput = {
    id?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    knowledgeBases?: KnowledgeBaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBusinessProfileInput = {
    id?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    knowledgeBases?: KnowledgeBaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBusinessProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessProfileInput, UserUncheckedCreateWithoutBusinessProfileInput>
  }

  export type UserUpsertWithoutBusinessProfileInput = {
    update: XOR<UserUpdateWithoutBusinessProfileInput, UserUncheckedUpdateWithoutBusinessProfileInput>
    create: XOR<UserCreateWithoutBusinessProfileInput, UserUncheckedCreateWithoutBusinessProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusinessProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusinessProfileInput, UserUncheckedUpdateWithoutBusinessProfileInput>
  }

  export type UserUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    knowledgeBases?: KnowledgeBaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    knowledgeBases?: KnowledgeBaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAnalysesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    knowledgeBases?: KnowledgeBaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalysesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    knowledgeBases?: KnowledgeBaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalysesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
  }

  export type UserUpsertWithoutAnalysesInput = {
    update: XOR<UserUpdateWithoutAnalysesInput, UserUncheckedUpdateWithoutAnalysesInput>
    create: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalysesInput, UserUncheckedUpdateWithoutAnalysesInput>
  }

  export type UserUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    knowledgeBases?: KnowledgeBaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    knowledgeBases?: KnowledgeBaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutKnowledgeBasesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKnowledgeBasesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    createdAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKnowledgeBasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKnowledgeBasesInput, UserUncheckedCreateWithoutKnowledgeBasesInput>
  }

  export type DocumentSnippetCreateWithoutKnowledgeBaseInput = {
    id?: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput = {
    id?: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentSnippetCreateOrConnectWithoutKnowledgeBaseInput = {
    where: DocumentSnippetWhereUniqueInput
    create: XOR<DocumentSnippetCreateWithoutKnowledgeBaseInput, DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput>
  }

  export type DocumentSnippetCreateManyKnowledgeBaseInputEnvelope = {
    data: DocumentSnippetCreateManyKnowledgeBaseInput | DocumentSnippetCreateManyKnowledgeBaseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutKnowledgeBasesInput = {
    update: XOR<UserUpdateWithoutKnowledgeBasesInput, UserUncheckedUpdateWithoutKnowledgeBasesInput>
    create: XOR<UserCreateWithoutKnowledgeBasesInput, UserUncheckedCreateWithoutKnowledgeBasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKnowledgeBasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKnowledgeBasesInput, UserUncheckedUpdateWithoutKnowledgeBasesInput>
  }

  export type UserUpdateWithoutKnowledgeBasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKnowledgeBasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DocumentSnippetUpsertWithWhereUniqueWithoutKnowledgeBaseInput = {
    where: DocumentSnippetWhereUniqueInput
    update: XOR<DocumentSnippetUpdateWithoutKnowledgeBaseInput, DocumentSnippetUncheckedUpdateWithoutKnowledgeBaseInput>
    create: XOR<DocumentSnippetCreateWithoutKnowledgeBaseInput, DocumentSnippetUncheckedCreateWithoutKnowledgeBaseInput>
  }

  export type DocumentSnippetUpdateWithWhereUniqueWithoutKnowledgeBaseInput = {
    where: DocumentSnippetWhereUniqueInput
    data: XOR<DocumentSnippetUpdateWithoutKnowledgeBaseInput, DocumentSnippetUncheckedUpdateWithoutKnowledgeBaseInput>
  }

  export type DocumentSnippetUpdateManyWithWhereWithoutKnowledgeBaseInput = {
    where: DocumentSnippetScalarWhereInput
    data: XOR<DocumentSnippetUpdateManyMutationInput, DocumentSnippetUncheckedUpdateManyWithoutKnowledgeBaseInput>
  }

  export type DocumentSnippetScalarWhereInput = {
    AND?: DocumentSnippetScalarWhereInput | DocumentSnippetScalarWhereInput[]
    OR?: DocumentSnippetScalarWhereInput[]
    NOT?: DocumentSnippetScalarWhereInput | DocumentSnippetScalarWhereInput[]
    id?: StringFilter<"DocumentSnippet"> | string
    knowledgeBaseId?: StringFilter<"DocumentSnippet"> | string
    content?: StringFilter<"DocumentSnippet"> | string
    metadata?: JsonNullableFilter<"DocumentSnippet">
    createdAt?: DateTimeFilter<"DocumentSnippet"> | Date | string
  }

  export type KnowledgeBaseCreateWithoutSnippetsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutKnowledgeBasesInput
  }

  export type KnowledgeBaseUncheckedCreateWithoutSnippetsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type KnowledgeBaseCreateOrConnectWithoutSnippetsInput = {
    where: KnowledgeBaseWhereUniqueInput
    create: XOR<KnowledgeBaseCreateWithoutSnippetsInput, KnowledgeBaseUncheckedCreateWithoutSnippetsInput>
  }

  export type KnowledgeBaseUpsertWithoutSnippetsInput = {
    update: XOR<KnowledgeBaseUpdateWithoutSnippetsInput, KnowledgeBaseUncheckedUpdateWithoutSnippetsInput>
    create: XOR<KnowledgeBaseCreateWithoutSnippetsInput, KnowledgeBaseUncheckedCreateWithoutSnippetsInput>
    where?: KnowledgeBaseWhereInput
  }

  export type KnowledgeBaseUpdateToOneWithWhereWithoutSnippetsInput = {
    where?: KnowledgeBaseWhereInput
    data: XOR<KnowledgeBaseUpdateWithoutSnippetsInput, KnowledgeBaseUncheckedUpdateWithoutSnippetsInput>
  }

  export type KnowledgeBaseUpdateWithoutSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutKnowledgeBasesNestedInput
  }

  export type KnowledgeBaseUncheckedUpdateWithoutSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCreateManyUserInput = {
    id?: string
    originalMessage: string
    category: string
    urgency: string
    sentiment: string
    summary: string
    suggestedReply: string
    recommendedAction: string
    confidence?: number | null
    resolved?: boolean
    responseTimeMinutes?: number | null
    createdAt?: Date | string
  }

  export type KnowledgeBaseCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type AnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalMessage?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    suggestedReply?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalMessage?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    suggestedReply?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalMessage?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    suggestedReply?: StringFieldUpdateOperationsInput | string
    recommendedAction?: StringFieldUpdateOperationsInput | string
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeBaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snippets?: DocumentSnippetUpdateManyWithoutKnowledgeBaseNestedInput
  }

  export type KnowledgeBaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snippets?: DocumentSnippetUncheckedUpdateManyWithoutKnowledgeBaseNestedInput
  }

  export type KnowledgeBaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentSnippetCreateManyKnowledgeBaseInput = {
    id?: string
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentSnippetUpdateWithoutKnowledgeBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentSnippetUncheckedUpdateWithoutKnowledgeBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentSnippetUncheckedUpdateManyWithoutKnowledgeBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}