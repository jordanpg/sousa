import type {
  GetItemOptions,
  Unwatch,
  WatchCallback,
  WxtStorageItemOptions,
} from 'wxt/utils/storage';
import type {
  IStorageKeyProvider,
  IStorageProvider,
  StorageSchema,
} from '../core/interfaces/storage';

export default abstract class StorageProviderBase<
  TSchema extends StorageSchema,
> implements IStorageProvider<TSchema> {
  protected readonly keyProvider: IStorageKeyProvider;

  constructor(keyProvider: IStorageKeyProvider) {
    this.keyProvider = keyProvider;
  }

  getItem<K extends keyof TSchema>(
    key: K,
    opts?: GetItemOptions<TSchema[K]> | undefined,
  ): Promise<TSchema[K] | null> {
    return storage.getItem<TSchema[K]>(this.keyProvider.getKey(String(key)), opts);
  }
  setItem<K extends keyof TSchema>(key: K, value: TSchema[K] | null): Promise<void> {
    return storage.setItem<TSchema[K]>(this.keyProvider.getKey(String(key)), value);
  }
  getMeta<T extends Record<string, unknown>>(key: keyof TSchema): Promise<T | null> {
    return storage.getMeta<T>(this.keyProvider.getKey(String(key)));
  }
  setMeta<T extends Record<string, unknown>>(
    key: keyof TSchema,
    properties: T | null,
  ): Promise<void> {
    return storage.setMeta<T>(this.keyProvider.getKey(String(key)), properties);
  }
  defineItem<K extends keyof TSchema, TMetadata extends Record<string, unknown> = {}>(
    key: K,
    options: WxtStorageItemOptions<TSchema[K]>,
  ): WxtStorageItem<TSchema[K] | null, TMetadata> {
    return storage.defineItem<TSchema[K], TMetadata>(this.keyProvider.getKey(String(key)), options);
  }
  watch<K extends keyof TSchema>(key: K, cb: WatchCallback<TSchema[K] | null>): Unwatch {
    return storage.watch(this.keyProvider.getKey(String(key)), cb);
  }
}
