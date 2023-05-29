type ButtonProps = {
  value: string | number;
  active: boolean;
};
export const Button: React.FC<ButtonProps> = ({ value, active }) => {
  return (
    <>
      <button
        className={
          active
            ? 'px-3 py-1 bg-red-500  rounded-md'
            : 'px-3 py-1 bg-neutral-400 rounded-md hover:bg-red-400'
        }>
        {value}
      </button>
    </>
  );
};
