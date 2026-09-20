import type { Stream } from '@/lib/models/streams';
import type { ServiceIdentifier } from 'inversify';

export default interface Provider<
  P extends string,
  D extends Record<string, unknown> = Record<string, unknown>,
  C extends Record<string, unknown> = Record<string, unknown>,
> {
  providerId: P;
  initialize(): Promise<void>;
  getStreamsAsync(): Promise<Stream<P, D>[]>;
  getStreamAsync(id: string): Promise<Stream<P, D> | undefined>;
  getConfigAsync(): Promise<C | undefined>;
  saveConfigAsync(config: C): Promise<void>;
}

export const ProviderServiceId: ServiceIdentifier = Symbol.for('Provider');
