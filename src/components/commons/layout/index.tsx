import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
}
