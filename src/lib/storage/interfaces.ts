import type { ServiceIdentifier } from 'inversify';
import type { IStorageProvider } from '../core/interfaces/storage';
import type { ProviderStatusStorage } from './provider-status/models';

export interface IProviderStatusRepository extends IStorageProvider<ProviderStatusStorage> {}
export const providerStatusRepositoryId: ServiceIdentifier<IProviderStatusRepository> = Symbol.for(
  'IProviderStatusRepository',
);
