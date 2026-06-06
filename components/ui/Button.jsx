export default function Button({
  children,
  variant = "primary",
}) {

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border hover:bg-gray-100",
  };

  return (
    <button
      className={`
        px-6
        py-3
        rounded-xl
        transition
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}