
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
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model FileUpload
 * 
 */
export type FileUpload = $Result.DefaultSelection<Prisma.$FileUploadPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model BuildJob
 * 
 */
export type BuildJob = $Result.DefaultSelection<Prisma.$BuildJobPayload>
/**
 * Model Deployment
 * 
 */
export type Deployment = $Result.DefaultSelection<Prisma.$DeploymentPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model ContractGenerationReviews
 * 
 */
export type ContractGenerationReviews = $Result.DefaultSelection<Prisma.$ContractGenerationReviewsPayload>
/**
 * Model PublicReview
 * 
 */
export type PublicReview = $Result.DefaultSelection<Prisma.$PublicReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Command: {
  lighthouse_BUILD: 'lighthouse_BUILD',
  lighthouse_TEST: 'lighthouse_TEST',
  lighthouse_DEPLOY_DEVNET: 'lighthouse_DEPLOY_DEVNET',
  lighthouse_DEPLOY_MAINNET: 'lighthouse_DEPLOY_MAINNET',
  lighthouse_DEPLOY_BASE_SEPOLIA: 'lighthouse_DEPLOY_BASE_SEPOLIA',
  lighthouse_DEPLOY_BASE_MAINNET: 'lighthouse_DEPLOY_BASE_MAINNET',
  lighthouse_VERIFY: 'lighthouse_VERIFY'
};

export type Command = (typeof Command)[keyof typeof Command]


export const BuildStatus: {
  NEVER_BUILT: 'NEVER_BUILT',
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  QUEUED: 'QUEUED'
};

export type BuildStatus = (typeof BuildStatus)[keyof typeof BuildStatus]


export const ContractType: {
  TOKEN: 'TOKEN',
  NFT: 'NFT',
  STAKING: 'STAKING',
  DAO: 'DAO',
  DEFI: 'DEFI',
  MARKETPLACE: 'MARKETPLACE',
  CUSTOM: 'CUSTOM'
};

export type ContractType = (typeof ContractType)[keyof typeof ContractType]


export const Chain: {
  BASE: 'BASE',
  SOLANA: 'SOLANA'
};

export type Chain = (typeof Chain)[keyof typeof Chain]


export const Network: {
  DEVNET: 'DEVNET',
  TESTNET: 'TESTNET',
  MAINNET_BETA: 'MAINNET_BETA'
};

export type Network = (typeof Network)[keyof typeof Network]


export const DeploymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus]


export const ChatRole: {
  USER: 'USER',
  AI: 'AI',
  SYSTEM: 'SYSTEM',
  PLAN: 'PLAN',
  TEMPLATE: 'TEMPLATE'
};

export type ChatRole = (typeof ChatRole)[keyof typeof ChatRole]


export const PlanType: {
  FREE: 'FREE',
  PREMIUM: 'PREMIUM',
  PREMIUM_PLUS: 'PREMIUM_PLUS'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  PENDING: 'PENDING'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const SystemMessageType: {
  BUILD_START: 'BUILD_START',
  BUILD_PROGRESS: 'BUILD_PROGRESS',
  BUILD_COMPLETE: 'BUILD_COMPLETE',
  BUILD_ERROR: 'BUILD_ERROR'
};

export type SystemMessageType = (typeof SystemMessageType)[keyof typeof SystemMessageType]


export const ContractGenerationStage: {
  PLANNING: 'PLANNING',
  GENERATING_CODE: 'GENERATING_CODE',
  BUILDING: 'BUILDING',
  CREATING_FILES: 'CREATING_FILES',
  FINALIZING: 'FINALIZING',
  END: 'END',
  ERROR: 'ERROR'
};

export type ContractGenerationStage = (typeof ContractGenerationStage)[keyof typeof ContractGenerationStage]


export const GenerationStatus: {
  IDLE: 'IDLE',
  GENERATING: 'GENERATING'
};

export type GenerationStatus = (typeof GenerationStatus)[keyof typeof GenerationStatus]

}

export type Command = $Enums.Command

export const Command: typeof $Enums.Command

export type BuildStatus = $Enums.BuildStatus

export const BuildStatus: typeof $Enums.BuildStatus

export type ContractType = $Enums.ContractType

export const ContractType: typeof $Enums.ContractType

export type Chain = $Enums.Chain

export const Chain: typeof $Enums.Chain

export type Network = $Enums.Network

export const Network: typeof $Enums.Network

export type DeploymentStatus = $Enums.DeploymentStatus

export const DeploymentStatus: typeof $Enums.DeploymentStatus

export type ChatRole = $Enums.ChatRole

export const ChatRole: typeof $Enums.ChatRole

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type SystemMessageType = $Enums.SystemMessageType

export const SystemMessageType: typeof $Enums.SystemMessageType

export type ContractGenerationStage = $Enums.ContractGenerationStage

export const ContractGenerationStage: typeof $Enums.ContractGenerationStage

export type GenerationStatus = $Enums.GenerationStatus

