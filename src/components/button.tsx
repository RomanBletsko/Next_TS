type ButtonProps = {
  value?: string | number;
  active?: boolean;
  isDisable?: boolean;
};
export const Button: React.FC<ButtonProps> = ({ value, active, isDisable }) => {
  return (
    <>
      <button
        className={`px-3 py-1 rounded-md ${
          active
            ? 'bg-red-500 '
            : isDisable
            ? 'bg-gray-500 '
            : ' bg-neutral-400 hover:bg-red-400'
        }`}>
        {value}
      </button>
    </>
  );
};
