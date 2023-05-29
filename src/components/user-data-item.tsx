type UserDataItemProp = {
  value: string | number;
  text: string;
};
export const UserDataItem: React.FC<UserDataItemProp> = ({ value, text }) => {
  return (
    <li className={'text-xl'}>
      {text}: {value}
    </li>
  );
};
