import { FC, PropsWithChildren } from 'react';
import { default as NextLink, LinkProps } from 'next/link';

export const Link: FC<Pick<
  PropsWithChildren<LinkProps>,
  'href' | 'as' | 'replace' | 'scroll' | 'shallow' | 'passHref' | 'prefetch' | 'children'
>> = ({ children, ...args }) => {
  return (
    <NextLink {...args}>
      <a>{children}</a>
    </NextLink>
  );
};
