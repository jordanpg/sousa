import type { ProviderKey, Stream } from '@/lib/models/streams';
import type { ServiceIdentifier } from 'inversify';

export default interface Provider<
  P extends ProviderKey,
  D extends Record<string, unknown> = Record<string, unknown>,
> {
  providerId: P;
  initialize(): Promise<void>;
  getStreamsAsync(): Promise<Stream<P, D>[]>;
  getStreamAsync(id: string): Promise<Stream<P, D> | undefined>;
}

export const ProviderServiceId: ServiceIdentifier = Symbol.for('Provider');
