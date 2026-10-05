const StorageConstants = {
  Areas: {
    ProviderConfigArea: 'sync',
    ProviderStatusArea: 'local',
    ProviderStreamArea: 'local',
    TokenArea: 'local',
  } satisfies Record<string, StorageArea>,
} as const;

export default StorageConstants;
