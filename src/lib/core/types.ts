import type { Component } from 'svelte';
import type { ClassValue } from 'svelte/elements';

export interface NavRoute {
  path: string;
  name: string;
  active?: string;
  Component: Component<
    Record<string, unknown> & { class?: ClassValue | undefined | null }
  >;
}

export interface StreamEntry<P extends string, D extends Record<string, unknown> = Record<string, unknown>> {
  provider: P;
  thumbnail: string;
  title: string;
  url: string;
  viewers: number;
  channel: {
    name: string;
    url: string;
  };
  data: D;
}
