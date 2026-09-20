export interface Stream<
  P extends string,
  D extends Record<string, unknown> = Record<string, unknown>,
> {
  providerId: P;
  id: string;
  thumbnail?: string;
  title: string;
  url: string;
  viewers?: number | null;
  channel?: Channel<P> | undefined | null;
  data?: D | undefined | null;
}

export interface Channel<
  P extends string,
  D extends Record<string, unknown> = Record<string, unknown>,
> {
  providerId: P;
  id: string;
  name: string;
  url: string;
  avatar?: string;
  data?: D | undefined | null;
}
