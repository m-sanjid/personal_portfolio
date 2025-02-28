type Props = {
  placeholder: string;
  label: string;
  type?: "big" | "small";
  error?: string;
};

const InputBox = ({
  placeholder,
  label,
  type = "small",
  error,
  ...rest
}: Props) => {
  return (
    <div>
      <label className="mx-2">{label}</label>
      {type === "small" ? (
        <input
          placeholder={placeholder}
          type="text"
          className="py-2 px-4 border-slate-500 rounded-lg my-2 border w-full dark:bg-white/10 backdrop-blur-sm bg-black/10"
          {...rest}
        />
      ) : (
        <textarea
          className="border-slate-500 border block my-2 w-full py-2 px-4 rounded-md dark:bg-white/10 backdrop-blur-sm bg-black/10"
          rows={4}
          placeholder={placeholder}
          {...rest}
        ></textarea>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputBox;
