import { ContainerModule } from 'inversify';
import { providerStatusRepositoryId } from './interfaces';
import ProviderStatusRepository from './provider-status';

const storageModule = new ContainerModule((options) => {
  options.bind(providerStatusRepositoryId).to(ProviderStatusRepository);
});

export default storageModule;
