import type { ServiceIdentifier } from 'inversify';
import type {
  GetItemOptions,
  StorageArea,
  Unwatch,
  WatchCallback,
  WxtStorageItemOptions,
} from 'wxt/utils/storage';

export interface IStorageKeyProvider {
  readonly domain: string;
  readonly area: StorageArea;
  getKey(key: string): StorageItemKey;
}
export const storageKeyProviderId: ServiceIdentifier<IStorageKeyProvider> =
  Symbol.for('IStorageKeyProvider');

export type StorageSchema = Record<string, unknown>;

export interface IStorageProvider<TSchema extends StorageSchema = StorageSchema> {
  getItem<K extends keyof TSchema>(
    key: K,
    opts?: GetItemOptions<TSchema[K]>,
  ): Promise<TSchema[K] | null>;
  setItem<K extends keyof TSchema>(key: K, value: TSchema[K] | null): Promise<void>;
  getMeta<T extends Record<string, unknown>>(key: keyof TSchema): Promise<T | null>;
  setMeta<T extends Record<string, unknown>>(
    key: keyof TSchema,
    properties: T | null,
  ): Promise<void>;
  defineItem<K extends keyof TSchema, TMetadata extends Record<string, unknown> = {}>(
    key: K,
    options: WxtStorageItemOptions<TSchema[K]>,
  ): WxtStorageItem<TSchema[K] | null, TMetadata>;
  watch<K extends keyof TSchema>(key: K, cb: WatchCallback<null | TSchema[K]>): Unwatch;
}
