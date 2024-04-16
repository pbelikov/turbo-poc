export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  console.log('more code');
  return <code className={className}>{children}</code>;
}
