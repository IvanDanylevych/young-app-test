import React from 'react';

interface LayoutProps {
  children: React.ReactNode,
  classname?: string,
}

const Layout = ({ children, classname }: LayoutProps) => {
  return (
    <div className={classname}>
      {children}
    </div>
  )
}

export default Layout;