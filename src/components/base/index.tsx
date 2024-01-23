type BaseLayoutProps = {
  children?: React.ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return <main className="flex min-h-fit flex-row">{children}</main>;
}
