/**
 * Core bundle
 */
declare namespace beloop.core.factory {
    interface EntityFactory<T> {
      create(): T;
    }
}
