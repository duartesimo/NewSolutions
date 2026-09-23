type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700">
      {children}
    </button>
  );
}

export default Button;
