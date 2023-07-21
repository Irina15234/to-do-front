interface PermissionsContainerProps {
  children: JSX.Element | JSX.Element[];
  needPermission: number;
  permissions: number[];
}

export const PermissionsContainer = ({ children, needPermission, permissions }: PermissionsContainerProps) => {
  if (!permissions.includes(needPermission)) return null;

  return <>{children}</>;
};
