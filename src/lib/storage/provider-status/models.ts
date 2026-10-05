import type { StorageSchema } from '@/lib/core/interfaces/storage';

/** Current provider state (idle, fetching, error) */
export type ProviderState = 'idle' | 'fetching' | 'error';
/** Describes the current state of a provider */
export interface ProviderStatusStorage extends StorageSchema {
  state: ProviderState;
  errorMessage?: string | undefined;
  lastFetchedAt: Date | null;
}
export const DefaultProviderStatus = {
  state: 'fetching',
  lastFetchedAt: null,
} satisfies ProviderStatusStorage;
