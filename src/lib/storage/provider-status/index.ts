import type { ProviderKey } from '@/lib/models/streams';
import { inject, injectable } from 'inversify';
import type { IProviderStatusRepository } from '../interfaces';
import { storageKeyProviderFactoryId, type StorageKeyProviderFactory } from '../key-service';
import StorageProviderBase from '../storage-provider-base';
import type { ProviderStatusStorage } from './models';

@injectable()
export default class ProviderStatusRepository<P extends ProviderKey>
  extends StorageProviderBase<ProviderStatusStorage>
  implements IProviderStatusRepository
{
  constructor(
    provider: P,
    @inject(storageKeyProviderFactoryId)
    public readonly keyProviderFactory: StorageKeyProviderFactory,
  ) {
    super(keyProviderFactory(`provider:${provider}`, 'local'));
  }
}
