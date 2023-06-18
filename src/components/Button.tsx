type Props = {
  text: string;
  size?: "small" | "big";
};

const Button = ({ text, size = "small" }: Props) => {
  return (
    <button
      className={`bg-white rounded-sm text-base text-black hover:opacity-90 transition-opacity shadow-lg shadow-[#5580FF]
          ${size === "big" ? "p-4 text-2xl" : "p-[0.3rem] text-base"}
        `}
    >
      {text}
    </button>
  );
};

export default Button;
