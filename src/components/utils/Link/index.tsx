import { FC, PropsWithChildren } from 'react';
import { default as NextLink, LinkProps } from 'next/link';

const useHistory = () => {
  let history: string[] = [];
  const addToHistory = (route: string) => {
    history = [...history, route];
  };
};

export const Link: FC<Pick<
  PropsWithChildren<LinkProps>,
  'href' | 'as' | 'replace' | 'scroll' | 'shallow' | 'passHref' | 'prefetch' | 'children'
>> = ({ children, ...args }) => {
  return (
    <NextLink {...args}>
      <a style={{ width: '100%', textAlign: 'center' }}>{children}</a>
    </NextLink>
  );
};
