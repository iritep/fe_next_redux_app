import { ImageLoaderProps } from 'next/image';
import config from '@/config';

export const appImageLoader = ({ src, width, quality }: ImageLoaderProps) =>
  `${config.APP.HOSTING_URL}/${src}?w=${width}&q=${quality || 75}`;

export const s3ImageLoader = ({ src, width, quality }: ImageLoaderProps) =>
  `${src}?w=${width}&q=${quality || 75}`;