export const GenerationStatus: typeof $Enums.GenerationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
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
   * const prisma = new PrismaClient()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileUpload`: Exposes CRUD operations for the **FileUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileUploads
    * const fileUploads = await prisma.fileUpload.findMany()
    * ```
    */
  get fileUpload(): Prisma.FileUploadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buildJob`: Exposes CRUD operations for the **BuildJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuildJobs
    * const buildJobs = await prisma.buildJob.findMany()
    * ```
    */
  get buildJob(): Prisma.BuildJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deployment`: Exposes CRUD operations for the **Deployment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deployments
    * const deployments = await prisma.deployment.findMany()
    * ```
    */
  get deployment(): Prisma.DeploymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractGenerationReviews`: Exposes CRUD operations for the **ContractGenerationReviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractGenerationReviews
    * const contractGenerationReviews = await prisma.contractGenerationReviews.findMany()
    * ```
    */
  get contractGenerationReviews(): Prisma.ContractGenerationReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicReview`: Exposes CRUD operations for the **PublicReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicReviews
    * const publicReviews = await prisma.publicReview.findMany()
    * ```
    */
  get publicReview(): Prisma.PublicReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
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
    Contract: 'Contract',
    FileUpload: 'FileUpload',
    Template: 'Template',
    BuildJob: 'BuildJob',
    Deployment: 'Deployment',
    Message: 'Message',
    Subscription: 'Subscription',
    ContractGenerationReviews: 'ContractGenerationReviews',
    PublicReview: 'PublicReview'
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
      modelProps: "user" | "contract" | "fileUpload" | "template" | "buildJob" | "deployment" | "message" | "subscription" | "contractGenerationReviews" | "publicReview"
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
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      FileUpload: {
        payload: Prisma.$FileUploadPayload<ExtArgs>
        fields: Prisma.FileUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findFirst: {
            args: Prisma.FileUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findMany: {
            args: Prisma.FileUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          create: {
            args: Prisma.FileUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          createMany: {
            args: Prisma.FileUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          delete: {
            args: Prisma.FileUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          update: {
            args: Prisma.FileUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          deleteMany: {
            args: Prisma.FileUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          upsert: {
            args: Prisma.FileUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          aggregate: {
            args: Prisma.FileUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileUpload>
          }
          groupBy: {
            args: Prisma.FileUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileUploadCountArgs<ExtArgs>
            result: $Utils.Optional<FileUploadCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      BuildJob: {
        payload: Prisma.$BuildJobPayload<ExtArgs>
        fields: Prisma.BuildJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload>
          }
          findFirst: {
            args: Prisma.BuildJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload>
          }
          findMany: {
            args: Prisma.BuildJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload>[]
          }
          create: {
            args: Prisma.BuildJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload>
          }
          createMany: {
            args: Prisma.BuildJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload>[]
          }
          delete: {
            args: Prisma.BuildJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload>
          }
          update: {
            args: Prisma.BuildJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload>
          }
          deleteMany: {
            args: Prisma.BuildJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload>[]
          }
          upsert: {
            args: Prisma.BuildJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildJobPayload>
          }
          aggregate: {
            args: Prisma.BuildJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuildJob>
          }
          groupBy: {
            args: Prisma.BuildJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildJobCountArgs<ExtArgs>
            result: $Utils.Optional<BuildJobCountAggregateOutputType> | number
          }
        }
      }
      Deployment: {
        payload: Prisma.$DeploymentPayload<ExtArgs>
        fields: Prisma.DeploymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeploymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeploymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findFirst: {
            args: Prisma.DeploymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeploymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findMany: {
            args: Prisma.DeploymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          create: {
            args: Prisma.DeploymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          createMany: {
            args: Prisma.DeploymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeploymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          delete: {
            args: Prisma.DeploymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          update: {
            args: Prisma.DeploymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          deleteMany: {
            args: Prisma.DeploymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeploymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeploymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          upsert: {
            args: Prisma.DeploymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          aggregate: {
            args: Prisma.DeploymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeployment>
          }
          groupBy: {
            args: Prisma.DeploymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeploymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeploymentCountArgs<ExtArgs>
            result: $Utils.Optional<DeploymentCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      ContractGenerationReviews: {
        payload: Prisma.$ContractGenerationReviewsPayload<ExtArgs>
        fields: Prisma.ContractGenerationReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractGenerationReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractGenerationReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload>
          }
          findFirst: {
            args: Prisma.ContractGenerationReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractGenerationReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload>
          }
          findMany: {
            args: Prisma.ContractGenerationReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload>[]
          }
          create: {
            args: Prisma.ContractGenerationReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload>
          }
          createMany: {
            args: Prisma.ContractGenerationReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractGenerationReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload>[]
          }
          delete: {
            args: Prisma.ContractGenerationReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload>
          }
          update: {
            args: Prisma.ContractGenerationReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ContractGenerationReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractGenerationReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractGenerationReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ContractGenerationReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractGenerationReviewsPayload>
          }
          aggregate: {
            args: Prisma.ContractGenerationReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractGenerationReviews>
          }
          groupBy: {
            args: Prisma.ContractGenerationReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGenerationReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractGenerationReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ContractGenerationReviewsCountAggregateOutputType> | number
          }
        }
      }
      PublicReview: {
        payload: Prisma.$PublicReviewPayload<ExtArgs>
        fields: Prisma.PublicReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload>
          }
          findFirst: {
            args: Prisma.PublicReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload>
          }
          findMany: {
            args: Prisma.PublicReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload>[]
          }
          create: {
            args: Prisma.PublicReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload>
          }
          createMany: {
            args: Prisma.PublicReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload>[]
          }
          delete: {
            args: Prisma.PublicReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload>
          }
          update: {
            args: Prisma.PublicReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload>
          }
          deleteMany: {
            args: Prisma.PublicReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload>[]
          }
          upsert: {
            args: Prisma.PublicReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicReviewPayload>
          }
          aggregate: {
            args: Prisma.PublicReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicReview>
          }
          groupBy: {
            args: Prisma.PublicReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicReviewCountArgs<ExtArgs>
            result: $Utils.Optional<PublicReviewCountAggregateOutputType> | number
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
    contract?: ContractOmit
    fileUpload?: FileUploadOmit
    template?: TemplateOmit
    buildJob?: BuildJobOmit
    deployment?: DeploymentOmit
    message?: MessageOmit
    subscription?: SubscriptionOmit
    contractGenerationReviews?: ContractGenerationReviewsOmit
    publicReview?: PublicReviewOmit
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
    contracts: number
    contractGenerationReviews: number
    publicReviews: number
    uploadedFiles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | UserCountOutputTypeCountContractsArgs
    contractGenerationReviews?: boolean | UserCountOutputTypeCountContractGenerationReviewsArgs
    publicReviews?: boolean | UserCountOutputTypeCountPublicReviewsArgs
    uploadedFiles?: boolean | UserCountOutputTypeCountUploadedFilesArgs
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
  export type UserCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContractGenerationReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractGenerationReviewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPublicReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    deployments: number
    buildJob: number
    messages: number
    contractGenerationReviews: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | ContractCountOutputTypeCountDeploymentsArgs
    buildJob?: boolean | ContractCountOutputTypeCountBuildJobArgs
    messages?: boolean | ContractCountOutputTypeCountMessagesArgs
    contractGenerationReviews?: boolean | ContractCountOutputTypeCountContractGenerationReviewsArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountBuildJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildJobWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountContractGenerationReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractGenerationReviewsWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    message: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | TemplateCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
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
    email: string | null
    name: string | null
    image: string | null
    password: string | null
    provider: string | null
    githubId: string | null
    githubAccessToken: string | null
    githubUsername: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    password: string | null
    provider: string | null
    githubId: string | null
    githubAccessToken: string | null
    githubUsername: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    image: number
    password: number
    provider: number
    githubId: number
    githubAccessToken: number
    githubUsername: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    password?: true
    provider?: true
    githubId?: true
    githubAccessToken?: true
    githubUsername?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    password?: true
    provider?: true
    githubId?: true
    githubAccessToken?: true
    githubUsername?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    password?: true
    provider?: true
    githubId?: true
    githubAccessToken?: true
    githubUsername?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    name: string | null
    image: string | null
    password: string | null
    provider: string | null
    githubId: string | null
    githubAccessToken: string | null
    githubUsername: string | null
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    name?: boolean
    image?: boolean
    password?: boolean
    provider?: boolean
    githubId?: boolean
    githubAccessToken?: boolean
    githubUsername?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    contracts?: boolean | User$contractsArgs<ExtArgs>
    contractGenerationReviews?: boolean | User$contractGenerationReviewsArgs<ExtArgs>
    publicReviews?: boolean | User$publicReviewsArgs<ExtArgs>
    uploadedFiles?: boolean | User$uploadedFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    password?: boolean
    provider?: boolean
    githubId?: boolean
    githubAccessToken?: boolean
    githubUsername?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    password?: boolean
    provider?: boolean
    githubId?: boolean
    githubAccessToken?: boolean
    githubUsername?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    password?: boolean
    provider?: boolean
    githubId?: boolean
    githubAccessToken?: boolean
    githubUsername?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "image" | "password" | "provider" | "githubId" | "githubAccessToken" | "githubUsername" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    contracts?: boolean | User$contractsArgs<ExtArgs>
    contractGenerationReviews?: boolean | User$contractGenerationReviewsArgs<ExtArgs>
    publicReviews?: boolean | User$publicReviewsArgs<ExtArgs>
    uploadedFiles?: boolean | User$uploadedFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      contractGenerationReviews: Prisma.$ContractGenerationReviewsPayload<ExtArgs>[]
      publicReviews: Prisma.$PublicReviewPayload<ExtArgs>[]
      uploadedFiles: Prisma.$FileUploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      image: string | null
      password: string | null
      provider: string | null
      githubId: string | null
      githubAccessToken: string | null
      githubUsername: string | null
      createdAt: Date
      updatedAt: Date
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
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contracts<T extends User$contractsArgs<ExtArgs> = {}>(args?: Subset<T, User$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contractGenerationReviews<T extends User$contractGenerationReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$contractGenerationReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publicReviews<T extends User$publicReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$publicReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploadedFiles<T extends User$uploadedFilesArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly githubAccessToken: FieldRef<"User", 'String'>
    readonly githubUsername: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.contracts
   */
  export type User$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * User.contractGenerationReviews
   */
  export type User$contractGenerationReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    where?: ContractGenerationReviewsWhereInput
    orderBy?: ContractGenerationReviewsOrderByWithRelationInput | ContractGenerationReviewsOrderByWithRelationInput[]
    cursor?: ContractGenerationReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractGenerationReviewsScalarFieldEnum | ContractGenerationReviewsScalarFieldEnum[]
  }

  /**
   * User.publicReviews
   */
  export type User$publicReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    where?: PublicReviewWhereInput
    orderBy?: PublicReviewOrderByWithRelationInput | PublicReviewOrderByWithRelationInput[]
    cursor?: PublicReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicReviewScalarFieldEnum | PublicReviewScalarFieldEnum[]
  }

  /**
   * User.uploadedFiles
   */
  export type User$uploadedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
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
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    version: number | null
  }

  export type ContractSumAggregateOutputType = {
    version: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    contractType: $Enums.ContractType | null
    chain: $Enums.Chain | null
    code: string | null
    codeHash: string | null
    s3_url: string | null
    githubRepoName: string | null
    lastBuildStatus: $Enums.BuildStatus | null
    lastBuildId: string | null
    summarisedObject: string | null
    generationStatus: $Enums.GenerationStatus | null
    deployed: boolean | null
    programId: string | null
    version: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    contractType: $Enums.ContractType | null
    chain: $Enums.Chain | null
    code: string | null
    codeHash: string | null
    s3_url: string | null
    githubRepoName: string | null
    lastBuildStatus: $Enums.BuildStatus | null
    lastBuildId: string | null
    summarisedObject: string | null
    generationStatus: $Enums.GenerationStatus | null
    deployed: boolean | null
    programId: string | null
    version: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    title: number
    description: number
    contractType: number
    chain: number
    code: number
    codeHash: number
    s3_url: number
    githubRepoName: number
    lastBuildStatus: number
    lastBuildId: number
    idl: number
    clientSdk: number
    summarisedObject: number
    generationStatus: number
    deployed: number
    programId: number
    version: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    version?: true
  }

  export type ContractSumAggregateInputType = {
    version?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contractType?: true
    chain?: true
    code?: true
    codeHash?: true
    s3_url?: true
    githubRepoName?: true
    lastBuildStatus?: true
    lastBuildId?: true
    summarisedObject?: true
    generationStatus?: true
    deployed?: true
    programId?: true
    version?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contractType?: true
    chain?: true
    code?: true
    codeHash?: true
    s3_url?: true
    githubRepoName?: true
    lastBuildStatus?: true
    lastBuildId?: true
    summarisedObject?: true
    generationStatus?: true
    deployed?: true
    programId?: true
    version?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contractType?: true
    chain?: true
    code?: true
    codeHash?: true
    s3_url?: true
    githubRepoName?: true
    lastBuildStatus?: true
    lastBuildId?: true
    idl?: true
    clientSdk?: true
    summarisedObject?: true
    generationStatus?: true
    deployed?: true
    programId?: true
    version?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    title: string
    description: string | null
    contractType: $Enums.ContractType
    chain: $Enums.Chain
    code: string | null
    codeHash: string | null
    s3_url: string | null
    githubRepoName: string | null
    lastBuildStatus: $Enums.BuildStatus | null
    lastBuildId: string | null
    idl: JsonValue | null
    clientSdk: JsonValue | null
    summarisedObject: string | null
    generationStatus: $Enums.GenerationStatus
    deployed: boolean
    programId: string | null
    version: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contractType?: boolean
    chain?: boolean
    code?: boolean
    codeHash?: boolean
    s3_url?: boolean
    githubRepoName?: boolean
    lastBuildStatus?: boolean
    lastBuildId?: boolean
    idl?: boolean
    clientSdk?: boolean
    summarisedObject?: boolean
    generationStatus?: boolean
    deployed?: boolean
    programId?: boolean
    version?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    deployments?: boolean | Contract$deploymentsArgs<ExtArgs>
    buildJob?: boolean | Contract$buildJobArgs<ExtArgs>
    messages?: boolean | Contract$messagesArgs<ExtArgs>
    contractGenerationReviews?: boolean | Contract$contractGenerationReviewsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contractType?: boolean
    chain?: boolean
    code?: boolean
    codeHash?: boolean
    s3_url?: boolean
    githubRepoName?: boolean
    lastBuildStatus?: boolean
    lastBuildId?: boolean
    idl?: boolean
    clientSdk?: boolean
    summarisedObject?: boolean
    generationStatus?: boolean
    deployed?: boolean
    programId?: boolean
    version?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contractType?: boolean
    chain?: boolean
    code?: boolean
    codeHash?: boolean
    s3_url?: boolean
    githubRepoName?: boolean
    lastBuildStatus?: boolean
    lastBuildId?: boolean
    idl?: boolean
    clientSdk?: boolean
    summarisedObject?: boolean
    generationStatus?: boolean
    deployed?: boolean
    programId?: boolean
    version?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    contractType?: boolean
    chain?: boolean
    code?: boolean
    codeHash?: boolean
    s3_url?: boolean
    githubRepoName?: boolean
    lastBuildStatus?: boolean
    lastBuildId?: boolean
    idl?: boolean
    clientSdk?: boolean
    summarisedObject?: boolean
    generationStatus?: boolean
    deployed?: boolean
    programId?: boolean
    version?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "contractType" | "chain" | "code" | "codeHash" | "s3_url" | "githubRepoName" | "lastBuildStatus" | "lastBuildId" | "idl" | "clientSdk" | "summarisedObject" | "generationStatus" | "deployed" | "programId" | "version" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    deployments?: boolean | Contract$deploymentsArgs<ExtArgs>
    buildJob?: boolean | Contract$buildJobArgs<ExtArgs>
    messages?: boolean | Contract$messagesArgs<ExtArgs>
    contractGenerationReviews?: boolean | Contract$contractGenerationReviewsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      deployments: Prisma.$DeploymentPayload<ExtArgs>[]
      buildJob: Prisma.$BuildJobPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      contractGenerationReviews: Prisma.$ContractGenerationReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      contractType: $Enums.ContractType
      chain: $Enums.Chain
      code: string | null
      codeHash: string | null
      s3_url: string | null
      githubRepoName: string | null
      lastBuildStatus: $Enums.BuildStatus | null
      lastBuildId: string | null
      idl: Prisma.JsonValue | null
      clientSdk: Prisma.JsonValue | null
      summarisedObject: string | null
      generationStatus: $Enums.GenerationStatus
      deployed: boolean
      programId: string | null
      version: number
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deployments<T extends Contract$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buildJob<T extends Contract$buildJobArgs<ExtArgs> = {}>(args?: Subset<T, Contract$buildJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Contract$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Contract$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contractGenerationReviews<T extends Contract$contractGenerationReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$contractGenerationReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly title: FieldRef<"Contract", 'String'>
    readonly description: FieldRef<"Contract", 'String'>
    readonly contractType: FieldRef<"Contract", 'ContractType'>
    readonly chain: FieldRef<"Contract", 'Chain'>
    readonly code: FieldRef<"Contract", 'String'>
    readonly codeHash: FieldRef<"Contract", 'String'>
    readonly s3_url: FieldRef<"Contract", 'String'>
    readonly githubRepoName: FieldRef<"Contract", 'String'>
    readonly lastBuildStatus: FieldRef<"Contract", 'BuildStatus'>
    readonly lastBuildId: FieldRef<"Contract", 'String'>
    readonly idl: FieldRef<"Contract", 'Json'>
    readonly clientSdk: FieldRef<"Contract", 'Json'>
    readonly summarisedObject: FieldRef<"Contract", 'String'>
    readonly generationStatus: FieldRef<"Contract", 'GenerationStatus'>
    readonly deployed: FieldRef<"Contract", 'Boolean'>
    readonly programId: FieldRef<"Contract", 'String'>
    readonly version: FieldRef<"Contract", 'Int'>
    readonly userId: FieldRef<"Contract", 'String'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.deployments
   */
  export type Contract$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    cursor?: DeploymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Contract.buildJob
   */
  export type Contract$buildJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    where?: BuildJobWhereInput
    orderBy?: BuildJobOrderByWithRelationInput | BuildJobOrderByWithRelationInput[]
    cursor?: BuildJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildJobScalarFieldEnum | BuildJobScalarFieldEnum[]
  }

  /**
   * Contract.messages
   */
  export type Contract$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Contract.contractGenerationReviews
   */
  export type Contract$contractGenerationReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    where?: ContractGenerationReviewsWhereInput
    orderBy?: ContractGenerationReviewsOrderByWithRelationInput | ContractGenerationReviewsOrderByWithRelationInput[]
    cursor?: ContractGenerationReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractGenerationReviewsScalarFieldEnum | ContractGenerationReviewsScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model FileUpload
   */

  export type AggregateFileUpload = {
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  export type FileUploadAvgAggregateOutputType = {
    size: number | null
  }

  export type FileUploadSumAggregateOutputType = {
    size: number | null
  }

  export type FileUploadMinAggregateOutputType = {
    id: string | null
    filename: string | null
    size: number | null
    s3Url: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FileUploadMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    size: number | null
    s3Url: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FileUploadCountAggregateOutputType = {
    id: number
    filename: number
    size: number
    s3Url: number
    userId: number
    createdAt: number
    _all: number
  }


  export type FileUploadAvgAggregateInputType = {
    size?: true
  }

  export type FileUploadSumAggregateInputType = {
    size?: true
  }

  export type FileUploadMinAggregateInputType = {
    id?: true
    filename?: true
    size?: true
    s3Url?: true
    userId?: true
    createdAt?: true
  }

  export type FileUploadMaxAggregateInputType = {
    id?: true
    filename?: true
    size?: true
    s3Url?: true
    userId?: true
    createdAt?: true
  }

  export type FileUploadCountAggregateInputType = {
    id?: true
    filename?: true
    size?: true
    s3Url?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type FileUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUpload to aggregate.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileUploads
    **/
    _count?: true | FileUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileUploadMaxAggregateInputType
  }

  export type GetFileUploadAggregateType<T extends FileUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateFileUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileUpload[P]>
      : GetScalarType<T[P], AggregateFileUpload[P]>
  }




  export type FileUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithAggregationInput | FileUploadOrderByWithAggregationInput[]
    by: FileUploadScalarFieldEnum[] | FileUploadScalarFieldEnum
    having?: FileUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileUploadCountAggregateInputType | true
    _avg?: FileUploadAvgAggregateInputType
    _sum?: FileUploadSumAggregateInputType
    _min?: FileUploadMinAggregateInputType
    _max?: FileUploadMaxAggregateInputType
  }

  export type FileUploadGroupByOutputType = {
    id: string
    filename: string
    size: number
    s3Url: string
    userId: string
    createdAt: Date
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  type GetFileUploadGroupByPayload<T extends FileUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
            : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
        }
      >
    >


  export type FileUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    size?: boolean
    s3Url?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    size?: boolean
    s3Url?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    size?: boolean
    s3Url?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectScalar = {
    id?: boolean
    filename?: boolean
    size?: boolean
    s3Url?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type FileUploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "size" | "s3Url" | "userId" | "createdAt", ExtArgs["result"]["fileUpload"]>
  export type FileUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FileUploadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FileUploadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FileUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileUpload"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      size: number
      s3Url: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["fileUpload"]>
    composites: {}
  }

  type FileUploadGetPayload<S extends boolean | null | undefined | FileUploadDefaultArgs> = $Result.GetResult<Prisma.$FileUploadPayload, S>

  type FileUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileUploadCountAggregateInputType | true
    }

  export interface FileUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileUpload'], meta: { name: 'FileUpload' } }
    /**
     * Find zero or one FileUpload that matches the filter.
     * @param {FileUploadFindUniqueArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileUploadFindUniqueArgs>(args: SelectSubset<T, FileUploadFindUniqueArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileUploadFindUniqueOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, FileUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileUploadFindFirstArgs>(args?: SelectSubset<T, FileUploadFindFirstArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, FileUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileUploads
     * const fileUploads = await prisma.fileUpload.findMany()
     * 
     * // Get first 10 FileUploads
     * const fileUploads = await prisma.fileUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileUploadFindManyArgs>(args?: SelectSubset<T, FileUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileUpload.
     * @param {FileUploadCreateArgs} args - Arguments to create a FileUpload.
     * @example
     * // Create one FileUpload
     * const FileUpload = await prisma.fileUpload.create({
     *   data: {
     *     // ... data to create a FileUpload
     *   }
     * })
     * 
     */
    create<T extends FileUploadCreateArgs>(args: SelectSubset<T, FileUploadCreateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileUploads.
     * @param {FileUploadCreateManyArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileUploadCreateManyArgs>(args?: SelectSubset<T, FileUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileUploads and returns the data saved in the database.
     * @param {FileUploadCreateManyAndReturnArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, FileUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileUpload.
     * @param {FileUploadDeleteArgs} args - Arguments to delete one FileUpload.
     * @example
     * // Delete one FileUpload
     * const FileUpload = await prisma.fileUpload.delete({
     *   where: {
     *     // ... filter to delete one FileUpload
     *   }
     * })
     * 
     */
    delete<T extends FileUploadDeleteArgs>(args: SelectSubset<T, FileUploadDeleteArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileUpload.
     * @param {FileUploadUpdateArgs} args - Arguments to update one FileUpload.
     * @example
     * // Update one FileUpload
     * const fileUpload = await prisma.fileUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUploadUpdateArgs>(args: SelectSubset<T, FileUploadUpdateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileUploads.
     * @param {FileUploadDeleteManyArgs} args - Arguments to filter FileUploads to delete.
     * @example
     * // Delete a few FileUploads
     * const { count } = await prisma.fileUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileUploadDeleteManyArgs>(args?: SelectSubset<T, FileUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUploadUpdateManyArgs>(args: SelectSubset<T, FileUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads and returns the data updated in the database.
     * @param {FileUploadUpdateManyAndReturnArgs} args - Arguments to update many FileUploads.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileUploadUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileUpload.
     * @param {FileUploadUpsertArgs} args - Arguments to update or create a FileUpload.
     * @example
     * // Update or create a FileUpload
     * const fileUpload = await prisma.fileUpload.upsert({
     *   create: {
     *     // ... data to create a FileUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileUpload we want to update
     *   }
     * })
     */
    upsert<T extends FileUploadUpsertArgs>(args: SelectSubset<T, FileUploadUpsertArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadCountArgs} args - Arguments to filter FileUploads to count.
     * @example
     * // Count the number of FileUploads
     * const count = await prisma.fileUpload.count({
     *   where: {
     *     // ... the filter for the FileUploads we want to count
     *   }
     * })
    **/
    count<T extends FileUploadCountArgs>(
      args?: Subset<T, FileUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileUploadAggregateArgs>(args: Subset<T, FileUploadAggregateArgs>): Prisma.PrismaPromise<GetFileUploadAggregateType<T>>

    /**
     * Group by FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadGroupByArgs} args - Group by arguments.
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
      T extends FileUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileUploadGroupByArgs['orderBy'] }
        : { orderBy?: FileUploadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileUpload model
   */
  readonly fields: FileUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FileUpload model
   */
  interface FileUploadFieldRefs {
    readonly id: FieldRef<"FileUpload", 'String'>
    readonly filename: FieldRef<"FileUpload", 'String'>
    readonly size: FieldRef<"FileUpload", 'Int'>
    readonly s3Url: FieldRef<"FileUpload", 'String'>
    readonly userId: FieldRef<"FileUpload", 'String'>
    readonly createdAt: FieldRef<"FileUpload", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileUpload findUnique
   */
  export type FileUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findUniqueOrThrow
   */
  export type FileUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findFirst
   */
  export type FileUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findFirstOrThrow
   */
  export type FileUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findMany
   */
  export type FileUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUploads to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload create
   */
  export type FileUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a FileUpload.
     */
    data: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
  }

  /**
   * FileUpload createMany
   */
  export type FileUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileUpload createManyAndReturn
   */
  export type FileUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload update
   */
  export type FileUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a FileUpload.
     */
    data: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
    /**
     * Choose, which FileUpload to update.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload updateMany
   */
  export type FileUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number
  }

  /**
   * FileUpload updateManyAndReturn
   */
  export type FileUploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload upsert
   */
  export type FileUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the FileUpload to update in case it exists.
     */
    where: FileUploadWhereUniqueInput
    /**
     * In case the FileUpload found by the `where` argument doesn't exist, create a new FileUpload with this data.
     */
    create: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
    /**
     * In case the FileUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
  }

  /**
   * FileUpload delete
   */
  export type FileUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter which FileUpload to delete.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload deleteMany
   */
  export type FileUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUploads to delete
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to delete.
     */
    limit?: number
  }

  /**
   * FileUpload without action
   */
  export type FileUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    chain: $Enums.Chain | null
    s3_prefix: string | null
    solanaVersion: string | null
    anchorVersion: string | null
    baseNetwork: string | null
    frontendStack: string | null
    runtimeStack: string | null
    summarisedObject: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    chain: $Enums.Chain | null
    s3_prefix: string | null
    solanaVersion: string | null
    anchorVersion: string | null
    baseNetwork: string | null
    frontendStack: string | null
    runtimeStack: string | null
    summarisedObject: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    chain: number
    tags: number
    s3_prefix: number
    solanaVersion: number
    anchorVersion: number
    baseNetwork: number
    frontendStack: number
    runtimeStack: number
    summarisedObject: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    chain?: true
    s3_prefix?: true
    solanaVersion?: true
    anchorVersion?: true
    baseNetwork?: true
    frontendStack?: true
    runtimeStack?: true
    summarisedObject?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    chain?: true
    s3_prefix?: true
    solanaVersion?: true
    anchorVersion?: true
    baseNetwork?: true
    frontendStack?: true
    runtimeStack?: true
    summarisedObject?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    chain?: true
    tags?: true
    s3_prefix?: true
    solanaVersion?: true
    anchorVersion?: true
    baseNetwork?: true
    frontendStack?: true
    runtimeStack?: true
    summarisedObject?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    title: string
    description: string | null
    category: string
    chain: $Enums.Chain
    tags: string[]
    s3_prefix: string | null
    solanaVersion: string | null
    anchorVersion: string | null
    baseNetwork: string | null
    frontendStack: string | null
    runtimeStack: string | null
    summarisedObject: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    chain?: boolean
    tags?: boolean
    s3_prefix?: boolean
    solanaVersion?: boolean
    anchorVersion?: boolean
    baseNetwork?: boolean
    frontendStack?: boolean
    runtimeStack?: boolean
    summarisedObject?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | Template$messageArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    chain?: boolean
    tags?: boolean
    s3_prefix?: boolean
    solanaVersion?: boolean
    anchorVersion?: boolean
    baseNetwork?: boolean
    frontendStack?: boolean
    runtimeStack?: boolean
    summarisedObject?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    chain?: boolean
    tags?: boolean
    s3_prefix?: boolean
    solanaVersion?: boolean
    anchorVersion?: boolean
    baseNetwork?: boolean
    frontendStack?: boolean
    runtimeStack?: boolean
    summarisedObject?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    chain?: boolean
    tags?: boolean
    s3_prefix?: boolean
    solanaVersion?: boolean
    anchorVersion?: boolean
    baseNetwork?: boolean
    frontendStack?: boolean
    runtimeStack?: boolean
    summarisedObject?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "chain" | "tags" | "s3_prefix" | "solanaVersion" | "anchorVersion" | "baseNetwork" | "frontendStack" | "runtimeStack" | "summarisedObject" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | Template$messageArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      category: string
      chain: $Enums.Chain
      tags: string[]
      s3_prefix: string | null
      solanaVersion: string | null
      anchorVersion: string | null
      baseNetwork: string | null
      frontendStack: string | null
      runtimeStack: string | null
      summarisedObject: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends Template$messageArgs<ExtArgs> = {}>(args?: Subset<T, Template$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly title: FieldRef<"Template", 'String'>
    readonly description: FieldRef<"Template", 'String'>
    readonly category: FieldRef<"Template", 'String'>
    readonly chain: FieldRef<"Template", 'Chain'>
    readonly tags: FieldRef<"Template", 'String[]'>
    readonly s3_prefix: FieldRef<"Template", 'String'>
    readonly solanaVersion: FieldRef<"Template", 'String'>
    readonly anchorVersion: FieldRef<"Template", 'String'>
    readonly baseNetwork: FieldRef<"Template", 'String'>
    readonly frontendStack: FieldRef<"Template", 'String'>
    readonly runtimeStack: FieldRef<"Template", 'String'>
    readonly summarisedObject: FieldRef<"Template", 'String'>
    readonly imageUrl: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.message
   */
  export type Template$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model BuildJob
   */

  export type AggregateBuildJob = {
    _count: BuildJobCountAggregateOutputType | null
    _avg: BuildJobAvgAggregateOutputType | null
    _sum: BuildJobSumAggregateOutputType | null
    _min: BuildJobMinAggregateOutputType | null
    _max: BuildJobMaxAggregateOutputType | null
  }

  export type BuildJobAvgAggregateOutputType = {
    duration: number | null
    retryCount: number | null
    maxRetry: number | null
  }

  export type BuildJobSumAggregateOutputType = {
    duration: number | null
    retryCount: number | null
    maxRetry: number | null
  }

  export type BuildJobMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    chain: $Enums.Chain | null
    jobId: string | null
    status: $Enums.BuildStatus | null
    podName: string | null
    command: $Enums.Command | null
    startedAt: Date | null
    completedAt: Date | null
    duration: number | null
    error: string | null
    retryCount: number | null
    maxRetry: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildJobMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    chain: $Enums.Chain | null
    jobId: string | null
    status: $Enums.BuildStatus | null
    podName: string | null
    command: $Enums.Command | null
    startedAt: Date | null
    completedAt: Date | null
    duration: number | null
    error: string | null
    retryCount: number | null
    maxRetry: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildJobCountAggregateOutputType = {
    id: number
    contractId: number
    chain: number
    jobId: number
    status: number
    podName: number
    command: number
    startedAt: number
    completedAt: number
    duration: number
    output: number
    error: number
    retryCount: number
    maxRetry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BuildJobAvgAggregateInputType = {
    duration?: true
    retryCount?: true
    maxRetry?: true
  }

  export type BuildJobSumAggregateInputType = {
    duration?: true
    retryCount?: true
    maxRetry?: true
  }

  export type BuildJobMinAggregateInputType = {
    id?: true
    contractId?: true
    chain?: true
    jobId?: true
    status?: true
    podName?: true
    command?: true
    startedAt?: true
    completedAt?: true
    duration?: true
    error?: true
    retryCount?: true
    maxRetry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildJobMaxAggregateInputType = {
    id?: true
    contractId?: true
    chain?: true
    jobId?: true
    status?: true
    podName?: true
    command?: true
    startedAt?: true
    completedAt?: true
    duration?: true
    error?: true
    retryCount?: true
    maxRetry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildJobCountAggregateInputType = {
    id?: true
    contractId?: true
    chain?: true
    jobId?: true
    status?: true
    podName?: true
    command?: true
    startedAt?: true
    completedAt?: true
    duration?: true
    output?: true
    error?: true
    retryCount?: true
    maxRetry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BuildJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildJob to aggregate.
     */
    where?: BuildJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildJobs to fetch.
     */
    orderBy?: BuildJobOrderByWithRelationInput | BuildJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuildJobs
    **/
    _count?: true | BuildJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildJobMaxAggregateInputType
  }

  export type GetBuildJobAggregateType<T extends BuildJobAggregateArgs> = {
        [P in keyof T & keyof AggregateBuildJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuildJob[P]>
      : GetScalarType<T[P], AggregateBuildJob[P]>
  }




  export type BuildJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildJobWhereInput
    orderBy?: BuildJobOrderByWithAggregationInput | BuildJobOrderByWithAggregationInput[]
    by: BuildJobScalarFieldEnum[] | BuildJobScalarFieldEnum
    having?: BuildJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildJobCountAggregateInputType | true
    _avg?: BuildJobAvgAggregateInputType
    _sum?: BuildJobSumAggregateInputType
    _min?: BuildJobMinAggregateInputType
    _max?: BuildJobMaxAggregateInputType
  }

  export type BuildJobGroupByOutputType = {
    id: string
    contractId: string
    chain: $Enums.Chain
    jobId: string
    status: $Enums.BuildStatus
    podName: string | null
    command: $Enums.Command
    startedAt: Date | null
    completedAt: Date | null
    duration: number | null
    output: JsonValue | null
    error: string | null
    retryCount: number
    maxRetry: number
    createdAt: Date
    updatedAt: Date
    _count: BuildJobCountAggregateOutputType | null
    _avg: BuildJobAvgAggregateOutputType | null
    _sum: BuildJobSumAggregateOutputType | null
    _min: BuildJobMinAggregateOutputType | null
    _max: BuildJobMaxAggregateOutputType | null
  }

  type GetBuildJobGroupByPayload<T extends BuildJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildJobGroupByOutputType[P]>
            : GetScalarType<T[P], BuildJobGroupByOutputType[P]>
        }
      >
    >


  export type BuildJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    chain?: boolean
    jobId?: boolean
    status?: boolean
    podName?: boolean
    command?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    output?: boolean
    error?: boolean
    retryCount?: boolean
    maxRetry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildJob"]>

  export type BuildJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    chain?: boolean
    jobId?: boolean
    status?: boolean
    podName?: boolean
    command?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    output?: boolean
    error?: boolean
    retryCount?: boolean
    maxRetry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildJob"]>

  export type BuildJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    chain?: boolean
    jobId?: boolean
    status?: boolean
    podName?: boolean
    command?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    output?: boolean
    error?: boolean
    retryCount?: boolean
    maxRetry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildJob"]>

  export type BuildJobSelectScalar = {
    id?: boolean
    contractId?: boolean
    chain?: boolean
    jobId?: boolean
    status?: boolean
    podName?: boolean
    command?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    output?: boolean
    error?: boolean
    retryCount?: boolean
    maxRetry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BuildJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "chain" | "jobId" | "status" | "podName" | "command" | "startedAt" | "completedAt" | "duration" | "output" | "error" | "retryCount" | "maxRetry" | "createdAt" | "updatedAt", ExtArgs["result"]["buildJob"]>
  export type BuildJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type BuildJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type BuildJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $BuildJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuildJob"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      chain: $Enums.Chain
      jobId: string
      status: $Enums.BuildStatus
      podName: string | null
      command: $Enums.Command
      startedAt: Date | null
      completedAt: Date | null
      duration: number | null
      output: Prisma.JsonValue | null
      error: string | null
      retryCount: number
      maxRetry: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["buildJob"]>
    composites: {}
  }

  type BuildJobGetPayload<S extends boolean | null | undefined | BuildJobDefaultArgs> = $Result.GetResult<Prisma.$BuildJobPayload, S>

  type BuildJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildJobCountAggregateInputType | true
    }

  export interface BuildJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuildJob'], meta: { name: 'BuildJob' } }
    /**
     * Find zero or one BuildJob that matches the filter.
     * @param {BuildJobFindUniqueArgs} args - Arguments to find a BuildJob
     * @example
     * // Get one BuildJob
     * const buildJob = await prisma.buildJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildJobFindUniqueArgs>(args: SelectSubset<T, BuildJobFindUniqueArgs<ExtArgs>>): Prisma__BuildJobClient<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BuildJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildJobFindUniqueOrThrowArgs} args - Arguments to find a BuildJob
     * @example
     * // Get one BuildJob
     * const buildJob = await prisma.buildJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildJobFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildJobClient<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuildJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildJobFindFirstArgs} args - Arguments to find a BuildJob
     * @example
     * // Get one BuildJob
     * const buildJob = await prisma.buildJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildJobFindFirstArgs>(args?: SelectSubset<T, BuildJobFindFirstArgs<ExtArgs>>): Prisma__BuildJobClient<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuildJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildJobFindFirstOrThrowArgs} args - Arguments to find a BuildJob
     * @example
     * // Get one BuildJob
     * const buildJob = await prisma.buildJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildJobFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildJobClient<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BuildJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuildJobs
     * const buildJobs = await prisma.buildJob.findMany()
     * 
     * // Get first 10 BuildJobs
     * const buildJobs = await prisma.buildJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildJobWithIdOnly = await prisma.buildJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildJobFindManyArgs>(args?: SelectSubset<T, BuildJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BuildJob.
     * @param {BuildJobCreateArgs} args - Arguments to create a BuildJob.
     * @example
     * // Create one BuildJob
     * const BuildJob = await prisma.buildJob.create({
     *   data: {
     *     // ... data to create a BuildJob
     *   }
     * })
     * 
     */
    create<T extends BuildJobCreateArgs>(args: SelectSubset<T, BuildJobCreateArgs<ExtArgs>>): Prisma__BuildJobClient<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BuildJobs.
     * @param {BuildJobCreateManyArgs} args - Arguments to create many BuildJobs.
     * @example
     * // Create many BuildJobs
     * const buildJob = await prisma.buildJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildJobCreateManyArgs>(args?: SelectSubset<T, BuildJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BuildJobs and returns the data saved in the database.
     * @param {BuildJobCreateManyAndReturnArgs} args - Arguments to create many BuildJobs.
     * @example
     * // Create many BuildJobs
     * const buildJob = await prisma.buildJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BuildJobs and only return the `id`
     * const buildJobWithIdOnly = await prisma.buildJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildJobCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BuildJob.
     * @param {BuildJobDeleteArgs} args - Arguments to delete one BuildJob.
     * @example
     * // Delete one BuildJob
     * const BuildJob = await prisma.buildJob.delete({
     *   where: {
     *     // ... filter to delete one BuildJob
     *   }
     * })
     * 
     */
    delete<T extends BuildJobDeleteArgs>(args: SelectSubset<T, BuildJobDeleteArgs<ExtArgs>>): Prisma__BuildJobClient<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BuildJob.
     * @param {BuildJobUpdateArgs} args - Arguments to update one BuildJob.
     * @example
     * // Update one BuildJob
     * const buildJob = await prisma.buildJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildJobUpdateArgs>(args: SelectSubset<T, BuildJobUpdateArgs<ExtArgs>>): Prisma__BuildJobClient<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BuildJobs.
     * @param {BuildJobDeleteManyArgs} args - Arguments to filter BuildJobs to delete.
     * @example
     * // Delete a few BuildJobs
     * const { count } = await prisma.buildJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildJobDeleteManyArgs>(args?: SelectSubset<T, BuildJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuildJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuildJobs
     * const buildJob = await prisma.buildJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildJobUpdateManyArgs>(args: SelectSubset<T, BuildJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuildJobs and returns the data updated in the database.
     * @param {BuildJobUpdateManyAndReturnArgs} args - Arguments to update many BuildJobs.
     * @example
     * // Update many BuildJobs
     * const buildJob = await prisma.buildJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BuildJobs and only return the `id`
     * const buildJobWithIdOnly = await prisma.buildJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends BuildJobUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BuildJob.
     * @param {BuildJobUpsertArgs} args - Arguments to update or create a BuildJob.
     * @example
     * // Update or create a BuildJob
     * const buildJob = await prisma.buildJob.upsert({
     *   create: {
     *     // ... data to create a BuildJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuildJob we want to update
     *   }
     * })
     */
    upsert<T extends BuildJobUpsertArgs>(args: SelectSubset<T, BuildJobUpsertArgs<ExtArgs>>): Prisma__BuildJobClient<$Result.GetResult<Prisma.$BuildJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BuildJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildJobCountArgs} args - Arguments to filter BuildJobs to count.
     * @example
     * // Count the number of BuildJobs
     * const count = await prisma.buildJob.count({
     *   where: {
     *     // ... the filter for the BuildJobs we want to count
     *   }
     * })
    **/
    count<T extends BuildJobCountArgs>(
      args?: Subset<T, BuildJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuildJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuildJobAggregateArgs>(args: Subset<T, BuildJobAggregateArgs>): Prisma.PrismaPromise<GetBuildJobAggregateType<T>>

    /**
     * Group by BuildJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildJobGroupByArgs} args - Group by arguments.
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
      T extends BuildJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildJobGroupByArgs['orderBy'] }
        : { orderBy?: BuildJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuildJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuildJob model
   */
  readonly fields: BuildJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuildJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BuildJob model
   */
  interface BuildJobFieldRefs {
    readonly id: FieldRef<"BuildJob", 'String'>
    readonly contractId: FieldRef<"BuildJob", 'String'>
    readonly chain: FieldRef<"BuildJob", 'Chain'>
    readonly jobId: FieldRef<"BuildJob", 'String'>
    readonly status: FieldRef<"BuildJob", 'BuildStatus'>
    readonly podName: FieldRef<"BuildJob", 'String'>
    readonly command: FieldRef<"BuildJob", 'Command'>
    readonly startedAt: FieldRef<"BuildJob", 'DateTime'>
    readonly completedAt: FieldRef<"BuildJob", 'DateTime'>
    readonly duration: FieldRef<"BuildJob", 'Int'>
    readonly output: FieldRef<"BuildJob", 'Json'>
    readonly error: FieldRef<"BuildJob", 'String'>
    readonly retryCount: FieldRef<"BuildJob", 'Int'>
    readonly maxRetry: FieldRef<"BuildJob", 'Int'>
    readonly createdAt: FieldRef<"BuildJob", 'DateTime'>
    readonly updatedAt: FieldRef<"BuildJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BuildJob findUnique
   */
  export type BuildJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    /**
     * Filter, which BuildJob to fetch.
     */
    where: BuildJobWhereUniqueInput
  }

  /**
   * BuildJob findUniqueOrThrow
   */
  export type BuildJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    /**
     * Filter, which BuildJob to fetch.
     */
    where: BuildJobWhereUniqueInput
  }

  /**
   * BuildJob findFirst
   */
  export type BuildJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    /**
     * Filter, which BuildJob to fetch.
     */
    where?: BuildJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildJobs to fetch.
     */
    orderBy?: BuildJobOrderByWithRelationInput | BuildJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildJobs.
     */
    cursor?: BuildJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildJobs.
     */
    distinct?: BuildJobScalarFieldEnum | BuildJobScalarFieldEnum[]
  }

  /**
   * BuildJob findFirstOrThrow
   */
  export type BuildJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    /**
     * Filter, which BuildJob to fetch.
     */
    where?: BuildJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildJobs to fetch.
     */
    orderBy?: BuildJobOrderByWithRelationInput | BuildJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildJobs.
     */
    cursor?: BuildJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildJobs.
     */
    distinct?: BuildJobScalarFieldEnum | BuildJobScalarFieldEnum[]
  }

  /**
   * BuildJob findMany
   */
  export type BuildJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    /**
     * Filter, which BuildJobs to fetch.
     */
    where?: BuildJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildJobs to fetch.
     */
    orderBy?: BuildJobOrderByWithRelationInput | BuildJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuildJobs.
     */
    cursor?: BuildJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildJobs.
     */
    skip?: number
    distinct?: BuildJobScalarFieldEnum | BuildJobScalarFieldEnum[]
  }

  /**
   * BuildJob create
   */
  export type BuildJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    /**
     * The data needed to create a BuildJob.
     */
    data: XOR<BuildJobCreateInput, BuildJobUncheckedCreateInput>
  }

  /**
   * BuildJob createMany
   */
  export type BuildJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuildJobs.
     */
    data: BuildJobCreateManyInput | BuildJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BuildJob createManyAndReturn
   */
  export type BuildJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * The data used to create many BuildJobs.
     */
    data: BuildJobCreateManyInput | BuildJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuildJob update
   */
  export type BuildJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    /**
     * The data needed to update a BuildJob.
     */
    data: XOR<BuildJobUpdateInput, BuildJobUncheckedUpdateInput>
    /**
     * Choose, which BuildJob to update.
     */
    where: BuildJobWhereUniqueInput
  }

  /**
   * BuildJob updateMany
   */
  export type BuildJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuildJobs.
     */
    data: XOR<BuildJobUpdateManyMutationInput, BuildJobUncheckedUpdateManyInput>
    /**
     * Filter which BuildJobs to update
     */
    where?: BuildJobWhereInput
    /**
     * Limit how many BuildJobs to update.
     */
    limit?: number
  }

  /**
   * BuildJob updateManyAndReturn
   */
  export type BuildJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * The data used to update BuildJobs.
     */
    data: XOR<BuildJobUpdateManyMutationInput, BuildJobUncheckedUpdateManyInput>
    /**
     * Filter which BuildJobs to update
     */
    where?: BuildJobWhereInput
    /**
     * Limit how many BuildJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuildJob upsert
   */
  export type BuildJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    /**
     * The filter to search for the BuildJob to update in case it exists.
     */
    where: BuildJobWhereUniqueInput
    /**
     * In case the BuildJob found by the `where` argument doesn't exist, create a new BuildJob with this data.
     */
    create: XOR<BuildJobCreateInput, BuildJobUncheckedCreateInput>
    /**
     * In case the BuildJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildJobUpdateInput, BuildJobUncheckedUpdateInput>
  }

  /**
   * BuildJob delete
   */
  export type BuildJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
    /**
     * Filter which BuildJob to delete.
     */
    where: BuildJobWhereUniqueInput
  }

  /**
   * BuildJob deleteMany
   */
  export type BuildJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildJobs to delete
     */
    where?: BuildJobWhereInput
    /**
     * Limit how many BuildJobs to delete.
     */
    limit?: number
  }

  /**
   * BuildJob without action
   */
  export type BuildJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildJob
     */
    select?: BuildJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildJob
     */
    omit?: BuildJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildJobInclude<ExtArgs> | null
  }


  /**
   * Model Deployment
   */

  export type AggregateDeployment = {
    _count: DeploymentCountAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  export type DeploymentMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    chain: $Enums.Chain | null
    network: string | null
    deployedAt: Date | null
    txSignature: string | null
    status: string | null
  }

  export type DeploymentMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    chain: $Enums.Chain | null
    network: string | null
    deployedAt: Date | null
    txSignature: string | null
    status: string | null
  }

  export type DeploymentCountAggregateOutputType = {
    id: number
    contractId: number
    chain: number
    network: number
    deployedAt: number
    txSignature: number
    status: number
    metadata: number
    _all: number
  }


  export type DeploymentMinAggregateInputType = {
    id?: true
    contractId?: true
    chain?: true
    network?: true
    deployedAt?: true
    txSignature?: true
    status?: true
  }

  export type DeploymentMaxAggregateInputType = {
    id?: true
    contractId?: true
    chain?: true
    network?: true
    deployedAt?: true
    txSignature?: true
    status?: true
  }

  export type DeploymentCountAggregateInputType = {
    id?: true
    contractId?: true
    chain?: true
    network?: true
    deployedAt?: true
    txSignature?: true
    status?: true
    metadata?: true
    _all?: true
  }

  export type DeploymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployment to aggregate.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deployments
    **/
    _count?: true | DeploymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeploymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeploymentMaxAggregateInputType
  }

  export type GetDeploymentAggregateType<T extends DeploymentAggregateArgs> = {
        [P in keyof T & keyof AggregateDeployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeployment[P]>
      : GetScalarType<T[P], AggregateDeployment[P]>
  }




  export type DeploymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithAggregationInput | DeploymentOrderByWithAggregationInput[]
    by: DeploymentScalarFieldEnum[] | DeploymentScalarFieldEnum
    having?: DeploymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeploymentCountAggregateInputType | true
    _min?: DeploymentMinAggregateInputType
    _max?: DeploymentMaxAggregateInputType
  }

  export type DeploymentGroupByOutputType = {
    id: string
    contractId: string
    chain: $Enums.Chain
    network: string
    deployedAt: Date
    txSignature: string | null
    status: string
    metadata: JsonValue | null
    _count: DeploymentCountAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  type GetDeploymentGroupByPayload<T extends DeploymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeploymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeploymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
            : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
        }
      >
    >


  export type DeploymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    chain?: boolean
    network?: boolean
    deployedAt?: boolean
    txSignature?: boolean
    status?: boolean
    metadata?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    chain?: boolean
    network?: boolean
    deployedAt?: boolean
    txSignature?: boolean
    status?: boolean
    metadata?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    chain?: boolean
    network?: boolean
    deployedAt?: boolean
    txSignature?: boolean
    status?: boolean
    metadata?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectScalar = {
    id?: boolean
    contractId?: boolean
    chain?: boolean
    network?: boolean
    deployedAt?: boolean
    txSignature?: boolean
    status?: boolean
    metadata?: boolean
  }

  export type DeploymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "chain" | "network" | "deployedAt" | "txSignature" | "status" | "metadata", ExtArgs["result"]["deployment"]>
  export type DeploymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $DeploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deployment"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      chain: $Enums.Chain
      network: string
      deployedAt: Date
      txSignature: string | null
      status: string
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["deployment"]>
    composites: {}
  }

  type DeploymentGetPayload<S extends boolean | null | undefined | DeploymentDefaultArgs> = $Result.GetResult<Prisma.$DeploymentPayload, S>

  type DeploymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeploymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeploymentCountAggregateInputType | true
    }

  export interface DeploymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deployment'], meta: { name: 'Deployment' } }
    /**
     * Find zero or one Deployment that matches the filter.
     * @param {DeploymentFindUniqueArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeploymentFindUniqueArgs>(args: SelectSubset<T, DeploymentFindUniqueArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deployment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeploymentFindUniqueOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeploymentFindUniqueOrThrowArgs>(args: SelectSubset<T, DeploymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deployment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeploymentFindFirstArgs>(args?: SelectSubset<T, DeploymentFindFirstArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deployment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeploymentFindFirstOrThrowArgs>(args?: SelectSubset<T, DeploymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deployments
     * const deployments = await prisma.deployment.findMany()
     * 
     * // Get first 10 Deployments
     * const deployments = await prisma.deployment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deploymentWithIdOnly = await prisma.deployment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeploymentFindManyArgs>(args?: SelectSubset<T, DeploymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deployment.
     * @param {DeploymentCreateArgs} args - Arguments to create a Deployment.
     * @example
     * // Create one Deployment
     * const Deployment = await prisma.deployment.create({
     *   data: {
     *     // ... data to create a Deployment
     *   }
     * })
     * 
     */
    create<T extends DeploymentCreateArgs>(args: SelectSubset<T, DeploymentCreateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deployments.
     * @param {DeploymentCreateManyArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeploymentCreateManyArgs>(args?: SelectSubset<T, DeploymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deployments and returns the data saved in the database.
     * @param {DeploymentCreateManyAndReturnArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeploymentCreateManyAndReturnArgs>(args?: SelectSubset<T, DeploymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deployment.
     * @param {DeploymentDeleteArgs} args - Arguments to delete one Deployment.
     * @example
     * // Delete one Deployment
     * const Deployment = await prisma.deployment.delete({
     *   where: {
     *     // ... filter to delete one Deployment
     *   }
     * })
     * 
     */
    delete<T extends DeploymentDeleteArgs>(args: SelectSubset<T, DeploymentDeleteArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deployment.
     * @param {DeploymentUpdateArgs} args - Arguments to update one Deployment.
     * @example
     * // Update one Deployment
     * const deployment = await prisma.deployment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeploymentUpdateArgs>(args: SelectSubset<T, DeploymentUpdateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deployments.
     * @param {DeploymentDeleteManyArgs} args - Arguments to filter Deployments to delete.
     * @example
     * // Delete a few Deployments
     * const { count } = await prisma.deployment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeploymentDeleteManyArgs>(args?: SelectSubset<T, DeploymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeploymentUpdateManyArgs>(args: SelectSubset<T, DeploymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments and returns the data updated in the database.
     * @param {DeploymentUpdateManyAndReturnArgs} args - Arguments to update many Deployments.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeploymentUpdateManyAndReturnArgs>(args: SelectSubset<T, DeploymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deployment.
     * @param {DeploymentUpsertArgs} args - Arguments to update or create a Deployment.
     * @example
     * // Update or create a Deployment
     * const deployment = await prisma.deployment.upsert({
     *   create: {
     *     // ... data to create a Deployment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deployment we want to update
     *   }
     * })
     */
    upsert<T extends DeploymentUpsertArgs>(args: SelectSubset<T, DeploymentUpsertArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentCountArgs} args - Arguments to filter Deployments to count.
     * @example
     * // Count the number of Deployments
     * const count = await prisma.deployment.count({
     *   where: {
     *     // ... the filter for the Deployments we want to count
     *   }
     * })
    **/
    count<T extends DeploymentCountArgs>(
      args?: Subset<T, DeploymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeploymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeploymentAggregateArgs>(args: Subset<T, DeploymentAggregateArgs>): Prisma.PrismaPromise<GetDeploymentAggregateType<T>>

    /**
     * Group by Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentGroupByArgs} args - Group by arguments.
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
      T extends DeploymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeploymentGroupByArgs['orderBy'] }
        : { orderBy?: DeploymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeploymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeploymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deployment model
   */
  readonly fields: DeploymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deployment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeploymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Deployment model
   */
  interface DeploymentFieldRefs {
    readonly id: FieldRef<"Deployment", 'String'>
    readonly contractId: FieldRef<"Deployment", 'String'>
    readonly chain: FieldRef<"Deployment", 'Chain'>
    readonly network: FieldRef<"Deployment", 'String'>
    readonly deployedAt: FieldRef<"Deployment", 'DateTime'>
    readonly txSignature: FieldRef<"Deployment", 'String'>
    readonly status: FieldRef<"Deployment", 'String'>
    readonly metadata: FieldRef<"Deployment", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Deployment findUnique
   */
  export type DeploymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findUniqueOrThrow
   */
  export type DeploymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findFirst
   */
  export type DeploymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findFirstOrThrow
   */
  export type DeploymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findMany
   */
  export type DeploymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployments to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment create
   */
  export type DeploymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Deployment.
     */
    data: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
  }

  /**
   * Deployment createMany
   */
  export type DeploymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deployment createManyAndReturn
   */
  export type DeploymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deployment update
   */
  export type DeploymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Deployment.
     */
    data: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
    /**
     * Choose, which Deployment to update.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment updateMany
   */
  export type DeploymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deployments.
     */
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyInput>
    /**
     * Filter which Deployments to update
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to update.
     */
    limit?: number
  }

  /**
   * Deployment updateManyAndReturn
   */
  export type DeploymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * The data used to update Deployments.
     */
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyInput>
    /**
     * Filter which Deployments to update
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deployment upsert
   */
  export type DeploymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Deployment to update in case it exists.
     */
    where: DeploymentWhereUniqueInput
    /**
     * In case the Deployment found by the `where` argument doesn't exist, create a new Deployment with this data.
     */
    create: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
    /**
     * In case the Deployment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
  }

  /**
   * Deployment delete
   */
  export type DeploymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter which Deployment to delete.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment deleteMany
   */
  export type DeploymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployments to delete
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to delete.
     */
    limit?: number
  }

  /**
   * Deployment without action
   */
  export type DeploymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    role: $Enums.ChatRole | null
    content: string | null
    stage: $Enums.ContractGenerationStage | null
    plannerContext: string | null
    isPlanExecuted: boolean | null
    templateId: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    role: $Enums.ChatRole | null
    content: string | null
    stage: $Enums.ContractGenerationStage | null
    plannerContext: string | null
    isPlanExecuted: boolean | null
    templateId: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    contractId: number
    role: number
    content: number
    stage: number
    plannerContext: number
    isPlanExecuted: number
    templateId: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    contractId?: true
    role?: true
    content?: true
    stage?: true
    plannerContext?: true
    isPlanExecuted?: true
    templateId?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    contractId?: true
    role?: true
    content?: true
    stage?: true
    plannerContext?: true
    isPlanExecuted?: true
    templateId?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    contractId?: true
    role?: true
    content?: true
    stage?: true
    plannerContext?: true
    isPlanExecuted?: true
    templateId?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    contractId: string
    role: $Enums.ChatRole
    content: string
    stage: $Enums.ContractGenerationStage | null
    plannerContext: string | null
    isPlanExecuted: boolean
    templateId: string | null
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    role?: boolean
    content?: boolean
    stage?: boolean
    plannerContext?: boolean
    isPlanExecuted?: boolean
    templateId?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    template?: boolean | Message$templateArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    role?: boolean
    content?: boolean
    stage?: boolean
    plannerContext?: boolean
    isPlanExecuted?: boolean
    templateId?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    template?: boolean | Message$templateArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    role?: boolean
    content?: boolean
    stage?: boolean
    plannerContext?: boolean
    isPlanExecuted?: boolean
    templateId?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    template?: boolean | Message$templateArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    contractId?: boolean
    role?: boolean
    content?: boolean
    stage?: boolean
    plannerContext?: boolean
    isPlanExecuted?: boolean
    templateId?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "role" | "content" | "stage" | "plannerContext" | "isPlanExecuted" | "templateId" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    template?: boolean | Message$templateArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    template?: boolean | Message$templateArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    template?: boolean | Message$templateArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      role: $Enums.ChatRole
      content: string
      stage: $Enums.ContractGenerationStage | null
      plannerContext: string | null
      isPlanExecuted: boolean
      templateId: string | null
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends Message$templateArgs<ExtArgs> = {}>(args?: Subset<T, Message$templateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly contractId: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'ChatRole'>
    readonly content: FieldRef<"Message", 'String'>
    readonly stage: FieldRef<"Message", 'ContractGenerationStage'>
    readonly plannerContext: FieldRef<"Message", 'String'>
    readonly isPlanExecuted: FieldRef<"Message", 'Boolean'>
    readonly templateId: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.template
   */
  export type Message$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.PlanType | null
    status: $Enums.SubscriptionStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    start: Date | null
    end: Date | null
    autoRenew: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.PlanType | null
    status: $Enums.SubscriptionStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    start: Date | null
    end: Date | null
    autoRenew: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    plan: number
    status: number
    razorpayOrderId: number
    razorpayPaymentId: number
    razorpaySignature: number
    start: number
    end: number
    autoRenew: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    start?: true
    end?: true
    autoRenew?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    start?: true
    end?: true
    autoRenew?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    start?: true
    end?: true
    autoRenew?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    plan: $Enums.PlanType
    status: $Enums.SubscriptionStatus
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    start: Date
    end: Date | null
    autoRenew: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    start?: boolean
    end?: boolean
    autoRenew?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    start?: boolean
    end?: boolean
    autoRenew?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    start?: boolean
    end?: boolean
    autoRenew?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    start?: boolean
    end?: boolean
    autoRenew?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "plan" | "status" | "razorpayOrderId" | "razorpayPaymentId" | "razorpaySignature" | "start" | "end" | "autoRenew" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plan: $Enums.PlanType
      status: $Enums.SubscriptionStatus
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      start: Date
      end: Date | null
      autoRenew: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'PlanType'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly razorpayOrderId: FieldRef<"Subscription", 'String'>
    readonly razorpayPaymentId: FieldRef<"Subscription", 'String'>
    readonly razorpaySignature: FieldRef<"Subscription", 'String'>
    readonly start: FieldRef<"Subscription", 'DateTime'>
    readonly end: FieldRef<"Subscription", 'DateTime'>
    readonly autoRenew: FieldRef<"Subscription", 'Boolean'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model ContractGenerationReviews
   */

  export type AggregateContractGenerationReviews = {
    _count: ContractGenerationReviewsCountAggregateOutputType | null
    _avg: ContractGenerationReviewsAvgAggregateOutputType | null
    _sum: ContractGenerationReviewsSumAggregateOutputType | null
    _min: ContractGenerationReviewsMinAggregateOutputType | null
    _max: ContractGenerationReviewsMaxAggregateOutputType | null
  }

  export type ContractGenerationReviewsAvgAggregateOutputType = {
    rating: number | null
  }

  export type ContractGenerationReviewsSumAggregateOutputType = {
    rating: number | null
  }

  export type ContractGenerationReviewsMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    userId: string | null
    rating: number | null
    liked: string | null
    disliked: string | null
    createdAt: Date | null
  }

  export type ContractGenerationReviewsMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    userId: string | null
    rating: number | null
    liked: string | null
    disliked: string | null
    createdAt: Date | null
  }

  export type ContractGenerationReviewsCountAggregateOutputType = {
    id: number
    contractId: number
    userId: number
    rating: number
    liked: number
    disliked: number
    createdAt: number
    _all: number
  }


  export type ContractGenerationReviewsAvgAggregateInputType = {
    rating?: true
  }

  export type ContractGenerationReviewsSumAggregateInputType = {
    rating?: true
  }

  export type ContractGenerationReviewsMinAggregateInputType = {
    id?: true
    contractId?: true
    userId?: true
    rating?: true
    liked?: true
    disliked?: true
    createdAt?: true
  }

  export type ContractGenerationReviewsMaxAggregateInputType = {
    id?: true
    contractId?: true
    userId?: true
    rating?: true
    liked?: true
    disliked?: true
    createdAt?: true
  }

  export type ContractGenerationReviewsCountAggregateInputType = {
    id?: true
    contractId?: true
    userId?: true
    rating?: true
    liked?: true
    disliked?: true
    createdAt?: true
    _all?: true
  }

  export type ContractGenerationReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractGenerationReviews to aggregate.
     */
    where?: ContractGenerationReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractGenerationReviews to fetch.
     */
    orderBy?: ContractGenerationReviewsOrderByWithRelationInput | ContractGenerationReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractGenerationReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractGenerationReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractGenerationReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractGenerationReviews
    **/
    _count?: true | ContractGenerationReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractGenerationReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractGenerationReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractGenerationReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractGenerationReviewsMaxAggregateInputType
  }

  export type GetContractGenerationReviewsAggregateType<T extends ContractGenerationReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateContractGenerationReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractGenerationReviews[P]>
      : GetScalarType<T[P], AggregateContractGenerationReviews[P]>
  }




  export type ContractGenerationReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractGenerationReviewsWhereInput
    orderBy?: ContractGenerationReviewsOrderByWithAggregationInput | ContractGenerationReviewsOrderByWithAggregationInput[]
    by: ContractGenerationReviewsScalarFieldEnum[] | ContractGenerationReviewsScalarFieldEnum
    having?: ContractGenerationReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractGenerationReviewsCountAggregateInputType | true
    _avg?: ContractGenerationReviewsAvgAggregateInputType
    _sum?: ContractGenerationReviewsSumAggregateInputType
    _min?: ContractGenerationReviewsMinAggregateInputType
    _max?: ContractGenerationReviewsMaxAggregateInputType
  }

  export type ContractGenerationReviewsGroupByOutputType = {
    id: string
    contractId: string
    userId: string
    rating: number
    liked: string | null
    disliked: string | null
    createdAt: Date
    _count: ContractGenerationReviewsCountAggregateOutputType | null
    _avg: ContractGenerationReviewsAvgAggregateOutputType | null
    _sum: ContractGenerationReviewsSumAggregateOutputType | null
    _min: ContractGenerationReviewsMinAggregateOutputType | null
    _max: ContractGenerationReviewsMaxAggregateOutputType | null
  }

  type GetContractGenerationReviewsGroupByPayload<T extends ContractGenerationReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGenerationReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGenerationReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGenerationReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGenerationReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ContractGenerationReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    userId?: boolean
    rating?: boolean
    liked?: boolean
    disliked?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractGenerationReviews"]>

  export type ContractGenerationReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    userId?: boolean
    rating?: boolean
    liked?: boolean
    disliked?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractGenerationReviews"]>

  export type ContractGenerationReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    userId?: boolean
    rating?: boolean
    liked?: boolean
    disliked?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractGenerationReviews"]>

  export type ContractGenerationReviewsSelectScalar = {
    id?: boolean
    contractId?: boolean
    userId?: boolean
    rating?: boolean
    liked?: boolean
    disliked?: boolean
    createdAt?: boolean
  }

  export type ContractGenerationReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "userId" | "rating" | "liked" | "disliked" | "createdAt", ExtArgs["result"]["contractGenerationReviews"]>
  export type ContractGenerationReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContractGenerationReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContractGenerationReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContractGenerationReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractGenerationReviews"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      userId: string
      rating: number
      liked: string | null
      disliked: string | null
      createdAt: Date
    }, ExtArgs["result"]["contractGenerationReviews"]>
    composites: {}
  }

  type ContractGenerationReviewsGetPayload<S extends boolean | null | undefined | ContractGenerationReviewsDefaultArgs> = $Result.GetResult<Prisma.$ContractGenerationReviewsPayload, S>

  type ContractGenerationReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractGenerationReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractGenerationReviewsCountAggregateInputType | true
    }

  export interface ContractGenerationReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractGenerationReviews'], meta: { name: 'ContractGenerationReviews' } }
    /**
     * Find zero or one ContractGenerationReviews that matches the filter.
     * @param {ContractGenerationReviewsFindUniqueArgs} args - Arguments to find a ContractGenerationReviews
     * @example
     * // Get one ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractGenerationReviewsFindUniqueArgs>(args: SelectSubset<T, ContractGenerationReviewsFindUniqueArgs<ExtArgs>>): Prisma__ContractGenerationReviewsClient<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractGenerationReviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractGenerationReviewsFindUniqueOrThrowArgs} args - Arguments to find a ContractGenerationReviews
     * @example
     * // Get one ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractGenerationReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractGenerationReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractGenerationReviewsClient<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractGenerationReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGenerationReviewsFindFirstArgs} args - Arguments to find a ContractGenerationReviews
     * @example
     * // Get one ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractGenerationReviewsFindFirstArgs>(args?: SelectSubset<T, ContractGenerationReviewsFindFirstArgs<ExtArgs>>): Prisma__ContractGenerationReviewsClient<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractGenerationReviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGenerationReviewsFindFirstOrThrowArgs} args - Arguments to find a ContractGenerationReviews
     * @example
     * // Get one ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractGenerationReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractGenerationReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractGenerationReviewsClient<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractGenerationReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGenerationReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.findMany()
     * 
     * // Get first 10 ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractGenerationReviewsWithIdOnly = await prisma.contractGenerationReviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractGenerationReviewsFindManyArgs>(args?: SelectSubset<T, ContractGenerationReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractGenerationReviews.
     * @param {ContractGenerationReviewsCreateArgs} args - Arguments to create a ContractGenerationReviews.
     * @example
     * // Create one ContractGenerationReviews
     * const ContractGenerationReviews = await prisma.contractGenerationReviews.create({
     *   data: {
     *     // ... data to create a ContractGenerationReviews
     *   }
     * })
     * 
     */
    create<T extends ContractGenerationReviewsCreateArgs>(args: SelectSubset<T, ContractGenerationReviewsCreateArgs<ExtArgs>>): Prisma__ContractGenerationReviewsClient<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractGenerationReviews.
     * @param {ContractGenerationReviewsCreateManyArgs} args - Arguments to create many ContractGenerationReviews.
     * @example
     * // Create many ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractGenerationReviewsCreateManyArgs>(args?: SelectSubset<T, ContractGenerationReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractGenerationReviews and returns the data saved in the database.
     * @param {ContractGenerationReviewsCreateManyAndReturnArgs} args - Arguments to create many ContractGenerationReviews.
     * @example
     * // Create many ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractGenerationReviews and only return the `id`
     * const contractGenerationReviewsWithIdOnly = await prisma.contractGenerationReviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractGenerationReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractGenerationReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContractGenerationReviews.
     * @param {ContractGenerationReviewsDeleteArgs} args - Arguments to delete one ContractGenerationReviews.
     * @example
     * // Delete one ContractGenerationReviews
     * const ContractGenerationReviews = await prisma.contractGenerationReviews.delete({
     *   where: {
     *     // ... filter to delete one ContractGenerationReviews
     *   }
     * })
     * 
     */
    delete<T extends ContractGenerationReviewsDeleteArgs>(args: SelectSubset<T, ContractGenerationReviewsDeleteArgs<ExtArgs>>): Prisma__ContractGenerationReviewsClient<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractGenerationReviews.
     * @param {ContractGenerationReviewsUpdateArgs} args - Arguments to update one ContractGenerationReviews.
     * @example
     * // Update one ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractGenerationReviewsUpdateArgs>(args: SelectSubset<T, ContractGenerationReviewsUpdateArgs<ExtArgs>>): Prisma__ContractGenerationReviewsClient<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractGenerationReviews.
     * @param {ContractGenerationReviewsDeleteManyArgs} args - Arguments to filter ContractGenerationReviews to delete.
     * @example
     * // Delete a few ContractGenerationReviews
     * const { count } = await prisma.contractGenerationReviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractGenerationReviewsDeleteManyArgs>(args?: SelectSubset<T, ContractGenerationReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractGenerationReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGenerationReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractGenerationReviewsUpdateManyArgs>(args: SelectSubset<T, ContractGenerationReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractGenerationReviews and returns the data updated in the database.
     * @param {ContractGenerationReviewsUpdateManyAndReturnArgs} args - Arguments to update many ContractGenerationReviews.
     * @example
     * // Update many ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContractGenerationReviews and only return the `id`
     * const contractGenerationReviewsWithIdOnly = await prisma.contractGenerationReviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContractGenerationReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractGenerationReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContractGenerationReviews.
     * @param {ContractGenerationReviewsUpsertArgs} args - Arguments to update or create a ContractGenerationReviews.
     * @example
     * // Update or create a ContractGenerationReviews
     * const contractGenerationReviews = await prisma.contractGenerationReviews.upsert({
     *   create: {
     *     // ... data to create a ContractGenerationReviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractGenerationReviews we want to update
     *   }
     * })
     */
    upsert<T extends ContractGenerationReviewsUpsertArgs>(args: SelectSubset<T, ContractGenerationReviewsUpsertArgs<ExtArgs>>): Prisma__ContractGenerationReviewsClient<$Result.GetResult<Prisma.$ContractGenerationReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractGenerationReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGenerationReviewsCountArgs} args - Arguments to filter ContractGenerationReviews to count.
     * @example
     * // Count the number of ContractGenerationReviews
     * const count = await prisma.contractGenerationReviews.count({
     *   where: {
     *     // ... the filter for the ContractGenerationReviews we want to count
     *   }
     * })
    **/
    count<T extends ContractGenerationReviewsCountArgs>(
      args?: Subset<T, ContractGenerationReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractGenerationReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractGenerationReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGenerationReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractGenerationReviewsAggregateArgs>(args: Subset<T, ContractGenerationReviewsAggregateArgs>): Prisma.PrismaPromise<GetContractGenerationReviewsAggregateType<T>>

    /**
     * Group by ContractGenerationReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGenerationReviewsGroupByArgs} args - Group by arguments.
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
      T extends ContractGenerationReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGenerationReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ContractGenerationReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGenerationReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGenerationReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractGenerationReviews model
   */
  readonly fields: ContractGenerationReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractGenerationReviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractGenerationReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContractGenerationReviews model
   */
  interface ContractGenerationReviewsFieldRefs {
    readonly id: FieldRef<"ContractGenerationReviews", 'String'>
    readonly contractId: FieldRef<"ContractGenerationReviews", 'String'>
    readonly userId: FieldRef<"ContractGenerationReviews", 'String'>
    readonly rating: FieldRef<"ContractGenerationReviews", 'Int'>
    readonly liked: FieldRef<"ContractGenerationReviews", 'String'>
    readonly disliked: FieldRef<"ContractGenerationReviews", 'String'>
    readonly createdAt: FieldRef<"ContractGenerationReviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractGenerationReviews findUnique
   */
  export type ContractGenerationReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    /**
     * Filter, which ContractGenerationReviews to fetch.
     */
    where: ContractGenerationReviewsWhereUniqueInput
  }

  /**
   * ContractGenerationReviews findUniqueOrThrow
   */
  export type ContractGenerationReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    /**
     * Filter, which ContractGenerationReviews to fetch.
     */
    where: ContractGenerationReviewsWhereUniqueInput
  }

  /**
   * ContractGenerationReviews findFirst
   */
  export type ContractGenerationReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    /**
     * Filter, which ContractGenerationReviews to fetch.
     */
    where?: ContractGenerationReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractGenerationReviews to fetch.
     */
    orderBy?: ContractGenerationReviewsOrderByWithRelationInput | ContractGenerationReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractGenerationReviews.
     */
    cursor?: ContractGenerationReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractGenerationReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractGenerationReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractGenerationReviews.
     */
    distinct?: ContractGenerationReviewsScalarFieldEnum | ContractGenerationReviewsScalarFieldEnum[]
  }

  /**
   * ContractGenerationReviews findFirstOrThrow
   */
  export type ContractGenerationReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    /**
     * Filter, which ContractGenerationReviews to fetch.
     */
    where?: ContractGenerationReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractGenerationReviews to fetch.
     */
    orderBy?: ContractGenerationReviewsOrderByWithRelationInput | ContractGenerationReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractGenerationReviews.
     */
    cursor?: ContractGenerationReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractGenerationReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractGenerationReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractGenerationReviews.
     */
    distinct?: ContractGenerationReviewsScalarFieldEnum | ContractGenerationReviewsScalarFieldEnum[]
  }

  /**
   * ContractGenerationReviews findMany
   */
  export type ContractGenerationReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    /**
     * Filter, which ContractGenerationReviews to fetch.
     */
    where?: ContractGenerationReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractGenerationReviews to fetch.
     */
    orderBy?: ContractGenerationReviewsOrderByWithRelationInput | ContractGenerationReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractGenerationReviews.
     */
    cursor?: ContractGenerationReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractGenerationReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractGenerationReviews.
     */
    skip?: number
    distinct?: ContractGenerationReviewsScalarFieldEnum | ContractGenerationReviewsScalarFieldEnum[]
  }

  /**
   * ContractGenerationReviews create
   */
  export type ContractGenerationReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractGenerationReviews.
     */
    data: XOR<ContractGenerationReviewsCreateInput, ContractGenerationReviewsUncheckedCreateInput>
  }

  /**
   * ContractGenerationReviews createMany
   */
  export type ContractGenerationReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractGenerationReviews.
     */
    data: ContractGenerationReviewsCreateManyInput | ContractGenerationReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractGenerationReviews createManyAndReturn
   */
  export type ContractGenerationReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many ContractGenerationReviews.
     */
    data: ContractGenerationReviewsCreateManyInput | ContractGenerationReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractGenerationReviews update
   */
  export type ContractGenerationReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractGenerationReviews.
     */
    data: XOR<ContractGenerationReviewsUpdateInput, ContractGenerationReviewsUncheckedUpdateInput>
    /**
     * Choose, which ContractGenerationReviews to update.
     */
    where: ContractGenerationReviewsWhereUniqueInput
  }

  /**
   * ContractGenerationReviews updateMany
   */
  export type ContractGenerationReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractGenerationReviews.
     */
    data: XOR<ContractGenerationReviewsUpdateManyMutationInput, ContractGenerationReviewsUncheckedUpdateManyInput>
    /**
     * Filter which ContractGenerationReviews to update
     */
    where?: ContractGenerationReviewsWhereInput
    /**
     * Limit how many ContractGenerationReviews to update.
     */
    limit?: number
  }

  /**
   * ContractGenerationReviews updateManyAndReturn
   */
  export type ContractGenerationReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * The data used to update ContractGenerationReviews.
     */
    data: XOR<ContractGenerationReviewsUpdateManyMutationInput, ContractGenerationReviewsUncheckedUpdateManyInput>
    /**
     * Filter which ContractGenerationReviews to update
     */
    where?: ContractGenerationReviewsWhereInput
    /**
     * Limit how many ContractGenerationReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractGenerationReviews upsert
   */
  export type ContractGenerationReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractGenerationReviews to update in case it exists.
     */
    where: ContractGenerationReviewsWhereUniqueInput
    /**
     * In case the ContractGenerationReviews found by the `where` argument doesn't exist, create a new ContractGenerationReviews with this data.
     */
    create: XOR<ContractGenerationReviewsCreateInput, ContractGenerationReviewsUncheckedCreateInput>
    /**
     * In case the ContractGenerationReviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractGenerationReviewsUpdateInput, ContractGenerationReviewsUncheckedUpdateInput>
  }

  /**
   * ContractGenerationReviews delete
   */
  export type ContractGenerationReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
    /**
     * Filter which ContractGenerationReviews to delete.
     */
    where: ContractGenerationReviewsWhereUniqueInput
  }

  /**
   * ContractGenerationReviews deleteMany
   */
  export type ContractGenerationReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractGenerationReviews to delete
     */
    where?: ContractGenerationReviewsWhereInput
    /**
     * Limit how many ContractGenerationReviews to delete.
     */
    limit?: number
  }

  /**
   * ContractGenerationReviews without action
   */
  export type ContractGenerationReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractGenerationReviews
     */
    select?: ContractGenerationReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractGenerationReviews
     */
    omit?: ContractGenerationReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractGenerationReviewsInclude<ExtArgs> | null
  }


  /**
   * Model PublicReview
   */

  export type AggregatePublicReview = {
    _count: PublicReviewCountAggregateOutputType | null
    _avg: PublicReviewAvgAggregateOutputType | null
    _sum: PublicReviewSumAggregateOutputType | null
    _min: PublicReviewMinAggregateOutputType | null
    _max: PublicReviewMaxAggregateOutputType | null
  }

  export type PublicReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type PublicReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type PublicReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    title: string | null
    content: string | null
    visible: boolean | null
    createdAt: Date | null
  }

  export type PublicReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    title: string | null
    content: string | null
    visible: boolean | null
    createdAt: Date | null
  }

  export type PublicReviewCountAggregateOutputType = {
    id: number
    userId: number
    rating: number
    title: number
    content: number
    visible: number
    createdAt: number
    _all: number
  }


  export type PublicReviewAvgAggregateInputType = {
    rating?: true
  }

  export type PublicReviewSumAggregateInputType = {
    rating?: true
  }

  export type PublicReviewMinAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    title?: true
    content?: true
    visible?: true
    createdAt?: true
  }

  export type PublicReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    title?: true
    content?: true
    visible?: true
    createdAt?: true
  }

  export type PublicReviewCountAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    title?: true
    content?: true
    visible?: true
    createdAt?: true
    _all?: true
  }

  export type PublicReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicReview to aggregate.
     */
    where?: PublicReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicReviews to fetch.
     */
    orderBy?: PublicReviewOrderByWithRelationInput | PublicReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicReviews
    **/
    _count?: true | PublicReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicReviewMaxAggregateInputType
  }

  export type GetPublicReviewAggregateType<T extends PublicReviewAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicReview[P]>
      : GetScalarType<T[P], AggregatePublicReview[P]>
  }




  export type PublicReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicReviewWhereInput
    orderBy?: PublicReviewOrderByWithAggregationInput | PublicReviewOrderByWithAggregationInput[]
    by: PublicReviewScalarFieldEnum[] | PublicReviewScalarFieldEnum
    having?: PublicReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicReviewCountAggregateInputType | true
    _avg?: PublicReviewAvgAggregateInputType
    _sum?: PublicReviewSumAggregateInputType
    _min?: PublicReviewMinAggregateInputType
    _max?: PublicReviewMaxAggregateInputType
  }

  export type PublicReviewGroupByOutputType = {
    id: string
    userId: string
    rating: number
    title: string | null
    content: string | null
    visible: boolean
    createdAt: Date
    _count: PublicReviewCountAggregateOutputType | null
    _avg: PublicReviewAvgAggregateOutputType | null
    _sum: PublicReviewSumAggregateOutputType | null
    _min: PublicReviewMinAggregateOutputType | null
    _max: PublicReviewMaxAggregateOutputType | null
  }

  type GetPublicReviewGroupByPayload<T extends PublicReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicReviewGroupByOutputType[P]>
            : GetScalarType<T[P], PublicReviewGroupByOutputType[P]>
        }
      >
    >


  export type PublicReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    title?: boolean
    content?: boolean
    visible?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicReview"]>

  export type PublicReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    title?: boolean
    content?: boolean
    visible?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicReview"]>

  export type PublicReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    title?: boolean
    content?: boolean
    visible?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicReview"]>

  export type PublicReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    rating?: boolean
    title?: boolean
    content?: boolean
    visible?: boolean
    createdAt?: boolean
  }

  export type PublicReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rating" | "title" | "content" | "visible" | "createdAt", ExtArgs["result"]["publicReview"]>
  export type PublicReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PublicReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PublicReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PublicReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicReview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rating: number
      title: string | null
      content: string | null
      visible: boolean
      createdAt: Date
    }, ExtArgs["result"]["publicReview"]>
    composites: {}
  }

  type PublicReviewGetPayload<S extends boolean | null | undefined | PublicReviewDefaultArgs> = $Result.GetResult<Prisma.$PublicReviewPayload, S>

  type PublicReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicReviewCountAggregateInputType | true
    }

  export interface PublicReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicReview'], meta: { name: 'PublicReview' } }
    /**
     * Find zero or one PublicReview that matches the filter.
     * @param {PublicReviewFindUniqueArgs} args - Arguments to find a PublicReview
     * @example
     * // Get one PublicReview
     * const publicReview = await prisma.publicReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicReviewFindUniqueArgs>(args: SelectSubset<T, PublicReviewFindUniqueArgs<ExtArgs>>): Prisma__PublicReviewClient<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicReviewFindUniqueOrThrowArgs} args - Arguments to find a PublicReview
     * @example
     * // Get one PublicReview
     * const publicReview = await prisma.publicReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicReviewClient<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicReviewFindFirstArgs} args - Arguments to find a PublicReview
     * @example
     * // Get one PublicReview
     * const publicReview = await prisma.publicReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicReviewFindFirstArgs>(args?: SelectSubset<T, PublicReviewFindFirstArgs<ExtArgs>>): Prisma__PublicReviewClient<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicReviewFindFirstOrThrowArgs} args - Arguments to find a PublicReview
     * @example
     * // Get one PublicReview
     * const publicReview = await prisma.publicReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicReviewClient<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicReviews
     * const publicReviews = await prisma.publicReview.findMany()
     * 
     * // Get first 10 PublicReviews
     * const publicReviews = await prisma.publicReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicReviewWithIdOnly = await prisma.publicReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicReviewFindManyArgs>(args?: SelectSubset<T, PublicReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicReview.
     * @param {PublicReviewCreateArgs} args - Arguments to create a PublicReview.
     * @example
     * // Create one PublicReview
     * const PublicReview = await prisma.publicReview.create({
     *   data: {
     *     // ... data to create a PublicReview
     *   }
     * })
     * 
     */
    create<T extends PublicReviewCreateArgs>(args: SelectSubset<T, PublicReviewCreateArgs<ExtArgs>>): Prisma__PublicReviewClient<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicReviews.
     * @param {PublicReviewCreateManyArgs} args - Arguments to create many PublicReviews.
     * @example
     * // Create many PublicReviews
     * const publicReview = await prisma.publicReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicReviewCreateManyArgs>(args?: SelectSubset<T, PublicReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicReviews and returns the data saved in the database.
     * @param {PublicReviewCreateManyAndReturnArgs} args - Arguments to create many PublicReviews.
     * @example
     * // Create many PublicReviews
     * const publicReview = await prisma.publicReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicReviews and only return the `id`
     * const publicReviewWithIdOnly = await prisma.publicReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicReview.
     * @param {PublicReviewDeleteArgs} args - Arguments to delete one PublicReview.
     * @example
     * // Delete one PublicReview
     * const PublicReview = await prisma.publicReview.delete({
     *   where: {
     *     // ... filter to delete one PublicReview
     *   }
     * })
     * 
     */
    delete<T extends PublicReviewDeleteArgs>(args: SelectSubset<T, PublicReviewDeleteArgs<ExtArgs>>): Prisma__PublicReviewClient<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicReview.
     * @param {PublicReviewUpdateArgs} args - Arguments to update one PublicReview.
     * @example
     * // Update one PublicReview
     * const publicReview = await prisma.publicReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicReviewUpdateArgs>(args: SelectSubset<T, PublicReviewUpdateArgs<ExtArgs>>): Prisma__PublicReviewClient<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicReviews.
     * @param {PublicReviewDeleteManyArgs} args - Arguments to filter PublicReviews to delete.
     * @example
     * // Delete a few PublicReviews
     * const { count } = await prisma.publicReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicReviewDeleteManyArgs>(args?: SelectSubset<T, PublicReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicReviews
     * const publicReview = await prisma.publicReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicReviewUpdateManyArgs>(args: SelectSubset<T, PublicReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicReviews and returns the data updated in the database.
     * @param {PublicReviewUpdateManyAndReturnArgs} args - Arguments to update many PublicReviews.
     * @example
     * // Update many PublicReviews
     * const publicReview = await prisma.publicReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicReviews and only return the `id`
     * const publicReviewWithIdOnly = await prisma.publicReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends PublicReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicReview.
     * @param {PublicReviewUpsertArgs} args - Arguments to update or create a PublicReview.
     * @example
     * // Update or create a PublicReview
     * const publicReview = await prisma.publicReview.upsert({
     *   create: {
     *     // ... data to create a PublicReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicReview we want to update
     *   }
     * })
     */
    upsert<T extends PublicReviewUpsertArgs>(args: SelectSubset<T, PublicReviewUpsertArgs<ExtArgs>>): Prisma__PublicReviewClient<$Result.GetResult<Prisma.$PublicReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicReviewCountArgs} args - Arguments to filter PublicReviews to count.
     * @example
     * // Count the number of PublicReviews
     * const count = await prisma.publicReview.count({
     *   where: {
     *     // ... the filter for the PublicReviews we want to count
     *   }
     * })
    **/
    count<T extends PublicReviewCountArgs>(
      args?: Subset<T, PublicReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicReviewAggregateArgs>(args: Subset<T, PublicReviewAggregateArgs>): Prisma.PrismaPromise<GetPublicReviewAggregateType<T>>

    /**
     * Group by PublicReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicReviewGroupByArgs} args - Group by arguments.
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
      T extends PublicReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicReviewGroupByArgs['orderBy'] }
        : { orderBy?: PublicReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicReview model
   */
  readonly fields: PublicReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PublicReview model
   */
  interface PublicReviewFieldRefs {
    readonly id: FieldRef<"PublicReview", 'String'>
    readonly userId: FieldRef<"PublicReview", 'String'>
    readonly rating: FieldRef<"PublicReview", 'Int'>
    readonly title: FieldRef<"PublicReview", 'String'>
    readonly content: FieldRef<"PublicReview", 'String'>
    readonly visible: FieldRef<"PublicReview", 'Boolean'>
    readonly createdAt: FieldRef<"PublicReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicReview findUnique
   */
  export type PublicReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    /**
     * Filter, which PublicReview to fetch.
     */
    where: PublicReviewWhereUniqueInput
  }

  /**
   * PublicReview findUniqueOrThrow
   */
  export type PublicReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    /**
     * Filter, which PublicReview to fetch.
     */
    where: PublicReviewWhereUniqueInput
  }

  /**
   * PublicReview findFirst
   */
  export type PublicReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    /**
     * Filter, which PublicReview to fetch.
     */
    where?: PublicReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicReviews to fetch.
     */
    orderBy?: PublicReviewOrderByWithRelationInput | PublicReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicReviews.
     */
    cursor?: PublicReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicReviews.
     */
    distinct?: PublicReviewScalarFieldEnum | PublicReviewScalarFieldEnum[]
  }

  /**
   * PublicReview findFirstOrThrow
   */
  export type PublicReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    /**
     * Filter, which PublicReview to fetch.
     */
    where?: PublicReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicReviews to fetch.
     */
    orderBy?: PublicReviewOrderByWithRelationInput | PublicReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicReviews.
     */
    cursor?: PublicReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicReviews.
     */
    distinct?: PublicReviewScalarFieldEnum | PublicReviewScalarFieldEnum[]
  }

  /**
   * PublicReview findMany
   */
  export type PublicReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    /**
     * Filter, which PublicReviews to fetch.
     */
    where?: PublicReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicReviews to fetch.
     */
    orderBy?: PublicReviewOrderByWithRelationInput | PublicReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicReviews.
     */
    cursor?: PublicReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicReviews.
     */
    skip?: number
    distinct?: PublicReviewScalarFieldEnum | PublicReviewScalarFieldEnum[]
  }

  /**
   * PublicReview create
   */
  export type PublicReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicReview.
     */
    data: XOR<PublicReviewCreateInput, PublicReviewUncheckedCreateInput>
  }

  /**
   * PublicReview createMany
   */
  export type PublicReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicReviews.
     */
    data: PublicReviewCreateManyInput | PublicReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicReview createManyAndReturn
   */
  export type PublicReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * The data used to create many PublicReviews.
     */
    data: PublicReviewCreateManyInput | PublicReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicReview update
   */
  export type PublicReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicReview.
     */
    data: XOR<PublicReviewUpdateInput, PublicReviewUncheckedUpdateInput>
    /**
     * Choose, which PublicReview to update.
     */
    where: PublicReviewWhereUniqueInput
  }

  /**
   * PublicReview updateMany
   */
  export type PublicReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicReviews.
     */
    data: XOR<PublicReviewUpdateManyMutationInput, PublicReviewUncheckedUpdateManyInput>
    /**
     * Filter which PublicReviews to update
     */
    where?: PublicReviewWhereInput
    /**
     * Limit how many PublicReviews to update.
     */
    limit?: number
  }

  /**
   * PublicReview updateManyAndReturn
   */
  export type PublicReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * The data used to update PublicReviews.
     */
    data: XOR<PublicReviewUpdateManyMutationInput, PublicReviewUncheckedUpdateManyInput>
    /**
     * Filter which PublicReviews to update
     */
    where?: PublicReviewWhereInput
    /**
     * Limit how many PublicReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicReview upsert
   */
  export type PublicReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicReview to update in case it exists.
     */
    where: PublicReviewWhereUniqueInput
    /**
     * In case the PublicReview found by the `where` argument doesn't exist, create a new PublicReview with this data.
     */
    create: XOR<PublicReviewCreateInput, PublicReviewUncheckedCreateInput>
    /**
     * In case the PublicReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicReviewUpdateInput, PublicReviewUncheckedUpdateInput>
  }

  /**
   * PublicReview delete
   */
  export type PublicReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
    /**
     * Filter which PublicReview to delete.
     */
    where: PublicReviewWhereUniqueInput
  }

  /**
   * PublicReview deleteMany
   */
  export type PublicReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicReviews to delete
     */
    where?: PublicReviewWhereInput
    /**
     * Limit how many PublicReviews to delete.
     */
    limit?: number
  }

  /**
   * PublicReview without action
   */
  export type PublicReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicReview
     */
    select?: PublicReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicReview
     */
    omit?: PublicReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicReviewInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    image: 'image',
    password: 'password',
    provider: 'provider',
    githubId: 'githubId',
    githubAccessToken: 'githubAccessToken',
    githubUsername: 'githubUsername',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    contractType: 'contractType',
    chain: 'chain',
    code: 'code',
    codeHash: 'codeHash',
    s3_url: 's3_url',
    githubRepoName: 'githubRepoName',
    lastBuildStatus: 'lastBuildStatus',
    lastBuildId: 'lastBuildId',
    idl: 'idl',
    clientSdk: 'clientSdk',
    summarisedObject: 'summarisedObject',
    generationStatus: 'generationStatus',
    deployed: 'deployed',
    programId: 'programId',
    version: 'version',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const FileUploadScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    size: 'size',
    s3Url: 's3Url',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type FileUploadScalarFieldEnum = (typeof FileUploadScalarFieldEnum)[keyof typeof FileUploadScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    chain: 'chain',
    tags: 'tags',
    s3_prefix: 's3_prefix',
    solanaVersion: 'solanaVersion',
    anchorVersion: 'anchorVersion',
    baseNetwork: 'baseNetwork',
    frontendStack: 'frontendStack',
    runtimeStack: 'runtimeStack',
    summarisedObject: 'summarisedObject',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const BuildJobScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    chain: 'chain',
    jobId: 'jobId',
    status: 'status',
    podName: 'podName',
    command: 'command',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    duration: 'duration',
    output: 'output',
    error: 'error',
    retryCount: 'retryCount',
    maxRetry: 'maxRetry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BuildJobScalarFieldEnum = (typeof BuildJobScalarFieldEnum)[keyof typeof BuildJobScalarFieldEnum]


  export const DeploymentScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    chain: 'chain',
    network: 'network',
    deployedAt: 'deployedAt',
    txSignature: 'txSignature',
    status: 'status',
    metadata: 'metadata'
  };

  export type DeploymentScalarFieldEnum = (typeof DeploymentScalarFieldEnum)[keyof typeof DeploymentScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    role: 'role',
    content: 'content',
    stage: 'stage',
    plannerContext: 'plannerContext',
    isPlanExecuted: 'isPlanExecuted',
    templateId: 'templateId',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plan: 'plan',
    status: 'status',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpaySignature: 'razorpaySignature',
    start: 'start',
    end: 'end',
    autoRenew: 'autoRenew',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const ContractGenerationReviewsScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    userId: 'userId',
    rating: 'rating',
    liked: 'liked',
    disliked: 'disliked',
    createdAt: 'createdAt'
  };

  export type ContractGenerationReviewsScalarFieldEnum = (typeof ContractGenerationReviewsScalarFieldEnum)[keyof typeof ContractGenerationReviewsScalarFieldEnum]


  export const PublicReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rating: 'rating',
    title: 'title',
    content: 'content',
    visible: 'visible',
    createdAt: 'createdAt'
  };

  export type PublicReviewScalarFieldEnum = (typeof PublicReviewScalarFieldEnum)[keyof typeof PublicReviewScalarFieldEnum]


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
   * Reference to a field of type 'ContractType'
   */
  export type EnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType'>
    


  /**
   * Reference to a field of type 'ContractType[]'
   */
  export type ListEnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType[]'>
    


  /**
   * Reference to a field of type 'Chain'
   */
  export type EnumChainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Chain'>
    


  /**
   * Reference to a field of type 'Chain[]'
   */
  export type ListEnumChainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Chain[]'>
    


  /**
   * Reference to a field of type 'BuildStatus'
   */
  export type EnumBuildStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildStatus'>
    


  /**
   * Reference to a field of type 'BuildStatus[]'
   */
  export type ListEnumBuildStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'GenerationStatus'
   */
  export type EnumGenerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenerationStatus'>
    


  /**
   * Reference to a field of type 'GenerationStatus[]'
   */
  export type ListEnumGenerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenerationStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Command'
   */
  export type EnumCommandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Command'>
    


  /**
   * Reference to a field of type 'Command[]'
   */
  export type ListEnumCommandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Command[]'>
    


  /**
   * Reference to a field of type 'ChatRole'
   */
  export type EnumChatRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatRole'>
    


  /**
   * Reference to a field of type 'ChatRole[]'
   */
  export type ListEnumChatRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatRole[]'>
    


  /**
   * Reference to a field of type 'ContractGenerationStage'
   */
  export type EnumContractGenerationStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractGenerationStage'>
    


  /**
   * Reference to a field of type 'ContractGenerationStage[]'
   */
  export type ListEnumContractGenerationStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractGenerationStage[]'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


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
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    githubId?: StringNullableFilter<"User"> | string | null
    githubAccessToken?: StringNullableFilter<"User"> | string | null
    githubUsername?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    contracts?: ContractListRelationFilter
    contractGenerationReviews?: ContractGenerationReviewsListRelationFilter
    publicReviews?: PublicReviewListRelationFilter
    uploadedFiles?: FileUploadListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    githubAccessToken?: SortOrderInput | SortOrder
    githubUsername?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    contracts?: ContractOrderByRelationAggregateInput
    contractGenerationReviews?: ContractGenerationReviewsOrderByRelationAggregateInput
    publicReviews?: PublicReviewOrderByRelationAggregateInput
    uploadedFiles?: FileUploadOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    githubId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    githubAccessToken?: StringNullableFilter<"User"> | string | null
    githubUsername?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    contracts?: ContractListRelationFilter
    contractGenerationReviews?: ContractGenerationReviewsListRelationFilter
    publicReviews?: PublicReviewListRelationFilter
    uploadedFiles?: FileUploadListRelationFilter
  }, "id" | "email" | "githubId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    githubAccessToken?: SortOrderInput | SortOrder
    githubUsername?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    title?: StringFilter<"Contract"> | string
    description?: StringNullableFilter<"Contract"> | string | null
    contractType?: EnumContractTypeFilter<"Contract"> | $Enums.ContractType
    chain?: EnumChainFilter<"Contract"> | $Enums.Chain
    code?: StringNullableFilter<"Contract"> | string | null
    codeHash?: StringNullableFilter<"Contract"> | string | null
    s3_url?: StringNullableFilter<"Contract"> | string | null
    githubRepoName?: StringNullableFilter<"Contract"> | string | null
    lastBuildStatus?: EnumBuildStatusNullableFilter<"Contract"> | $Enums.BuildStatus | null
    lastBuildId?: StringNullableFilter<"Contract"> | string | null
    idl?: JsonNullableFilter<"Contract">
    clientSdk?: JsonNullableFilter<"Contract">
    summarisedObject?: StringNullableFilter<"Contract"> | string | null
    generationStatus?: EnumGenerationStatusFilter<"Contract"> | $Enums.GenerationStatus
    deployed?: BoolFilter<"Contract"> | boolean
    programId?: StringNullableFilter<"Contract"> | string | null
    version?: IntFilter<"Contract"> | number
    userId?: StringFilter<"Contract"> | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    deployments?: DeploymentListRelationFilter
    buildJob?: BuildJobListRelationFilter
    messages?: MessageListRelationFilter
    contractGenerationReviews?: ContractGenerationReviewsListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    contractType?: SortOrder
    chain?: SortOrder
    code?: SortOrderInput | SortOrder
    codeHash?: SortOrderInput | SortOrder
    s3_url?: SortOrderInput | SortOrder
    githubRepoName?: SortOrderInput | SortOrder
    lastBuildStatus?: SortOrderInput | SortOrder
    lastBuildId?: SortOrderInput | SortOrder
    idl?: SortOrderInput | SortOrder
    clientSdk?: SortOrderInput | SortOrder
    summarisedObject?: SortOrderInput | SortOrder
    generationStatus?: SortOrder
    deployed?: SortOrder
    programId?: SortOrderInput | SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    deployments?: DeploymentOrderByRelationAggregateInput
    buildJob?: BuildJobOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    contractGenerationReviews?: ContractGenerationReviewsOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    title?: StringFilter<"Contract"> | string
    description?: StringNullableFilter<"Contract"> | string | null
    contractType?: EnumContractTypeFilter<"Contract"> | $Enums.ContractType
    chain?: EnumChainFilter<"Contract"> | $Enums.Chain
    code?: StringNullableFilter<"Contract"> | string | null
    codeHash?: StringNullableFilter<"Contract"> | string | null
    s3_url?: StringNullableFilter<"Contract"> | string | null
    githubRepoName?: StringNullableFilter<"Contract"> | string | null
    lastBuildStatus?: EnumBuildStatusNullableFilter<"Contract"> | $Enums.BuildStatus | null
    lastBuildId?: StringNullableFilter<"Contract"> | string | null
    idl?: JsonNullableFilter<"Contract">
    clientSdk?: JsonNullableFilter<"Contract">
    summarisedObject?: StringNullableFilter<"Contract"> | string | null
    generationStatus?: EnumGenerationStatusFilter<"Contract"> | $Enums.GenerationStatus
    deployed?: BoolFilter<"Contract"> | boolean
    programId?: StringNullableFilter<"Contract"> | string | null
    version?: IntFilter<"Contract"> | number
    userId?: StringFilter<"Contract"> | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    deployments?: DeploymentListRelationFilter
    buildJob?: BuildJobListRelationFilter
    messages?: MessageListRelationFilter
    contractGenerationReviews?: ContractGenerationReviewsListRelationFilter
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    contractType?: SortOrder
    chain?: SortOrder
    code?: SortOrderInput | SortOrder
    codeHash?: SortOrderInput | SortOrder
    s3_url?: SortOrderInput | SortOrder
    githubRepoName?: SortOrderInput | SortOrder
    lastBuildStatus?: SortOrderInput | SortOrder
    lastBuildId?: SortOrderInput | SortOrder
    idl?: SortOrderInput | SortOrder
    clientSdk?: SortOrderInput | SortOrder
    summarisedObject?: SortOrderInput | SortOrder
    generationStatus?: SortOrder
    deployed?: SortOrder
    programId?: SortOrderInput | SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    title?: StringWithAggregatesFilter<"Contract"> | string
    description?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    contractType?: EnumContractTypeWithAggregatesFilter<"Contract"> | $Enums.ContractType
    chain?: EnumChainWithAggregatesFilter<"Contract"> | $Enums.Chain
    code?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    codeHash?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    s3_url?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    githubRepoName?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    lastBuildStatus?: EnumBuildStatusNullableWithAggregatesFilter<"Contract"> | $Enums.BuildStatus | null
    lastBuildId?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    idl?: JsonNullableWithAggregatesFilter<"Contract">
    clientSdk?: JsonNullableWithAggregatesFilter<"Contract">
    summarisedObject?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    generationStatus?: EnumGenerationStatusWithAggregatesFilter<"Contract"> | $Enums.GenerationStatus
    deployed?: BoolWithAggregatesFilter<"Contract"> | boolean
    programId?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    version?: IntWithAggregatesFilter<"Contract"> | number
    userId?: StringWithAggregatesFilter<"Contract"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type FileUploadWhereInput = {
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    id?: StringFilter<"FileUpload"> | string
    filename?: StringFilter<"FileUpload"> | string
    size?: IntFilter<"FileUpload"> | number
    s3Url?: StringFilter<"FileUpload"> | string
    userId?: StringFilter<"FileUpload"> | string
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FileUploadOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    s3Url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FileUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    filename?: StringFilter<"FileUpload"> | string
    size?: IntFilter<"FileUpload"> | number
    s3Url?: StringFilter<"FileUpload"> | string
    userId?: StringFilter<"FileUpload"> | string
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FileUploadOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    s3Url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: FileUploadCountOrderByAggregateInput
    _avg?: FileUploadAvgOrderByAggregateInput
    _max?: FileUploadMaxOrderByAggregateInput
    _min?: FileUploadMinOrderByAggregateInput
    _sum?: FileUploadSumOrderByAggregateInput
  }

  export type FileUploadScalarWhereWithAggregatesInput = {
    AND?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    OR?: FileUploadScalarWhereWithAggregatesInput[]
    NOT?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileUpload"> | string
    filename?: StringWithAggregatesFilter<"FileUpload"> | string
    size?: IntWithAggregatesFilter<"FileUpload"> | number
    s3Url?: StringWithAggregatesFilter<"FileUpload"> | string
    userId?: StringWithAggregatesFilter<"FileUpload"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    title?: StringFilter<"Template"> | string
    description?: StringNullableFilter<"Template"> | string | null
    category?: StringFilter<"Template"> | string
    chain?: EnumChainFilter<"Template"> | $Enums.Chain
    tags?: StringNullableListFilter<"Template">
    s3_prefix?: StringNullableFilter<"Template"> | string | null
    solanaVersion?: StringNullableFilter<"Template"> | string | null
    anchorVersion?: StringNullableFilter<"Template"> | string | null
    baseNetwork?: StringNullableFilter<"Template"> | string | null
    frontendStack?: StringNullableFilter<"Template"> | string | null
    runtimeStack?: StringNullableFilter<"Template"> | string | null
    summarisedObject?: StringFilter<"Template"> | string
    imageUrl?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    message?: MessageListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    chain?: SortOrder
    tags?: SortOrder
    s3_prefix?: SortOrderInput | SortOrder
    solanaVersion?: SortOrderInput | SortOrder
    anchorVersion?: SortOrderInput | SortOrder
    baseNetwork?: SortOrderInput | SortOrder
    frontendStack?: SortOrderInput | SortOrder
    runtimeStack?: SortOrderInput | SortOrder
    summarisedObject?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    message?: MessageOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    title?: StringFilter<"Template"> | string
    description?: StringNullableFilter<"Template"> | string | null
    category?: StringFilter<"Template"> | string
    chain?: EnumChainFilter<"Template"> | $Enums.Chain
    tags?: StringNullableListFilter<"Template">
    s3_prefix?: StringNullableFilter<"Template"> | string | null
    solanaVersion?: StringNullableFilter<"Template"> | string | null
    anchorVersion?: StringNullableFilter<"Template"> | string | null
    baseNetwork?: StringNullableFilter<"Template"> | string | null
    frontendStack?: StringNullableFilter<"Template"> | string | null
    runtimeStack?: StringNullableFilter<"Template"> | string | null
    summarisedObject?: StringFilter<"Template"> | string
    imageUrl?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    message?: MessageListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    chain?: SortOrder
    tags?: SortOrder
    s3_prefix?: SortOrderInput | SortOrder
    solanaVersion?: SortOrderInput | SortOrder
    anchorVersion?: SortOrderInput | SortOrder
    baseNetwork?: SortOrderInput | SortOrder
    frontendStack?: SortOrderInput | SortOrder
    runtimeStack?: SortOrderInput | SortOrder
    summarisedObject?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    title?: StringWithAggregatesFilter<"Template"> | string
    description?: StringNullableWithAggregatesFilter<"Template"> | string | null
    category?: StringWithAggregatesFilter<"Template"> | string
    chain?: EnumChainWithAggregatesFilter<"Template"> | $Enums.Chain
    tags?: StringNullableListFilter<"Template">
    s3_prefix?: StringNullableWithAggregatesFilter<"Template"> | string | null
    solanaVersion?: StringNullableWithAggregatesFilter<"Template"> | string | null
    anchorVersion?: StringNullableWithAggregatesFilter<"Template"> | string | null
    baseNetwork?: StringNullableWithAggregatesFilter<"Template"> | string | null
    frontendStack?: StringNullableWithAggregatesFilter<"Template"> | string | null
    runtimeStack?: StringNullableWithAggregatesFilter<"Template"> | string | null
    summarisedObject?: StringWithAggregatesFilter<"Template"> | string
    imageUrl?: StringWithAggregatesFilter<"Template"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type BuildJobWhereInput = {
    AND?: BuildJobWhereInput | BuildJobWhereInput[]
    OR?: BuildJobWhereInput[]
    NOT?: BuildJobWhereInput | BuildJobWhereInput[]
    id?: StringFilter<"BuildJob"> | string
    contractId?: StringFilter<"BuildJob"> | string
    chain?: EnumChainFilter<"BuildJob"> | $Enums.Chain
    jobId?: StringFilter<"BuildJob"> | string
    status?: EnumBuildStatusFilter<"BuildJob"> | $Enums.BuildStatus
    podName?: StringNullableFilter<"BuildJob"> | string | null
    command?: EnumCommandFilter<"BuildJob"> | $Enums.Command
    startedAt?: DateTimeNullableFilter<"BuildJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"BuildJob"> | Date | string | null
    duration?: IntNullableFilter<"BuildJob"> | number | null
    output?: JsonNullableFilter<"BuildJob">
    error?: StringNullableFilter<"BuildJob"> | string | null
    retryCount?: IntFilter<"BuildJob"> | number
    maxRetry?: IntFilter<"BuildJob"> | number
    createdAt?: DateTimeFilter<"BuildJob"> | Date | string
    updatedAt?: DateTimeFilter<"BuildJob"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type BuildJobOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    podName?: SortOrderInput | SortOrder
    command?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    maxRetry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type BuildJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BuildJobWhereInput | BuildJobWhereInput[]
    OR?: BuildJobWhereInput[]
    NOT?: BuildJobWhereInput | BuildJobWhereInput[]
    contractId?: StringFilter<"BuildJob"> | string
    chain?: EnumChainFilter<"BuildJob"> | $Enums.Chain
    jobId?: StringFilter<"BuildJob"> | string
    status?: EnumBuildStatusFilter<"BuildJob"> | $Enums.BuildStatus
    podName?: StringNullableFilter<"BuildJob"> | string | null
    command?: EnumCommandFilter<"BuildJob"> | $Enums.Command
    startedAt?: DateTimeNullableFilter<"BuildJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"BuildJob"> | Date | string | null
    duration?: IntNullableFilter<"BuildJob"> | number | null
    output?: JsonNullableFilter<"BuildJob">
    error?: StringNullableFilter<"BuildJob"> | string | null
    retryCount?: IntFilter<"BuildJob"> | number
    maxRetry?: IntFilter<"BuildJob"> | number
    createdAt?: DateTimeFilter<"BuildJob"> | Date | string
    updatedAt?: DateTimeFilter<"BuildJob"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id">

  export type BuildJobOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    podName?: SortOrderInput | SortOrder
    command?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    maxRetry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BuildJobCountOrderByAggregateInput
    _avg?: BuildJobAvgOrderByAggregateInput
    _max?: BuildJobMaxOrderByAggregateInput
    _min?: BuildJobMinOrderByAggregateInput
    _sum?: BuildJobSumOrderByAggregateInput
  }

  export type BuildJobScalarWhereWithAggregatesInput = {
    AND?: BuildJobScalarWhereWithAggregatesInput | BuildJobScalarWhereWithAggregatesInput[]
    OR?: BuildJobScalarWhereWithAggregatesInput[]
    NOT?: BuildJobScalarWhereWithAggregatesInput | BuildJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BuildJob"> | string
    contractId?: StringWithAggregatesFilter<"BuildJob"> | string
    chain?: EnumChainWithAggregatesFilter<"BuildJob"> | $Enums.Chain
    jobId?: StringWithAggregatesFilter<"BuildJob"> | string
    status?: EnumBuildStatusWithAggregatesFilter<"BuildJob"> | $Enums.BuildStatus
    podName?: StringNullableWithAggregatesFilter<"BuildJob"> | string | null
    command?: EnumCommandWithAggregatesFilter<"BuildJob"> | $Enums.Command
    startedAt?: DateTimeNullableWithAggregatesFilter<"BuildJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"BuildJob"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"BuildJob"> | number | null
    output?: JsonNullableWithAggregatesFilter<"BuildJob">
    error?: StringNullableWithAggregatesFilter<"BuildJob"> | string | null
    retryCount?: IntWithAggregatesFilter<"BuildJob"> | number
    maxRetry?: IntWithAggregatesFilter<"BuildJob"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BuildJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BuildJob"> | Date | string
  }

  export type DeploymentWhereInput = {
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    id?: StringFilter<"Deployment"> | string
    contractId?: StringFilter<"Deployment"> | string
    chain?: EnumChainFilter<"Deployment"> | $Enums.Chain
    network?: StringFilter<"Deployment"> | string
    deployedAt?: DateTimeFilter<"Deployment"> | Date | string
    txSignature?: StringNullableFilter<"Deployment"> | string | null
    status?: StringFilter<"Deployment"> | string
    metadata?: JsonNullableFilter<"Deployment">
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type DeploymentOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    network?: SortOrder
    deployedAt?: SortOrder
    txSignature?: SortOrderInput | SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type DeploymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    contractId?: StringFilter<"Deployment"> | string
    chain?: EnumChainFilter<"Deployment"> | $Enums.Chain
    network?: StringFilter<"Deployment"> | string
    deployedAt?: DateTimeFilter<"Deployment"> | Date | string
    txSignature?: StringNullableFilter<"Deployment"> | string | null
    status?: StringFilter<"Deployment"> | string
    metadata?: JsonNullableFilter<"Deployment">
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id">

  export type DeploymentOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    network?: SortOrder
    deployedAt?: SortOrder
    txSignature?: SortOrderInput | SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: DeploymentCountOrderByAggregateInput
    _max?: DeploymentMaxOrderByAggregateInput
    _min?: DeploymentMinOrderByAggregateInput
  }

  export type DeploymentScalarWhereWithAggregatesInput = {
    AND?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    OR?: DeploymentScalarWhereWithAggregatesInput[]
    NOT?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deployment"> | string
    contractId?: StringWithAggregatesFilter<"Deployment"> | string
    chain?: EnumChainWithAggregatesFilter<"Deployment"> | $Enums.Chain
    network?: StringWithAggregatesFilter<"Deployment"> | string
    deployedAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
    txSignature?: StringNullableWithAggregatesFilter<"Deployment"> | string | null
    status?: StringWithAggregatesFilter<"Deployment"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Deployment">
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    contractId?: StringFilter<"Message"> | string
    role?: EnumChatRoleFilter<"Message"> | $Enums.ChatRole
    content?: StringFilter<"Message"> | string
    stage?: EnumContractGenerationStageNullableFilter<"Message"> | $Enums.ContractGenerationStage | null
    plannerContext?: StringNullableFilter<"Message"> | string | null
    isPlanExecuted?: BoolFilter<"Message"> | boolean
    templateId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    stage?: SortOrderInput | SortOrder
    plannerContext?: SortOrderInput | SortOrder
    isPlanExecuted?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    contractId?: StringFilter<"Message"> | string
    role?: EnumChatRoleFilter<"Message"> | $Enums.ChatRole
    content?: StringFilter<"Message"> | string
    stage?: EnumContractGenerationStageNullableFilter<"Message"> | $Enums.ContractGenerationStage | null
    plannerContext?: StringNullableFilter<"Message"> | string | null
    isPlanExecuted?: BoolFilter<"Message"> | boolean
    templateId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    stage?: SortOrderInput | SortOrder
    plannerContext?: SortOrderInput | SortOrder
    isPlanExecuted?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    contractId?: StringWithAggregatesFilter<"Message"> | string
    role?: EnumChatRoleWithAggregatesFilter<"Message"> | $Enums.ChatRole
    content?: StringWithAggregatesFilter<"Message"> | string
    stage?: EnumContractGenerationStageNullableWithAggregatesFilter<"Message"> | $Enums.ContractGenerationStage | null
    plannerContext?: StringNullableWithAggregatesFilter<"Message"> | string | null
    isPlanExecuted?: BoolWithAggregatesFilter<"Message"> | boolean
    templateId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    plan?: EnumPlanTypeFilter<"Subscription"> | $Enums.PlanType
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    razorpayOrderId?: StringNullableFilter<"Subscription"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Subscription"> | string | null
    razorpaySignature?: StringNullableFilter<"Subscription"> | string | null
    start?: DateTimeFilter<"Subscription"> | Date | string
    end?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    autoRenew?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan?: EnumPlanTypeFilter<"Subscription"> | $Enums.PlanType
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    razorpayOrderId?: StringNullableFilter<"Subscription"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Subscription"> | string | null
    razorpaySignature?: StringNullableFilter<"Subscription"> | string | null
    start?: DateTimeFilter<"Subscription"> | Date | string
    end?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    autoRenew?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: EnumPlanTypeWithAggregatesFilter<"Subscription"> | $Enums.PlanType
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    start?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    autoRenew?: BoolWithAggregatesFilter<"Subscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type ContractGenerationReviewsWhereInput = {
    AND?: ContractGenerationReviewsWhereInput | ContractGenerationReviewsWhereInput[]
    OR?: ContractGenerationReviewsWhereInput[]
    NOT?: ContractGenerationReviewsWhereInput | ContractGenerationReviewsWhereInput[]
    id?: StringFilter<"ContractGenerationReviews"> | string
    contractId?: StringFilter<"ContractGenerationReviews"> | string
    userId?: StringFilter<"ContractGenerationReviews"> | string
    rating?: IntFilter<"ContractGenerationReviews"> | number
    liked?: StringNullableFilter<"ContractGenerationReviews"> | string | null
    disliked?: StringNullableFilter<"ContractGenerationReviews"> | string | null
    createdAt?: DateTimeFilter<"ContractGenerationReviews"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContractGenerationReviewsOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    liked?: SortOrderInput | SortOrder
    disliked?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ContractGenerationReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContractGenerationReviewsWhereInput | ContractGenerationReviewsWhereInput[]
    OR?: ContractGenerationReviewsWhereInput[]
    NOT?: ContractGenerationReviewsWhereInput | ContractGenerationReviewsWhereInput[]
    contractId?: StringFilter<"ContractGenerationReviews"> | string
    userId?: StringFilter<"ContractGenerationReviews"> | string
    rating?: IntFilter<"ContractGenerationReviews"> | number
    liked?: StringNullableFilter<"ContractGenerationReviews"> | string | null
    disliked?: StringNullableFilter<"ContractGenerationReviews"> | string | null
    createdAt?: DateTimeFilter<"ContractGenerationReviews"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ContractGenerationReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    liked?: SortOrderInput | SortOrder
    disliked?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContractGenerationReviewsCountOrderByAggregateInput
    _avg?: ContractGenerationReviewsAvgOrderByAggregateInput
    _max?: ContractGenerationReviewsMaxOrderByAggregateInput
    _min?: ContractGenerationReviewsMinOrderByAggregateInput
    _sum?: ContractGenerationReviewsSumOrderByAggregateInput
  }

  export type ContractGenerationReviewsScalarWhereWithAggregatesInput = {
    AND?: ContractGenerationReviewsScalarWhereWithAggregatesInput | ContractGenerationReviewsScalarWhereWithAggregatesInput[]
    OR?: ContractGenerationReviewsScalarWhereWithAggregatesInput[]
    NOT?: ContractGenerationReviewsScalarWhereWithAggregatesInput | ContractGenerationReviewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContractGenerationReviews"> | string
    contractId?: StringWithAggregatesFilter<"ContractGenerationReviews"> | string
    userId?: StringWithAggregatesFilter<"ContractGenerationReviews"> | string
    rating?: IntWithAggregatesFilter<"ContractGenerationReviews"> | number
    liked?: StringNullableWithAggregatesFilter<"ContractGenerationReviews"> | string | null
    disliked?: StringNullableWithAggregatesFilter<"ContractGenerationReviews"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContractGenerationReviews"> | Date | string
  }

  export type PublicReviewWhereInput = {
    AND?: PublicReviewWhereInput | PublicReviewWhereInput[]
    OR?: PublicReviewWhereInput[]
    NOT?: PublicReviewWhereInput | PublicReviewWhereInput[]
    id?: StringFilter<"PublicReview"> | string
    userId?: StringFilter<"PublicReview"> | string
    rating?: IntFilter<"PublicReview"> | number
    title?: StringNullableFilter<"PublicReview"> | string | null
    content?: StringNullableFilter<"PublicReview"> | string | null
    visible?: BoolFilter<"PublicReview"> | boolean
    createdAt?: DateTimeFilter<"PublicReview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PublicReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PublicReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicReviewWhereInput | PublicReviewWhereInput[]
    OR?: PublicReviewWhereInput[]
    NOT?: PublicReviewWhereInput | PublicReviewWhereInput[]
    userId?: StringFilter<"PublicReview"> | string
    rating?: IntFilter<"PublicReview"> | number
    title?: StringNullableFilter<"PublicReview"> | string | null
    content?: StringNullableFilter<"PublicReview"> | string | null
    visible?: BoolFilter<"PublicReview"> | boolean
    createdAt?: DateTimeFilter<"PublicReview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PublicReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    _count?: PublicReviewCountOrderByAggregateInput
    _avg?: PublicReviewAvgOrderByAggregateInput
    _max?: PublicReviewMaxOrderByAggregateInput
    _min?: PublicReviewMinOrderByAggregateInput
    _sum?: PublicReviewSumOrderByAggregateInput
  }

  export type PublicReviewScalarWhereWithAggregatesInput = {
    AND?: PublicReviewScalarWhereWithAggregatesInput | PublicReviewScalarWhereWithAggregatesInput[]
    OR?: PublicReviewScalarWhereWithAggregatesInput[]
    NOT?: PublicReviewScalarWhereWithAggregatesInput | PublicReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicReview"> | string
    userId?: StringWithAggregatesFilter<"PublicReview"> | string
    rating?: IntWithAggregatesFilter<"PublicReview"> | number
    title?: StringNullableWithAggregatesFilter<"PublicReview"> | string | null
    content?: StringNullableWithAggregatesFilter<"PublicReview"> | string | null
    visible?: BoolWithAggregatesFilter<"PublicReview"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PublicReview"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContractsInput
    deployments?: DeploymentCreateNestedManyWithoutContractInput
    buildJob?: BuildJobCreateNestedManyWithoutContractInput
    messages?: MessageCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutContractInput
    buildJob?: BuildJobUncheckedCreateNestedManyWithoutContractInput
    messages?: MessageUncheckedCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContractsNestedInput
    deployments?: DeploymentUpdateManyWithoutContractNestedInput
    buildJob?: BuildJobUpdateManyWithoutContractNestedInput
    messages?: MessageUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutContractNestedInput
    buildJob?: BuildJobUncheckedUpdateManyWithoutContractNestedInput
    messages?: MessageUncheckedUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateInput = {
    id?: string
    filename: string
    size: number
    s3Url: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUploadedFilesInput
  }

  export type FileUploadUncheckedCreateInput = {
    id?: string
    filename: string
    size: number
    s3Url: string
    userId: string
    createdAt?: Date | string
  }

  export type FileUploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    s3Url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUploadedFilesNestedInput
  }

  export type FileUploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    s3Url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateManyInput = {
    id?: string
    filename: string
    size: number
    s3Url: string
    userId: string
    createdAt?: Date | string
  }

  export type FileUploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    s3Url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    s3Url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    chain?: $Enums.Chain
    tags?: TemplateCreatetagsInput | string[]
    s3_prefix?: string | null
    solanaVersion?: string | null
    anchorVersion?: string | null
    baseNetwork?: string | null
    frontendStack?: string | null
    runtimeStack?: string | null
    summarisedObject: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    message?: MessageCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    chain?: $Enums.Chain
    tags?: TemplateCreatetagsInput | string[]
    s3_prefix?: string | null
    solanaVersion?: string | null
    anchorVersion?: string | null
    baseNetwork?: string | null
    frontendStack?: string | null
    runtimeStack?: string | null
    summarisedObject: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    message?: MessageUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    tags?: TemplateUpdatetagsInput | string[]
    s3_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    solanaVersion?: NullableStringFieldUpdateOperationsInput | string | null
    anchorVersion?: NullableStringFieldUpdateOperationsInput | string | null
    baseNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    frontendStack?: NullableStringFieldUpdateOperationsInput | string | null
    runtimeStack?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedObject?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    tags?: TemplateUpdatetagsInput | string[]
    s3_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    solanaVersion?: NullableStringFieldUpdateOperationsInput | string | null
    anchorVersion?: NullableStringFieldUpdateOperationsInput | string | null
    baseNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    frontendStack?: NullableStringFieldUpdateOperationsInput | string | null
    runtimeStack?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedObject?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    chain?: $Enums.Chain
    tags?: TemplateCreatetagsInput | string[]
    s3_prefix?: string | null
    solanaVersion?: string | null
    anchorVersion?: string | null
    baseNetwork?: string | null
    frontendStack?: string | null
    runtimeStack?: string | null
    summarisedObject: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    tags?: TemplateUpdatetagsInput | string[]
    s3_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    solanaVersion?: NullableStringFieldUpdateOperationsInput | string | null
    anchorVersion?: NullableStringFieldUpdateOperationsInput | string | null
    baseNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    frontendStack?: NullableStringFieldUpdateOperationsInput | string | null
    runtimeStack?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedObject?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    tags?: TemplateUpdatetagsInput | string[]
    s3_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    solanaVersion?: NullableStringFieldUpdateOperationsInput | string | null
    anchorVersion?: NullableStringFieldUpdateOperationsInput | string | null
    baseNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    frontendStack?: NullableStringFieldUpdateOperationsInput | string | null
    runtimeStack?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedObject?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildJobCreateInput = {
    id?: string
    chain?: $Enums.Chain
    jobId: string
    status: $Enums.BuildStatus
    podName?: string | null
    command: $Enums.Command
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    retryCount?: number
    maxRetry?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractCreateNestedOneWithoutBuildJobInput
  }

  export type BuildJobUncheckedCreateInput = {
    id?: string
    contractId: string
    chain?: $Enums.Chain
    jobId: string
    status: $Enums.BuildStatus
    podName?: string | null
    command: $Enums.Command
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    retryCount?: number
    maxRetry?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    podName?: NullableStringFieldUpdateOperationsInput | string | null
    command?: EnumCommandFieldUpdateOperationsInput | $Enums.Command
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutBuildJobNestedInput
  }

  export type BuildJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    podName?: NullableStringFieldUpdateOperationsInput | string | null
    command?: EnumCommandFieldUpdateOperationsInput | $Enums.Command
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildJobCreateManyInput = {
    id?: string
    contractId: string
    chain?: $Enums.Chain
    jobId: string
    status: $Enums.BuildStatus
    podName?: string | null
    command: $Enums.Command
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    retryCount?: number
    maxRetry?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    podName?: NullableStringFieldUpdateOperationsInput | string | null
    command?: EnumCommandFieldUpdateOperationsInput | $Enums.Command
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    podName?: NullableStringFieldUpdateOperationsInput | string | null
    command?: EnumCommandFieldUpdateOperationsInput | $Enums.Command
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateInput = {
    id?: string
    chain?: $Enums.Chain
    network: string
    deployedAt?: Date | string
    txSignature?: string | null
    status: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contract: ContractCreateNestedOneWithoutDeploymentsInput
  }

  export type DeploymentUncheckedCreateInput = {
    id?: string
    contractId: string
    chain?: $Enums.Chain
    network: string
    deployedAt?: Date | string
    txSignature?: string | null
    status: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeploymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    network?: StringFieldUpdateOperationsInput | string
    deployedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contract?: ContractUpdateOneRequiredWithoutDeploymentsNestedInput
  }

  export type DeploymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    network?: StringFieldUpdateOperationsInput | string
    deployedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeploymentCreateManyInput = {
    id?: string
    contractId: string
    chain?: $Enums.Chain
    network: string
    deployedAt?: Date | string
    txSignature?: string | null
    status: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeploymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    network?: StringFieldUpdateOperationsInput | string
    deployedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeploymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    network?: StringFieldUpdateOperationsInput | string
    deployedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageCreateInput = {
    id?: string
    role: $Enums.ChatRole
    content: string
    stage?: $Enums.ContractGenerationStage | null
    plannerContext?: string | null
    isPlanExecuted?: boolean
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutMessagesInput
    template?: TemplateCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    contractId: string
    role: $Enums.ChatRole
    content: string
    stage?: $Enums.ContractGenerationStage | null
    plannerContext?: string | null
    isPlanExecuted?: boolean
    templateId?: string | null
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutMessagesNestedInput
    template?: TemplateUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    contractId: string
    role: $Enums.ChatRole
    content: string
    stage?: $Enums.ContractGenerationStage | null
    plannerContext?: string | null
    isPlanExecuted?: boolean
    templateId?: string | null
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan?: $Enums.PlanType
    status?: $Enums.SubscriptionStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    start?: Date | string
    end?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    plan?: $Enums.PlanType
    status?: $Enums.SubscriptionStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    start?: Date | string
    end?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    plan?: $Enums.PlanType
    status?: $Enums.SubscriptionStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    start?: Date | string
    end?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractGenerationReviewsCreateInput = {
    id?: string
    rating: number
    liked?: string | null
    disliked?: string | null
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutContractGenerationReviewsInput
    user: UserCreateNestedOneWithoutContractGenerationReviewsInput
  }

  export type ContractGenerationReviewsUncheckedCreateInput = {
    id?: string
    contractId: string
    userId: string
    rating: number
    liked?: string | null
    disliked?: string | null
    createdAt?: Date | string
  }

  export type ContractGenerationReviewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutContractGenerationReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutContractGenerationReviewsNestedInput
  }

  export type ContractGenerationReviewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractGenerationReviewsCreateManyInput = {
    id?: string
    contractId: string
    userId: string
    rating: number
    liked?: string | null
    disliked?: string | null
    createdAt?: Date | string
  }

  export type ContractGenerationReviewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractGenerationReviewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicReviewCreateInput = {
    id?: string
    rating: number
    title?: string | null
    content?: string | null
    visible?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPublicReviewsInput
  }

  export type PublicReviewUncheckedCreateInput = {
    id?: string
    userId: string
    rating: number
    title?: string | null
    content?: string | null
    visible?: boolean
    createdAt?: Date | string
  }

  export type PublicReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPublicReviewsNestedInput
  }

  export type PublicReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicReviewCreateManyInput = {
    id?: string
    userId: string
    rating: number
    title?: string | null
    content?: string | null
    visible?: boolean
    createdAt?: Date | string
  }

  export type PublicReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
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

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type ContractGenerationReviewsListRelationFilter = {
    every?: ContractGenerationReviewsWhereInput
    some?: ContractGenerationReviewsWhereInput
    none?: ContractGenerationReviewsWhereInput
  }

  export type PublicReviewListRelationFilter = {
    every?: PublicReviewWhereInput
    some?: PublicReviewWhereInput
    none?: PublicReviewWhereInput
  }

  export type FileUploadListRelationFilter = {
    every?: FileUploadWhereInput
    some?: FileUploadWhereInput
    none?: FileUploadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractGenerationReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    githubId?: SortOrder
    githubAccessToken?: SortOrder
    githubUsername?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    githubId?: SortOrder
    githubAccessToken?: SortOrder
    githubUsername?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    githubId?: SortOrder
    githubAccessToken?: SortOrder
    githubUsername?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type EnumChainFilter<$PrismaModel = never> = {
    equals?: $Enums.Chain | EnumChainFieldRefInput<$PrismaModel>
    in?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    not?: NestedEnumChainFilter<$PrismaModel> | $Enums.Chain
  }

  export type EnumBuildStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBuildStatusNullableFilter<$PrismaModel> | $Enums.BuildStatus | null
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

  export type EnumGenerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GenerationStatus | EnumGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenerationStatusFilter<$PrismaModel> | $Enums.GenerationStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeploymentListRelationFilter = {
    every?: DeploymentWhereInput
    some?: DeploymentWhereInput
    none?: DeploymentWhereInput
  }

  export type BuildJobListRelationFilter = {
    every?: BuildJobWhereInput
    some?: BuildJobWhereInput
    none?: BuildJobWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type DeploymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contractType?: SortOrder
    chain?: SortOrder
    code?: SortOrder
    codeHash?: SortOrder
    s3_url?: SortOrder
    githubRepoName?: SortOrder
    lastBuildStatus?: SortOrder
    lastBuildId?: SortOrder
    idl?: SortOrder
    clientSdk?: SortOrder
    summarisedObject?: SortOrder
    generationStatus?: SortOrder
    deployed?: SortOrder
    programId?: SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contractType?: SortOrder
    chain?: SortOrder
    code?: SortOrder
    codeHash?: SortOrder
    s3_url?: SortOrder
    githubRepoName?: SortOrder
    lastBuildStatus?: SortOrder
    lastBuildId?: SortOrder
    summarisedObject?: SortOrder
    generationStatus?: SortOrder
    deployed?: SortOrder
    programId?: SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contractType?: SortOrder
    chain?: SortOrder
    code?: SortOrder
    codeHash?: SortOrder
    s3_url?: SortOrder
    githubRepoName?: SortOrder
    lastBuildStatus?: SortOrder
    lastBuildId?: SortOrder
    summarisedObject?: SortOrder
    generationStatus?: SortOrder
    deployed?: SortOrder
    programId?: SortOrder
    version?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type EnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type EnumChainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Chain | EnumChainFieldRefInput<$PrismaModel>
    in?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    not?: NestedEnumChainWithAggregatesFilter<$PrismaModel> | $Enums.Chain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainFilter<$PrismaModel>
    _max?: NestedEnumChainFilter<$PrismaModel>
  }

  export type EnumBuildStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBuildStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BuildStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBuildStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBuildStatusNullableFilter<$PrismaModel>
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

  export type EnumGenerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenerationStatus | EnumGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.GenerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenerationStatusFilter<$PrismaModel>
    _max?: NestedEnumGenerationStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FileUploadCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    s3Url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FileUploadAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FileUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    s3Url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FileUploadMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    s3Url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FileUploadSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    chain?: SortOrder
    tags?: SortOrder
    s3_prefix?: SortOrder
    solanaVersion?: SortOrder
    anchorVersion?: SortOrder
    baseNetwork?: SortOrder
    frontendStack?: SortOrder
    runtimeStack?: SortOrder
    summarisedObject?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    chain?: SortOrder
    s3_prefix?: SortOrder
    solanaVersion?: SortOrder
    anchorVersion?: SortOrder
    baseNetwork?: SortOrder
    frontendStack?: SortOrder
    runtimeStack?: SortOrder
    summarisedObject?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    chain?: SortOrder
    s3_prefix?: SortOrder
    solanaVersion?: SortOrder
    anchorVersion?: SortOrder
    baseNetwork?: SortOrder
    frontendStack?: SortOrder
    runtimeStack?: SortOrder
    summarisedObject?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBuildStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStatusFilter<$PrismaModel> | $Enums.BuildStatus
  }

  export type EnumCommandFilter<$PrismaModel = never> = {
    equals?: $Enums.Command | EnumCommandFieldRefInput<$PrismaModel>
    in?: $Enums.Command[] | ListEnumCommandFieldRefInput<$PrismaModel>
    notIn?: $Enums.Command[] | ListEnumCommandFieldRefInput<$PrismaModel>
    not?: NestedEnumCommandFilter<$PrismaModel> | $Enums.Command
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type ContractScalarRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type BuildJobCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    podName?: SortOrder
    command?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    duration?: SortOrder
    output?: SortOrder
    error?: SortOrder
    retryCount?: SortOrder
    maxRetry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildJobAvgOrderByAggregateInput = {
    duration?: SortOrder
    retryCount?: SortOrder
    maxRetry?: SortOrder
  }

  export type BuildJobMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    podName?: SortOrder
    command?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    duration?: SortOrder
    error?: SortOrder
    retryCount?: SortOrder
    maxRetry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildJobMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    podName?: SortOrder
    command?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    duration?: SortOrder
    error?: SortOrder
    retryCount?: SortOrder
    maxRetry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildJobSumOrderByAggregateInput = {
    duration?: SortOrder
    retryCount?: SortOrder
    maxRetry?: SortOrder
  }

  export type EnumBuildStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStatusWithAggregatesFilter<$PrismaModel> | $Enums.BuildStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBuildStatusFilter<$PrismaModel>
    _max?: NestedEnumBuildStatusFilter<$PrismaModel>
  }

  export type EnumCommandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Command | EnumCommandFieldRefInput<$PrismaModel>
    in?: $Enums.Command[] | ListEnumCommandFieldRefInput<$PrismaModel>
    notIn?: $Enums.Command[] | ListEnumCommandFieldRefInput<$PrismaModel>
    not?: NestedEnumCommandWithAggregatesFilter<$PrismaModel> | $Enums.Command
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommandFilter<$PrismaModel>
    _max?: NestedEnumCommandFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type DeploymentCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    network?: SortOrder
    deployedAt?: SortOrder
    txSignature?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
  }

  export type DeploymentMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    network?: SortOrder
    deployedAt?: SortOrder
    txSignature?: SortOrder
    status?: SortOrder
  }

  export type DeploymentMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    chain?: SortOrder
    network?: SortOrder
    deployedAt?: SortOrder
    txSignature?: SortOrder
    status?: SortOrder
  }

  export type EnumChatRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleFilter<$PrismaModel> | $Enums.ChatRole
  }

  export type EnumContractGenerationStageNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractGenerationStage | EnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    in?: $Enums.ContractGenerationStage[] | ListEnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ContractGenerationStage[] | ListEnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    not?: NestedEnumContractGenerationStageNullableFilter<$PrismaModel> | $Enums.ContractGenerationStage | null
  }

  export type TemplateNullableScalarRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    plannerContext?: SortOrder
    isPlanExecuted?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    plannerContext?: SortOrder
    isPlanExecuted?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    plannerContext?: SortOrder
    isPlanExecuted?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumChatRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChatRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatRoleFilter<$PrismaModel>
    _max?: NestedEnumChatRoleFilter<$PrismaModel>
  }

  export type EnumContractGenerationStageNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractGenerationStage | EnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    in?: $Enums.ContractGenerationStage[] | ListEnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ContractGenerationStage[] | ListEnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    not?: NestedEnumContractGenerationStageNullableWithAggregatesFilter<$PrismaModel> | $Enums.ContractGenerationStage | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumContractGenerationStageNullableFilter<$PrismaModel>
    _max?: NestedEnumContractGenerationStageNullableFilter<$PrismaModel>
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    start?: SortOrder
    end?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    start?: SortOrder
    end?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    start?: SortOrder
    end?: SortOrder
    autoRenew?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type ContractGenerationReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    liked?: SortOrder
    disliked?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractGenerationReviewsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ContractGenerationReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    liked?: SortOrder
    disliked?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractGenerationReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    liked?: SortOrder
    disliked?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractGenerationReviewsSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type PublicReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    content?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
  }

  export type PublicReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type PublicReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    content?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
  }

  export type PublicReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    content?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
  }

  export type PublicReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractGenerationReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractGenerationReviewsCreateWithoutUserInput, ContractGenerationReviewsUncheckedCreateWithoutUserInput> | ContractGenerationReviewsCreateWithoutUserInput[] | ContractGenerationReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractGenerationReviewsCreateOrConnectWithoutUserInput | ContractGenerationReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ContractGenerationReviewsCreateManyUserInputEnvelope
    connect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
  }

  export type PublicReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<PublicReviewCreateWithoutUserInput, PublicReviewUncheckedCreateWithoutUserInput> | PublicReviewCreateWithoutUserInput[] | PublicReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PublicReviewCreateOrConnectWithoutUserInput | PublicReviewCreateOrConnectWithoutUserInput[]
    createMany?: PublicReviewCreateManyUserInputEnvelope
    connect?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
  }

  export type FileUploadCreateNestedManyWithoutUserInput = {
    create?: XOR<FileUploadCreateWithoutUserInput, FileUploadUncheckedCreateWithoutUserInput> | FileUploadCreateWithoutUserInput[] | FileUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutUserInput | FileUploadCreateOrConnectWithoutUserInput[]
    createMany?: FileUploadCreateManyUserInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type ContractUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractGenerationReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractGenerationReviewsCreateWithoutUserInput, ContractGenerationReviewsUncheckedCreateWithoutUserInput> | ContractGenerationReviewsCreateWithoutUserInput[] | ContractGenerationReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractGenerationReviewsCreateOrConnectWithoutUserInput | ContractGenerationReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ContractGenerationReviewsCreateManyUserInputEnvelope
    connect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
  }

  export type PublicReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PublicReviewCreateWithoutUserInput, PublicReviewUncheckedCreateWithoutUserInput> | PublicReviewCreateWithoutUserInput[] | PublicReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PublicReviewCreateOrConnectWithoutUserInput | PublicReviewCreateOrConnectWithoutUserInput[]
    createMany?: PublicReviewCreateManyUserInputEnvelope
    connect?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FileUploadCreateWithoutUserInput, FileUploadUncheckedCreateWithoutUserInput> | FileUploadCreateWithoutUserInput[] | FileUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutUserInput | FileUploadCreateOrConnectWithoutUserInput[]
    createMany?: FileUploadCreateManyUserInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type ContractUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractGenerationReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractGenerationReviewsCreateWithoutUserInput, ContractGenerationReviewsUncheckedCreateWithoutUserInput> | ContractGenerationReviewsCreateWithoutUserInput[] | ContractGenerationReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractGenerationReviewsCreateOrConnectWithoutUserInput | ContractGenerationReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ContractGenerationReviewsUpsertWithWhereUniqueWithoutUserInput | ContractGenerationReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractGenerationReviewsCreateManyUserInputEnvelope
    set?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    disconnect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    delete?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    connect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    update?: ContractGenerationReviewsUpdateWithWhereUniqueWithoutUserInput | ContractGenerationReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractGenerationReviewsUpdateManyWithWhereWithoutUserInput | ContractGenerationReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractGenerationReviewsScalarWhereInput | ContractGenerationReviewsScalarWhereInput[]
  }

  export type PublicReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<PublicReviewCreateWithoutUserInput, PublicReviewUncheckedCreateWithoutUserInput> | PublicReviewCreateWithoutUserInput[] | PublicReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PublicReviewCreateOrConnectWithoutUserInput | PublicReviewCreateOrConnectWithoutUserInput[]
    upsert?: PublicReviewUpsertWithWhereUniqueWithoutUserInput | PublicReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PublicReviewCreateManyUserInputEnvelope
    set?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
    disconnect?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
    delete?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
    connect?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
    update?: PublicReviewUpdateWithWhereUniqueWithoutUserInput | PublicReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PublicReviewUpdateManyWithWhereWithoutUserInput | PublicReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PublicReviewScalarWhereInput | PublicReviewScalarWhereInput[]
  }

  export type FileUploadUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileUploadCreateWithoutUserInput, FileUploadUncheckedCreateWithoutUserInput> | FileUploadCreateWithoutUserInput[] | FileUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutUserInput | FileUploadCreateOrConnectWithoutUserInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutUserInput | FileUploadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileUploadCreateManyUserInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutUserInput | FileUploadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutUserInput | FileUploadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type ContractUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractGenerationReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractGenerationReviewsCreateWithoutUserInput, ContractGenerationReviewsUncheckedCreateWithoutUserInput> | ContractGenerationReviewsCreateWithoutUserInput[] | ContractGenerationReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractGenerationReviewsCreateOrConnectWithoutUserInput | ContractGenerationReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ContractGenerationReviewsUpsertWithWhereUniqueWithoutUserInput | ContractGenerationReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractGenerationReviewsCreateManyUserInputEnvelope
    set?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    disconnect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    delete?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    connect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    update?: ContractGenerationReviewsUpdateWithWhereUniqueWithoutUserInput | ContractGenerationReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractGenerationReviewsUpdateManyWithWhereWithoutUserInput | ContractGenerationReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractGenerationReviewsScalarWhereInput | ContractGenerationReviewsScalarWhereInput[]
  }

  export type PublicReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PublicReviewCreateWithoutUserInput, PublicReviewUncheckedCreateWithoutUserInput> | PublicReviewCreateWithoutUserInput[] | PublicReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PublicReviewCreateOrConnectWithoutUserInput | PublicReviewCreateOrConnectWithoutUserInput[]
    upsert?: PublicReviewUpsertWithWhereUniqueWithoutUserInput | PublicReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PublicReviewCreateManyUserInputEnvelope
    set?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
    disconnect?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
    delete?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
    connect?: PublicReviewWhereUniqueInput | PublicReviewWhereUniqueInput[]
    update?: PublicReviewUpdateWithWhereUniqueWithoutUserInput | PublicReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PublicReviewUpdateManyWithWhereWithoutUserInput | PublicReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PublicReviewScalarWhereInput | PublicReviewScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileUploadCreateWithoutUserInput, FileUploadUncheckedCreateWithoutUserInput> | FileUploadCreateWithoutUserInput[] | FileUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutUserInput | FileUploadCreateOrConnectWithoutUserInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutUserInput | FileUploadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileUploadCreateManyUserInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutUserInput | FileUploadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutUserInput | FileUploadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContractsInput = {
    create?: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractsInput
    connect?: UserWhereUniqueInput
  }

  export type DeploymentCreateNestedManyWithoutContractInput = {
    create?: XOR<DeploymentCreateWithoutContractInput, DeploymentUncheckedCreateWithoutContractInput> | DeploymentCreateWithoutContractInput[] | DeploymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutContractInput | DeploymentCreateOrConnectWithoutContractInput[]
    createMany?: DeploymentCreateManyContractInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type BuildJobCreateNestedManyWithoutContractInput = {
    create?: XOR<BuildJobCreateWithoutContractInput, BuildJobUncheckedCreateWithoutContractInput> | BuildJobCreateWithoutContractInput[] | BuildJobUncheckedCreateWithoutContractInput[]
    connectOrCreate?: BuildJobCreateOrConnectWithoutContractInput | BuildJobCreateOrConnectWithoutContractInput[]
    createMany?: BuildJobCreateManyContractInputEnvelope
    connect?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutContractInput = {
    create?: XOR<MessageCreateWithoutContractInput, MessageUncheckedCreateWithoutContractInput> | MessageCreateWithoutContractInput[] | MessageUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutContractInput | MessageCreateOrConnectWithoutContractInput[]
    createMany?: MessageCreateManyContractInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ContractGenerationReviewsCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractGenerationReviewsCreateWithoutContractInput, ContractGenerationReviewsUncheckedCreateWithoutContractInput> | ContractGenerationReviewsCreateWithoutContractInput[] | ContractGenerationReviewsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractGenerationReviewsCreateOrConnectWithoutContractInput | ContractGenerationReviewsCreateOrConnectWithoutContractInput[]
    createMany?: ContractGenerationReviewsCreateManyContractInputEnvelope
    connect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<DeploymentCreateWithoutContractInput, DeploymentUncheckedCreateWithoutContractInput> | DeploymentCreateWithoutContractInput[] | DeploymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutContractInput | DeploymentCreateOrConnectWithoutContractInput[]
    createMany?: DeploymentCreateManyContractInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type BuildJobUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<BuildJobCreateWithoutContractInput, BuildJobUncheckedCreateWithoutContractInput> | BuildJobCreateWithoutContractInput[] | BuildJobUncheckedCreateWithoutContractInput[]
    connectOrCreate?: BuildJobCreateOrConnectWithoutContractInput | BuildJobCreateOrConnectWithoutContractInput[]
    createMany?: BuildJobCreateManyContractInputEnvelope
    connect?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<MessageCreateWithoutContractInput, MessageUncheckedCreateWithoutContractInput> | MessageCreateWithoutContractInput[] | MessageUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutContractInput | MessageCreateOrConnectWithoutContractInput[]
    createMany?: MessageCreateManyContractInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ContractGenerationReviewsUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractGenerationReviewsCreateWithoutContractInput, ContractGenerationReviewsUncheckedCreateWithoutContractInput> | ContractGenerationReviewsCreateWithoutContractInput[] | ContractGenerationReviewsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractGenerationReviewsCreateOrConnectWithoutContractInput | ContractGenerationReviewsCreateOrConnectWithoutContractInput[]
    createMany?: ContractGenerationReviewsCreateManyContractInputEnvelope
    connect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
  }

  export type EnumContractTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContractType
  }

  export type EnumChainFieldUpdateOperationsInput = {
    set?: $Enums.Chain
  }

  export type NullableEnumBuildStatusFieldUpdateOperationsInput = {
    set?: $Enums.BuildStatus | null
  }

  export type EnumGenerationStatusFieldUpdateOperationsInput = {
    set?: $Enums.GenerationStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractsInput
    upsert?: UserUpsertWithoutContractsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContractsInput, UserUpdateWithoutContractsInput>, UserUncheckedUpdateWithoutContractsInput>
  }

  export type DeploymentUpdateManyWithoutContractNestedInput = {
    create?: XOR<DeploymentCreateWithoutContractInput, DeploymentUncheckedCreateWithoutContractInput> | DeploymentCreateWithoutContractInput[] | DeploymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutContractInput | DeploymentCreateOrConnectWithoutContractInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutContractInput | DeploymentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: DeploymentCreateManyContractInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutContractInput | DeploymentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutContractInput | DeploymentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type BuildJobUpdateManyWithoutContractNestedInput = {
    create?: XOR<BuildJobCreateWithoutContractInput, BuildJobUncheckedCreateWithoutContractInput> | BuildJobCreateWithoutContractInput[] | BuildJobUncheckedCreateWithoutContractInput[]
    connectOrCreate?: BuildJobCreateOrConnectWithoutContractInput | BuildJobCreateOrConnectWithoutContractInput[]
    upsert?: BuildJobUpsertWithWhereUniqueWithoutContractInput | BuildJobUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: BuildJobCreateManyContractInputEnvelope
    set?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
    disconnect?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
    delete?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
    connect?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
    update?: BuildJobUpdateWithWhereUniqueWithoutContractInput | BuildJobUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: BuildJobUpdateManyWithWhereWithoutContractInput | BuildJobUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: BuildJobScalarWhereInput | BuildJobScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutContractNestedInput = {
    create?: XOR<MessageCreateWithoutContractInput, MessageUncheckedCreateWithoutContractInput> | MessageCreateWithoutContractInput[] | MessageUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutContractInput | MessageCreateOrConnectWithoutContractInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutContractInput | MessageUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: MessageCreateManyContractInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutContractInput | MessageUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutContractInput | MessageUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ContractGenerationReviewsUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractGenerationReviewsCreateWithoutContractInput, ContractGenerationReviewsUncheckedCreateWithoutContractInput> | ContractGenerationReviewsCreateWithoutContractInput[] | ContractGenerationReviewsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractGenerationReviewsCreateOrConnectWithoutContractInput | ContractGenerationReviewsCreateOrConnectWithoutContractInput[]
    upsert?: ContractGenerationReviewsUpsertWithWhereUniqueWithoutContractInput | ContractGenerationReviewsUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractGenerationReviewsCreateManyContractInputEnvelope
    set?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    disconnect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    delete?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    connect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    update?: ContractGenerationReviewsUpdateWithWhereUniqueWithoutContractInput | ContractGenerationReviewsUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractGenerationReviewsUpdateManyWithWhereWithoutContractInput | ContractGenerationReviewsUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractGenerationReviewsScalarWhereInput | ContractGenerationReviewsScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<DeploymentCreateWithoutContractInput, DeploymentUncheckedCreateWithoutContractInput> | DeploymentCreateWithoutContractInput[] | DeploymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutContractInput | DeploymentCreateOrConnectWithoutContractInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutContractInput | DeploymentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: DeploymentCreateManyContractInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutContractInput | DeploymentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutContractInput | DeploymentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type BuildJobUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<BuildJobCreateWithoutContractInput, BuildJobUncheckedCreateWithoutContractInput> | BuildJobCreateWithoutContractInput[] | BuildJobUncheckedCreateWithoutContractInput[]
    connectOrCreate?: BuildJobCreateOrConnectWithoutContractInput | BuildJobCreateOrConnectWithoutContractInput[]
    upsert?: BuildJobUpsertWithWhereUniqueWithoutContractInput | BuildJobUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: BuildJobCreateManyContractInputEnvelope
    set?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
    disconnect?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
    delete?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
    connect?: BuildJobWhereUniqueInput | BuildJobWhereUniqueInput[]
    update?: BuildJobUpdateWithWhereUniqueWithoutContractInput | BuildJobUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: BuildJobUpdateManyWithWhereWithoutContractInput | BuildJobUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: BuildJobScalarWhereInput | BuildJobScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<MessageCreateWithoutContractInput, MessageUncheckedCreateWithoutContractInput> | MessageCreateWithoutContractInput[] | MessageUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutContractInput | MessageCreateOrConnectWithoutContractInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutContractInput | MessageUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: MessageCreateManyContractInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutContractInput | MessageUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutContractInput | MessageUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ContractGenerationReviewsUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractGenerationReviewsCreateWithoutContractInput, ContractGenerationReviewsUncheckedCreateWithoutContractInput> | ContractGenerationReviewsCreateWithoutContractInput[] | ContractGenerationReviewsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractGenerationReviewsCreateOrConnectWithoutContractInput | ContractGenerationReviewsCreateOrConnectWithoutContractInput[]
    upsert?: ContractGenerationReviewsUpsertWithWhereUniqueWithoutContractInput | ContractGenerationReviewsUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractGenerationReviewsCreateManyContractInputEnvelope
    set?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    disconnect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    delete?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    connect?: ContractGenerationReviewsWhereUniqueInput | ContractGenerationReviewsWhereUniqueInput[]
    update?: ContractGenerationReviewsUpdateWithWhereUniqueWithoutContractInput | ContractGenerationReviewsUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractGenerationReviewsUpdateManyWithWhereWithoutContractInput | ContractGenerationReviewsUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractGenerationReviewsScalarWhereInput | ContractGenerationReviewsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUploadedFilesInput = {
    create?: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedFilesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUploadedFilesNestedInput = {
    create?: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedFilesInput
    upsert?: UserUpsertWithoutUploadedFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadedFilesInput, UserUpdateWithoutUploadedFilesInput>, UserUncheckedUpdateWithoutUploadedFilesInput>
  }

  export type TemplateCreatetagsInput = {
    set: string[]
  }

  export type MessageCreateNestedManyWithoutTemplateInput = {
    create?: XOR<MessageCreateWithoutTemplateInput, MessageUncheckedCreateWithoutTemplateInput> | MessageCreateWithoutTemplateInput[] | MessageUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTemplateInput | MessageCreateOrConnectWithoutTemplateInput[]
    createMany?: MessageCreateManyTemplateInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<MessageCreateWithoutTemplateInput, MessageUncheckedCreateWithoutTemplateInput> | MessageCreateWithoutTemplateInput[] | MessageUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTemplateInput | MessageCreateOrConnectWithoutTemplateInput[]
    createMany?: MessageCreateManyTemplateInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TemplateUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MessageUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<MessageCreateWithoutTemplateInput, MessageUncheckedCreateWithoutTemplateInput> | MessageCreateWithoutTemplateInput[] | MessageUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTemplateInput | MessageCreateOrConnectWithoutTemplateInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTemplateInput | MessageUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: MessageCreateManyTemplateInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTemplateInput | MessageUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTemplateInput | MessageUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<MessageCreateWithoutTemplateInput, MessageUncheckedCreateWithoutTemplateInput> | MessageCreateWithoutTemplateInput[] | MessageUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTemplateInput | MessageCreateOrConnectWithoutTemplateInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTemplateInput | MessageUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: MessageCreateManyTemplateInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTemplateInput | MessageUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTemplateInput | MessageUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutBuildJobInput = {
    create?: XOR<ContractCreateWithoutBuildJobInput, ContractUncheckedCreateWithoutBuildJobInput>
    connectOrCreate?: ContractCreateOrConnectWithoutBuildJobInput
    connect?: ContractWhereUniqueInput
  }

  export type EnumBuildStatusFieldUpdateOperationsInput = {
    set?: $Enums.BuildStatus
  }

  export type EnumCommandFieldUpdateOperationsInput = {
    set?: $Enums.Command
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContractUpdateOneRequiredWithoutBuildJobNestedInput = {
    create?: XOR<ContractCreateWithoutBuildJobInput, ContractUncheckedCreateWithoutBuildJobInput>
    connectOrCreate?: ContractCreateOrConnectWithoutBuildJobInput
    upsert?: ContractUpsertWithoutBuildJobInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutBuildJobInput, ContractUpdateWithoutBuildJobInput>, ContractUncheckedUpdateWithoutBuildJobInput>
  }

  export type ContractCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<ContractCreateWithoutDeploymentsInput, ContractUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutDeploymentsInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractUpdateOneRequiredWithoutDeploymentsNestedInput = {
    create?: XOR<ContractCreateWithoutDeploymentsInput, ContractUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutDeploymentsInput
    upsert?: ContractUpsertWithoutDeploymentsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutDeploymentsInput, ContractUpdateWithoutDeploymentsInput>, ContractUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ContractCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ContractCreateWithoutMessagesInput, ContractUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutMessagesInput
    connect?: ContractWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutMessageInput = {
    create?: XOR<TemplateCreateWithoutMessageInput, TemplateUncheckedCreateWithoutMessageInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutMessageInput
    connect?: TemplateWhereUniqueInput
  }

  export type EnumChatRoleFieldUpdateOperationsInput = {
    set?: $Enums.ChatRole
  }

  export type NullableEnumContractGenerationStageFieldUpdateOperationsInput = {
    set?: $Enums.ContractGenerationStage | null
  }

  export type ContractUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ContractCreateWithoutMessagesInput, ContractUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutMessagesInput
    upsert?: ContractUpsertWithoutMessagesInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutMessagesInput, ContractUpdateWithoutMessagesInput>, ContractUncheckedUpdateWithoutMessagesInput>
  }

  export type TemplateUpdateOneWithoutMessageNestedInput = {
    create?: XOR<TemplateCreateWithoutMessageInput, TemplateUncheckedCreateWithoutMessageInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutMessageInput
    upsert?: TemplateUpsertWithoutMessageInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutMessageInput, TemplateUpdateWithoutMessageInput>, TemplateUncheckedUpdateWithoutMessageInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type ContractCreateNestedOneWithoutContractGenerationReviewsInput = {
    create?: XOR<ContractCreateWithoutContractGenerationReviewsInput, ContractUncheckedCreateWithoutContractGenerationReviewsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractGenerationReviewsInput
    connect?: ContractWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContractGenerationReviewsInput = {
    create?: XOR<UserCreateWithoutContractGenerationReviewsInput, UserUncheckedCreateWithoutContractGenerationReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractGenerationReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ContractUpdateOneRequiredWithoutContractGenerationReviewsNestedInput = {
    create?: XOR<ContractCreateWithoutContractGenerationReviewsInput, ContractUncheckedCreateWithoutContractGenerationReviewsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractGenerationReviewsInput
    upsert?: ContractUpsertWithoutContractGenerationReviewsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutContractGenerationReviewsInput, ContractUpdateWithoutContractGenerationReviewsInput>, ContractUncheckedUpdateWithoutContractGenerationReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutContractGenerationReviewsNestedInput = {
    create?: XOR<UserCreateWithoutContractGenerationReviewsInput, UserUncheckedCreateWithoutContractGenerationReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractGenerationReviewsInput
    upsert?: UserUpsertWithoutContractGenerationReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContractGenerationReviewsInput, UserUpdateWithoutContractGenerationReviewsInput>, UserUncheckedUpdateWithoutContractGenerationReviewsInput>
  }

  export type UserCreateNestedOneWithoutPublicReviewsInput = {
    create?: XOR<UserCreateWithoutPublicReviewsInput, UserUncheckedCreateWithoutPublicReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPublicReviewsNestedInput = {
    create?: XOR<UserCreateWithoutPublicReviewsInput, UserUncheckedCreateWithoutPublicReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicReviewsInput
    upsert?: UserUpsertWithoutPublicReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPublicReviewsInput, UserUpdateWithoutPublicReviewsInput>, UserUncheckedUpdateWithoutPublicReviewsInput>
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

  export type NestedEnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type NestedEnumChainFilter<$PrismaModel = never> = {
    equals?: $Enums.Chain | EnumChainFieldRefInput<$PrismaModel>
    in?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    not?: NestedEnumChainFilter<$PrismaModel> | $Enums.Chain
  }

  export type NestedEnumBuildStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBuildStatusNullableFilter<$PrismaModel> | $Enums.BuildStatus | null
  }

  export type NestedEnumGenerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GenerationStatus | EnumGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenerationStatusFilter<$PrismaModel> | $Enums.GenerationStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type NestedEnumChainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Chain | EnumChainFieldRefInput<$PrismaModel>
    in?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Chain[] | ListEnumChainFieldRefInput<$PrismaModel>
    not?: NestedEnumChainWithAggregatesFilter<$PrismaModel> | $Enums.Chain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainFilter<$PrismaModel>
    _max?: NestedEnumChainFilter<$PrismaModel>
  }

  export type NestedEnumBuildStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBuildStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BuildStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBuildStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBuildStatusNullableFilter<$PrismaModel>
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

  export type NestedEnumGenerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenerationStatus | EnumGenerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenerationStatus[] | ListEnumGenerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.GenerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenerationStatusFilter<$PrismaModel>
    _max?: NestedEnumGenerationStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBuildStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStatusFilter<$PrismaModel> | $Enums.BuildStatus
  }

  export type NestedEnumCommandFilter<$PrismaModel = never> = {
    equals?: $Enums.Command | EnumCommandFieldRefInput<$PrismaModel>
    in?: $Enums.Command[] | ListEnumCommandFieldRefInput<$PrismaModel>
    notIn?: $Enums.Command[] | ListEnumCommandFieldRefInput<$PrismaModel>
    not?: NestedEnumCommandFilter<$PrismaModel> | $Enums.Command
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBuildStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStatusWithAggregatesFilter<$PrismaModel> | $Enums.BuildStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBuildStatusFilter<$PrismaModel>
    _max?: NestedEnumBuildStatusFilter<$PrismaModel>
  }

  export type NestedEnumCommandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Command | EnumCommandFieldRefInput<$PrismaModel>
    in?: $Enums.Command[] | ListEnumCommandFieldRefInput<$PrismaModel>
    notIn?: $Enums.Command[] | ListEnumCommandFieldRefInput<$PrismaModel>
    not?: NestedEnumCommandWithAggregatesFilter<$PrismaModel> | $Enums.Command
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommandFilter<$PrismaModel>
    _max?: NestedEnumCommandFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumChatRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleFilter<$PrismaModel> | $Enums.ChatRole
  }

  export type NestedEnumContractGenerationStageNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractGenerationStage | EnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    in?: $Enums.ContractGenerationStage[] | ListEnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ContractGenerationStage[] | ListEnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    not?: NestedEnumContractGenerationStageNullableFilter<$PrismaModel> | $Enums.ContractGenerationStage | null
  }

  export type NestedEnumChatRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChatRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatRoleFilter<$PrismaModel>
    _max?: NestedEnumChatRoleFilter<$PrismaModel>
  }

  export type NestedEnumContractGenerationStageNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractGenerationStage | EnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    in?: $Enums.ContractGenerationStage[] | ListEnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ContractGenerationStage[] | ListEnumContractGenerationStageFieldRefInput<$PrismaModel> | null
    not?: NestedEnumContractGenerationStageNullableWithAggregatesFilter<$PrismaModel> | $Enums.ContractGenerationStage | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumContractGenerationStageNullableFilter<$PrismaModel>
    _max?: NestedEnumContractGenerationStageNullableFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    plan?: $Enums.PlanType
    status?: $Enums.SubscriptionStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    start?: Date | string
    end?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    plan?: $Enums.PlanType
    status?: $Enums.SubscriptionStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    start?: Date | string
    end?: Date | string | null
    autoRenew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type ContractCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentCreateNestedManyWithoutContractInput
    buildJob?: BuildJobCreateNestedManyWithoutContractInput
    messages?: MessageCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutContractInput
    buildJob?: BuildJobUncheckedCreateNestedManyWithoutContractInput
    messages?: MessageUncheckedCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutUserInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractCreateManyUserInputEnvelope = {
    data: ContractCreateManyUserInput | ContractCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContractGenerationReviewsCreateWithoutUserInput = {
    id?: string
    rating: number
    liked?: string | null
    disliked?: string | null
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutContractGenerationReviewsInput
  }

  export type ContractGenerationReviewsUncheckedCreateWithoutUserInput = {
    id?: string
    contractId: string
    rating: number
    liked?: string | null
    disliked?: string | null
    createdAt?: Date | string
  }

  export type ContractGenerationReviewsCreateOrConnectWithoutUserInput = {
    where: ContractGenerationReviewsWhereUniqueInput
    create: XOR<ContractGenerationReviewsCreateWithoutUserInput, ContractGenerationReviewsUncheckedCreateWithoutUserInput>
  }

  export type ContractGenerationReviewsCreateManyUserInputEnvelope = {
    data: ContractGenerationReviewsCreateManyUserInput | ContractGenerationReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PublicReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    title?: string | null
    content?: string | null
    visible?: boolean
    createdAt?: Date | string
  }

  export type PublicReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    title?: string | null
    content?: string | null
    visible?: boolean
    createdAt?: Date | string
  }

  export type PublicReviewCreateOrConnectWithoutUserInput = {
    where: PublicReviewWhereUniqueInput
    create: XOR<PublicReviewCreateWithoutUserInput, PublicReviewUncheckedCreateWithoutUserInput>
  }

  export type PublicReviewCreateManyUserInputEnvelope = {
    data: PublicReviewCreateManyUserInput | PublicReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FileUploadCreateWithoutUserInput = {
    id?: string
    filename: string
    size: number
    s3Url: string
    createdAt?: Date | string
  }

  export type FileUploadUncheckedCreateWithoutUserInput = {
    id?: string
    filename: string
    size: number
    s3Url: string
    createdAt?: Date | string
  }

  export type FileUploadCreateOrConnectWithoutUserInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutUserInput, FileUploadUncheckedCreateWithoutUserInput>
  }

  export type FileUploadCreateManyUserInputEnvelope = {
    data: FileUploadCreateManyUserInput | FileUploadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpsertWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
  }

  export type ContractUpdateManyWithWhereWithoutUserInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutUserInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: StringFilter<"Contract"> | string
    title?: StringFilter<"Contract"> | string
    description?: StringNullableFilter<"Contract"> | string | null
    contractType?: EnumContractTypeFilter<"Contract"> | $Enums.ContractType
    chain?: EnumChainFilter<"Contract"> | $Enums.Chain
    code?: StringNullableFilter<"Contract"> | string | null
    codeHash?: StringNullableFilter<"Contract"> | string | null
    s3_url?: StringNullableFilter<"Contract"> | string | null
    githubRepoName?: StringNullableFilter<"Contract"> | string | null
    lastBuildStatus?: EnumBuildStatusNullableFilter<"Contract"> | $Enums.BuildStatus | null
    lastBuildId?: StringNullableFilter<"Contract"> | string | null
    idl?: JsonNullableFilter<"Contract">
    clientSdk?: JsonNullableFilter<"Contract">
    summarisedObject?: StringNullableFilter<"Contract"> | string | null
    generationStatus?: EnumGenerationStatusFilter<"Contract"> | $Enums.GenerationStatus
    deployed?: BoolFilter<"Contract"> | boolean
    programId?: StringNullableFilter<"Contract"> | string | null
    version?: IntFilter<"Contract"> | number
    userId?: StringFilter<"Contract"> | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type ContractGenerationReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ContractGenerationReviewsWhereUniqueInput
    update: XOR<ContractGenerationReviewsUpdateWithoutUserInput, ContractGenerationReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ContractGenerationReviewsCreateWithoutUserInput, ContractGenerationReviewsUncheckedCreateWithoutUserInput>
  }

  export type ContractGenerationReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ContractGenerationReviewsWhereUniqueInput
    data: XOR<ContractGenerationReviewsUpdateWithoutUserInput, ContractGenerationReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ContractGenerationReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ContractGenerationReviewsScalarWhereInput
    data: XOR<ContractGenerationReviewsUpdateManyMutationInput, ContractGenerationReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ContractGenerationReviewsScalarWhereInput = {
    AND?: ContractGenerationReviewsScalarWhereInput | ContractGenerationReviewsScalarWhereInput[]
    OR?: ContractGenerationReviewsScalarWhereInput[]
    NOT?: ContractGenerationReviewsScalarWhereInput | ContractGenerationReviewsScalarWhereInput[]
    id?: StringFilter<"ContractGenerationReviews"> | string
    contractId?: StringFilter<"ContractGenerationReviews"> | string
    userId?: StringFilter<"ContractGenerationReviews"> | string
    rating?: IntFilter<"ContractGenerationReviews"> | number
    liked?: StringNullableFilter<"ContractGenerationReviews"> | string | null
    disliked?: StringNullableFilter<"ContractGenerationReviews"> | string | null
    createdAt?: DateTimeFilter<"ContractGenerationReviews"> | Date | string
  }

  export type PublicReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: PublicReviewWhereUniqueInput
    update: XOR<PublicReviewUpdateWithoutUserInput, PublicReviewUncheckedUpdateWithoutUserInput>
    create: XOR<PublicReviewCreateWithoutUserInput, PublicReviewUncheckedCreateWithoutUserInput>
  }

  export type PublicReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: PublicReviewWhereUniqueInput
    data: XOR<PublicReviewUpdateWithoutUserInput, PublicReviewUncheckedUpdateWithoutUserInput>
  }

  export type PublicReviewUpdateManyWithWhereWithoutUserInput = {
    where: PublicReviewScalarWhereInput
    data: XOR<PublicReviewUpdateManyMutationInput, PublicReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type PublicReviewScalarWhereInput = {
    AND?: PublicReviewScalarWhereInput | PublicReviewScalarWhereInput[]
    OR?: PublicReviewScalarWhereInput[]
    NOT?: PublicReviewScalarWhereInput | PublicReviewScalarWhereInput[]
    id?: StringFilter<"PublicReview"> | string
    userId?: StringFilter<"PublicReview"> | string
    rating?: IntFilter<"PublicReview"> | number
    title?: StringNullableFilter<"PublicReview"> | string | null
    content?: StringNullableFilter<"PublicReview"> | string | null
    visible?: BoolFilter<"PublicReview"> | boolean
    createdAt?: DateTimeFilter<"PublicReview"> | Date | string
  }

  export type FileUploadUpsertWithWhereUniqueWithoutUserInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutUserInput, FileUploadUncheckedUpdateWithoutUserInput>
    create: XOR<FileUploadCreateWithoutUserInput, FileUploadUncheckedCreateWithoutUserInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutUserInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutUserInput, FileUploadUncheckedUpdateWithoutUserInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutUserInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutUserInput>
  }

  export type FileUploadScalarWhereInput = {
    AND?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    OR?: FileUploadScalarWhereInput[]
    NOT?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    id?: StringFilter<"FileUpload"> | string
    filename?: StringFilter<"FileUpload"> | string
    size?: IntFilter<"FileUpload"> | number
    s3Url?: StringFilter<"FileUpload"> | string
    userId?: StringFilter<"FileUpload"> | string
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
  }

  export type UserCreateWithoutContractsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContractsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContractsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
  }

  export type DeploymentCreateWithoutContractInput = {
    id?: string
    chain?: $Enums.Chain
    network: string
    deployedAt?: Date | string
    txSignature?: string | null
    status: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeploymentUncheckedCreateWithoutContractInput = {
    id?: string
    chain?: $Enums.Chain
    network: string
    deployedAt?: Date | string
    txSignature?: string | null
    status: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeploymentCreateOrConnectWithoutContractInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutContractInput, DeploymentUncheckedCreateWithoutContractInput>
  }

  export type DeploymentCreateManyContractInputEnvelope = {
    data: DeploymentCreateManyContractInput | DeploymentCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type BuildJobCreateWithoutContractInput = {
    id?: string
    chain?: $Enums.Chain
    jobId: string
    status: $Enums.BuildStatus
    podName?: string | null
    command: $Enums.Command
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    retryCount?: number
    maxRetry?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildJobUncheckedCreateWithoutContractInput = {
    id?: string
    chain?: $Enums.Chain
    jobId: string
    status: $Enums.BuildStatus
    podName?: string | null
    command: $Enums.Command
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    retryCount?: number
    maxRetry?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildJobCreateOrConnectWithoutContractInput = {
    where: BuildJobWhereUniqueInput
    create: XOR<BuildJobCreateWithoutContractInput, BuildJobUncheckedCreateWithoutContractInput>
  }

  export type BuildJobCreateManyContractInputEnvelope = {
    data: BuildJobCreateManyContractInput | BuildJobCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutContractInput = {
    id?: string
    role: $Enums.ChatRole
    content: string
    stage?: $Enums.ContractGenerationStage | null
    plannerContext?: string | null
    isPlanExecuted?: boolean
    createdAt?: Date | string
    template?: TemplateCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutContractInput = {
    id?: string
    role: $Enums.ChatRole
    content: string
    stage?: $Enums.ContractGenerationStage | null
    plannerContext?: string | null
    isPlanExecuted?: boolean
    templateId?: string | null
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutContractInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutContractInput, MessageUncheckedCreateWithoutContractInput>
  }

  export type MessageCreateManyContractInputEnvelope = {
    data: MessageCreateManyContractInput | MessageCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ContractGenerationReviewsCreateWithoutContractInput = {
    id?: string
    rating: number
    liked?: string | null
    disliked?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutContractGenerationReviewsInput
  }

  export type ContractGenerationReviewsUncheckedCreateWithoutContractInput = {
    id?: string
    userId: string
    rating: number
    liked?: string | null
    disliked?: string | null
    createdAt?: Date | string
  }

  export type ContractGenerationReviewsCreateOrConnectWithoutContractInput = {
    where: ContractGenerationReviewsWhereUniqueInput
    create: XOR<ContractGenerationReviewsCreateWithoutContractInput, ContractGenerationReviewsUncheckedCreateWithoutContractInput>
  }

  export type ContractGenerationReviewsCreateManyContractInputEnvelope = {
    data: ContractGenerationReviewsCreateManyContractInput | ContractGenerationReviewsCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContractsInput = {
    update: XOR<UserUpdateWithoutContractsInput, UserUncheckedUpdateWithoutContractsInput>
    create: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContractsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContractsInput, UserUncheckedUpdateWithoutContractsInput>
  }

  export type UserUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeploymentUpsertWithWhereUniqueWithoutContractInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutContractInput, DeploymentUncheckedUpdateWithoutContractInput>
    create: XOR<DeploymentCreateWithoutContractInput, DeploymentUncheckedCreateWithoutContractInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutContractInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutContractInput, DeploymentUncheckedUpdateWithoutContractInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutContractInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutContractInput>
  }

  export type DeploymentScalarWhereInput = {
    AND?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    OR?: DeploymentScalarWhereInput[]
    NOT?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    id?: StringFilter<"Deployment"> | string
    contractId?: StringFilter<"Deployment"> | string
    chain?: EnumChainFilter<"Deployment"> | $Enums.Chain
    network?: StringFilter<"Deployment"> | string
    deployedAt?: DateTimeFilter<"Deployment"> | Date | string
    txSignature?: StringNullableFilter<"Deployment"> | string | null
    status?: StringFilter<"Deployment"> | string
    metadata?: JsonNullableFilter<"Deployment">
  }

  export type BuildJobUpsertWithWhereUniqueWithoutContractInput = {
    where: BuildJobWhereUniqueInput
    update: XOR<BuildJobUpdateWithoutContractInput, BuildJobUncheckedUpdateWithoutContractInput>
    create: XOR<BuildJobCreateWithoutContractInput, BuildJobUncheckedCreateWithoutContractInput>
  }

  export type BuildJobUpdateWithWhereUniqueWithoutContractInput = {
    where: BuildJobWhereUniqueInput
    data: XOR<BuildJobUpdateWithoutContractInput, BuildJobUncheckedUpdateWithoutContractInput>
  }

  export type BuildJobUpdateManyWithWhereWithoutContractInput = {
    where: BuildJobScalarWhereInput
    data: XOR<BuildJobUpdateManyMutationInput, BuildJobUncheckedUpdateManyWithoutContractInput>
  }

  export type BuildJobScalarWhereInput = {
    AND?: BuildJobScalarWhereInput | BuildJobScalarWhereInput[]
    OR?: BuildJobScalarWhereInput[]
    NOT?: BuildJobScalarWhereInput | BuildJobScalarWhereInput[]
    id?: StringFilter<"BuildJob"> | string
    contractId?: StringFilter<"BuildJob"> | string
    chain?: EnumChainFilter<"BuildJob"> | $Enums.Chain
    jobId?: StringFilter<"BuildJob"> | string
    status?: EnumBuildStatusFilter<"BuildJob"> | $Enums.BuildStatus
    podName?: StringNullableFilter<"BuildJob"> | string | null
    command?: EnumCommandFilter<"BuildJob"> | $Enums.Command
    startedAt?: DateTimeNullableFilter<"BuildJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"BuildJob"> | Date | string | null
    duration?: IntNullableFilter<"BuildJob"> | number | null
    output?: JsonNullableFilter<"BuildJob">
    error?: StringNullableFilter<"BuildJob"> | string | null
    retryCount?: IntFilter<"BuildJob"> | number
    maxRetry?: IntFilter<"BuildJob"> | number
    createdAt?: DateTimeFilter<"BuildJob"> | Date | string
    updatedAt?: DateTimeFilter<"BuildJob"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutContractInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutContractInput, MessageUncheckedUpdateWithoutContractInput>
    create: XOR<MessageCreateWithoutContractInput, MessageUncheckedCreateWithoutContractInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutContractInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutContractInput, MessageUncheckedUpdateWithoutContractInput>
  }

  export type MessageUpdateManyWithWhereWithoutContractInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutContractInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    contractId?: StringFilter<"Message"> | string
    role?: EnumChatRoleFilter<"Message"> | $Enums.ChatRole
    content?: StringFilter<"Message"> | string
    stage?: EnumContractGenerationStageNullableFilter<"Message"> | $Enums.ContractGenerationStage | null
    plannerContext?: StringNullableFilter<"Message"> | string | null
    isPlanExecuted?: BoolFilter<"Message"> | boolean
    templateId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ContractGenerationReviewsUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractGenerationReviewsWhereUniqueInput
    update: XOR<ContractGenerationReviewsUpdateWithoutContractInput, ContractGenerationReviewsUncheckedUpdateWithoutContractInput>
    create: XOR<ContractGenerationReviewsCreateWithoutContractInput, ContractGenerationReviewsUncheckedCreateWithoutContractInput>
  }

  export type ContractGenerationReviewsUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractGenerationReviewsWhereUniqueInput
    data: XOR<ContractGenerationReviewsUpdateWithoutContractInput, ContractGenerationReviewsUncheckedUpdateWithoutContractInput>
  }

  export type ContractGenerationReviewsUpdateManyWithWhereWithoutContractInput = {
    where: ContractGenerationReviewsScalarWhereInput
    data: XOR<ContractGenerationReviewsUpdateManyMutationInput, ContractGenerationReviewsUncheckedUpdateManyWithoutContractInput>
  }

  export type UserCreateWithoutUploadedFilesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUploadedFilesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUploadedFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
  }

  export type UserUpsertWithoutUploadedFilesInput = {
    update: XOR<UserUpdateWithoutUploadedFilesInput, UserUncheckedUpdateWithoutUploadedFilesInput>
    create: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadedFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadedFilesInput, UserUncheckedUpdateWithoutUploadedFilesInput>
  }

  export type UserUpdateWithoutUploadedFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageCreateWithoutTemplateInput = {
    id?: string
    role: $Enums.ChatRole
    content: string
    stage?: $Enums.ContractGenerationStage | null
    plannerContext?: string | null
    isPlanExecuted?: boolean
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutTemplateInput = {
    id?: string
    contractId: string
    role: $Enums.ChatRole
    content: string
    stage?: $Enums.ContractGenerationStage | null
    plannerContext?: string | null
    isPlanExecuted?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutTemplateInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutTemplateInput, MessageUncheckedCreateWithoutTemplateInput>
  }

  export type MessageCreateManyTemplateInputEnvelope = {
    data: MessageCreateManyTemplateInput | MessageCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutTemplateInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutTemplateInput, MessageUncheckedUpdateWithoutTemplateInput>
    create: XOR<MessageCreateWithoutTemplateInput, MessageUncheckedCreateWithoutTemplateInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutTemplateInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutTemplateInput, MessageUncheckedUpdateWithoutTemplateInput>
  }

  export type MessageUpdateManyWithWhereWithoutTemplateInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutTemplateInput>
  }

  export type ContractCreateWithoutBuildJobInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContractsInput
    deployments?: DeploymentCreateNestedManyWithoutContractInput
    messages?: MessageCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutBuildJobInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutContractInput
    messages?: MessageUncheckedCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutBuildJobInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutBuildJobInput, ContractUncheckedCreateWithoutBuildJobInput>
  }

  export type ContractUpsertWithoutBuildJobInput = {
    update: XOR<ContractUpdateWithoutBuildJobInput, ContractUncheckedUpdateWithoutBuildJobInput>
    create: XOR<ContractCreateWithoutBuildJobInput, ContractUncheckedCreateWithoutBuildJobInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutBuildJobInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutBuildJobInput, ContractUncheckedUpdateWithoutBuildJobInput>
  }

  export type ContractUpdateWithoutBuildJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContractsNestedInput
    deployments?: DeploymentUpdateManyWithoutContractNestedInput
    messages?: MessageUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutBuildJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutContractNestedInput
    messages?: MessageUncheckedUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateWithoutDeploymentsInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContractsInput
    buildJob?: BuildJobCreateNestedManyWithoutContractInput
    messages?: MessageCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutDeploymentsInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buildJob?: BuildJobUncheckedCreateNestedManyWithoutContractInput
    messages?: MessageUncheckedCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutDeploymentsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutDeploymentsInput, ContractUncheckedCreateWithoutDeploymentsInput>
  }

  export type ContractUpsertWithoutDeploymentsInput = {
    update: XOR<ContractUpdateWithoutDeploymentsInput, ContractUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<ContractCreateWithoutDeploymentsInput, ContractUncheckedCreateWithoutDeploymentsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutDeploymentsInput, ContractUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ContractUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContractsNestedInput
    buildJob?: BuildJobUpdateManyWithoutContractNestedInput
    messages?: MessageUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildJob?: BuildJobUncheckedUpdateManyWithoutContractNestedInput
    messages?: MessageUncheckedUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateWithoutMessagesInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContractsInput
    deployments?: DeploymentCreateNestedManyWithoutContractInput
    buildJob?: BuildJobCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutMessagesInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutContractInput
    buildJob?: BuildJobUncheckedCreateNestedManyWithoutContractInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutMessagesInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutMessagesInput, ContractUncheckedCreateWithoutMessagesInput>
  }

  export type TemplateCreateWithoutMessageInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    chain?: $Enums.Chain
    tags?: TemplateCreatetagsInput | string[]
    s3_prefix?: string | null
    solanaVersion?: string | null
    anchorVersion?: string | null
    baseNetwork?: string | null
    frontendStack?: string | null
    runtimeStack?: string | null
    summarisedObject: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUncheckedCreateWithoutMessageInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    chain?: $Enums.Chain
    tags?: TemplateCreatetagsInput | string[]
    s3_prefix?: string | null
    solanaVersion?: string | null
    anchorVersion?: string | null
    baseNetwork?: string | null
    frontendStack?: string | null
    runtimeStack?: string | null
    summarisedObject: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateOrConnectWithoutMessageInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutMessageInput, TemplateUncheckedCreateWithoutMessageInput>
  }

  export type ContractUpsertWithoutMessagesInput = {
    update: XOR<ContractUpdateWithoutMessagesInput, ContractUncheckedUpdateWithoutMessagesInput>
    create: XOR<ContractCreateWithoutMessagesInput, ContractUncheckedCreateWithoutMessagesInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutMessagesInput, ContractUncheckedUpdateWithoutMessagesInput>
  }

  export type ContractUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContractsNestedInput
    deployments?: DeploymentUpdateManyWithoutContractNestedInput
    buildJob?: BuildJobUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutContractNestedInput
    buildJob?: BuildJobUncheckedUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutContractNestedInput
  }

  export type TemplateUpsertWithoutMessageInput = {
    update: XOR<TemplateUpdateWithoutMessageInput, TemplateUncheckedUpdateWithoutMessageInput>
    create: XOR<TemplateCreateWithoutMessageInput, TemplateUncheckedCreateWithoutMessageInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutMessageInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutMessageInput, TemplateUncheckedUpdateWithoutMessageInput>
  }

  export type TemplateUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    tags?: TemplateUpdatetagsInput | string[]
    s3_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    solanaVersion?: NullableStringFieldUpdateOperationsInput | string | null
    anchorVersion?: NullableStringFieldUpdateOperationsInput | string | null
    baseNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    frontendStack?: NullableStringFieldUpdateOperationsInput | string | null
    runtimeStack?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedObject?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    tags?: TemplateUpdatetagsInput | string[]
    s3_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    solanaVersion?: NullableStringFieldUpdateOperationsInput | string | null
    anchorVersion?: NullableStringFieldUpdateOperationsInput | string | null
    baseNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    frontendStack?: NullableStringFieldUpdateOperationsInput | string | null
    runtimeStack?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedObject?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractCreateNestedManyWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUpdateManyWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContractCreateWithoutContractGenerationReviewsInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContractsInput
    deployments?: DeploymentCreateNestedManyWithoutContractInput
    buildJob?: BuildJobCreateNestedManyWithoutContractInput
    messages?: MessageCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutContractGenerationReviewsInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutContractInput
    buildJob?: BuildJobUncheckedCreateNestedManyWithoutContractInput
    messages?: MessageUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutContractGenerationReviewsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutContractGenerationReviewsInput, ContractUncheckedCreateWithoutContractGenerationReviewsInput>
  }

  export type UserCreateWithoutContractGenerationReviewsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContractGenerationReviewsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    publicReviews?: PublicReviewUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContractGenerationReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContractGenerationReviewsInput, UserUncheckedCreateWithoutContractGenerationReviewsInput>
  }

  export type ContractUpsertWithoutContractGenerationReviewsInput = {
    update: XOR<ContractUpdateWithoutContractGenerationReviewsInput, ContractUncheckedUpdateWithoutContractGenerationReviewsInput>
    create: XOR<ContractCreateWithoutContractGenerationReviewsInput, ContractUncheckedCreateWithoutContractGenerationReviewsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutContractGenerationReviewsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutContractGenerationReviewsInput, ContractUncheckedUpdateWithoutContractGenerationReviewsInput>
  }

  export type ContractUpdateWithoutContractGenerationReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContractsNestedInput
    deployments?: DeploymentUpdateManyWithoutContractNestedInput
    buildJob?: BuildJobUpdateManyWithoutContractNestedInput
    messages?: MessageUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutContractGenerationReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutContractNestedInput
    buildJob?: BuildJobUncheckedUpdateManyWithoutContractNestedInput
    messages?: MessageUncheckedUpdateManyWithoutContractNestedInput
  }

  export type UserUpsertWithoutContractGenerationReviewsInput = {
    update: XOR<UserUpdateWithoutContractGenerationReviewsInput, UserUncheckedUpdateWithoutContractGenerationReviewsInput>
    create: XOR<UserCreateWithoutContractGenerationReviewsInput, UserUncheckedCreateWithoutContractGenerationReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContractGenerationReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContractGenerationReviewsInput, UserUncheckedUpdateWithoutContractGenerationReviewsInput>
  }

  export type UserUpdateWithoutContractGenerationReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContractGenerationReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    publicReviews?: PublicReviewUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPublicReviewsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPublicReviewsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    provider?: string | null
    githubId?: string | null
    githubAccessToken?: string | null
    githubUsername?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPublicReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPublicReviewsInput, UserUncheckedCreateWithoutPublicReviewsInput>
  }

  export type UserUpsertWithoutPublicReviewsInput = {
    update: XOR<UserUpdateWithoutPublicReviewsInput, UserUncheckedUpdateWithoutPublicReviewsInput>
    create: XOR<UserCreateWithoutPublicReviewsInput, UserUncheckedCreateWithoutPublicReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPublicReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPublicReviewsInput, UserUncheckedUpdateWithoutPublicReviewsInput>
  }

  export type UserUpdateWithoutPublicReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPublicReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContractCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    contractType: $Enums.ContractType
    chain?: $Enums.Chain
    code?: string | null
    codeHash?: string | null
    s3_url?: string | null
    githubRepoName?: string | null
    lastBuildStatus?: $Enums.BuildStatus | null
    lastBuildId?: string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: string | null
    generationStatus?: $Enums.GenerationStatus
    deployed?: boolean
    programId?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractGenerationReviewsCreateManyUserInput = {
    id?: string
    contractId: string
    rating: number
    liked?: string | null
    disliked?: string | null
    createdAt?: Date | string
  }

  export type PublicReviewCreateManyUserInput = {
    id?: string
    rating: number
    title?: string | null
    content?: string | null
    visible?: boolean
    createdAt?: Date | string
  }

  export type FileUploadCreateManyUserInput = {
    id?: string
    filename: string
    size: number
    s3Url: string
    createdAt?: Date | string
  }

  export type ContractUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUpdateManyWithoutContractNestedInput
    buildJob?: BuildJobUpdateManyWithoutContractNestedInput
    messages?: MessageUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutContractNestedInput
    buildJob?: BuildJobUncheckedUpdateManyWithoutContractNestedInput
    messages?: MessageUncheckedUpdateManyWithoutContractNestedInput
    contractGenerationReviews?: ContractGenerationReviewsUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    code?: NullableStringFieldUpdateOperationsInput | string | null
    codeHash?: NullableStringFieldUpdateOperationsInput | string | null
    s3_url?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoName?: NullableStringFieldUpdateOperationsInput | string | null
    lastBuildStatus?: NullableEnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus | null
    lastBuildId?: NullableStringFieldUpdateOperationsInput | string | null
    idl?: NullableJsonNullValueInput | InputJsonValue
    clientSdk?: NullableJsonNullValueInput | InputJsonValue
    summarisedObject?: NullableStringFieldUpdateOperationsInput | string | null
    generationStatus?: EnumGenerationStatusFieldUpdateOperationsInput | $Enums.GenerationStatus
    deployed?: BoolFieldUpdateOperationsInput | boolean
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractGenerationReviewsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutContractGenerationReviewsNestedInput
  }

  export type ContractGenerationReviewsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractGenerationReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    s3Url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    s3Url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    s3Url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateManyContractInput = {
    id?: string
    chain?: $Enums.Chain
    network: string
    deployedAt?: Date | string
    txSignature?: string | null
    status: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BuildJobCreateManyContractInput = {
    id?: string
    chain?: $Enums.Chain
    jobId: string
    status: $Enums.BuildStatus
    podName?: string | null
    command: $Enums.Command
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    duration?: number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    retryCount?: number
    maxRetry?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyContractInput = {
    id?: string
    role: $Enums.ChatRole
    content: string
    stage?: $Enums.ContractGenerationStage | null
    plannerContext?: string | null
    isPlanExecuted?: boolean
    templateId?: string | null
    createdAt?: Date | string
  }

  export type ContractGenerationReviewsCreateManyContractInput = {
    id?: string
    userId: string
    rating: number
    liked?: string | null
    disliked?: string | null
    createdAt?: Date | string
  }

  export type DeploymentUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    network?: StringFieldUpdateOperationsInput | string
    deployedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeploymentUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    network?: StringFieldUpdateOperationsInput | string
    deployedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeploymentUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    network?: StringFieldUpdateOperationsInput | string
    deployedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txSignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BuildJobUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    podName?: NullableStringFieldUpdateOperationsInput | string | null
    command?: EnumCommandFieldUpdateOperationsInput | $Enums.Command
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildJobUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    podName?: NullableStringFieldUpdateOperationsInput | string | null
    command?: EnumCommandFieldUpdateOperationsInput | $Enums.Command
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildJobUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain?: EnumChainFieldUpdateOperationsInput | $Enums.Chain
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    podName?: NullableStringFieldUpdateOperationsInput | string | null
    command?: EnumCommandFieldUpdateOperationsInput | $Enums.Command
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractGenerationReviewsUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContractGenerationReviewsNestedInput
  }

  export type ContractGenerationReviewsUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractGenerationReviewsUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    liked?: NullableStringFieldUpdateOperationsInput | string | null
    disliked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyTemplateInput = {
    id?: string
    contractId: string
    role: $Enums.ChatRole
    content: string
    stage?: $Enums.ContractGenerationStage | null
    plannerContext?: string | null
    isPlanExecuted?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    stage?: NullableEnumContractGenerationStageFieldUpdateOperationsInput | $Enums.ContractGenerationStage | null
    plannerContext?: NullableStringFieldUpdateOperationsInput | string | null
    isPlanExecuted?: BoolFieldUpdateOperationsInput | boolean
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