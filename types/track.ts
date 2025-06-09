export interface Track {
  id: number;
  title: string;
  description: string;
  subtitle?: string;
  poster: { url: string };
  audio: { url: string };
}

interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width?: number;
  height?: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiDescription {
  type: string;
  children: Array<{
    type: string;
    text: string;
  }>;
}

interface StrapiTrack {
  id: number;
  documentId: string;
  title: string;
  description: StrapiDescription[];
  subtitle?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  poster: StrapiMedia[];
  audio: StrapiMedia[];
}

export interface StrapiResponse {
  data: StrapiTrack[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
