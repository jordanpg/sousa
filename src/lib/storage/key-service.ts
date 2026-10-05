import { injectable, type ServiceIdentifier } from 'inversify';
import type { IStorageKeyProvider } from '../core/interfaces/storage';

export type StorageKeyProviderFactory = (domain: string, area: StorageArea) => IStorageKeyProvider;
export const storageKeyProviderFactoryId: ServiceIdentifier<StorageKeyProviderFactory> = Symbol.for(
  'StorageKeyProviderFactory',
);

@injectable()
export default class StorageKeyProvider implements IStorageKeyProvider {
  readonly domain: string;
  readonly area: StorageArea;

  constructor(domain: string, area: StorageArea) {
    this.domain = domain;
    this.area = area;
  }

  getKey(key: string): StorageItemKey {
    return `${this.area}:${this.domain}:${key}`;
  }
}
