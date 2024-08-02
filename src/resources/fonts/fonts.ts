import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: './Inter/Inter-Regular.woff2',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: './Inter/Inter-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './Inter/Inter-Bold.woff2',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: './Inter/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ]
});

export const abrilFatface = localFont({
  src: [
    {
      path: './AbrilFatface/AbrilFatface-Regular.ttf',
      weight: 'normal',
      style: 'normal'
    }
  ]
});
