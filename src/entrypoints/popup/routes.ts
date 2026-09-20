import type { NavRoute } from '@/lib/core/types';
import Main from './routes/Main.svelte';
import Options from './routes/Options.svelte';
import { Heart, Wrench } from '@lucide/svelte';

export const navigation = [
  {
    path: '/',
    name: 'Following',
    Component: Heart,
  },
  {
    path: '/options',
    name: 'Options',
    Component: Wrench,
  },
] satisfies NavRoute[];

export default {
  '/': Main,
  '/options': Options,
};
