import type { Component } from 'svelte';
import type { ClassValue } from 'svelte/elements';

export interface NavRoute {
  path: string;
  name: string;
  active?: string;
  Component: Component<Record<string, unknown> & { class?: ClassValue | undefined | null }>;
}
