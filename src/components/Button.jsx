function Button({ name, color, width }) {
  return (
    <>
      <button style={{ color, width: `${width || "300px"}` }}>{name}</button>
    </>
  );
}

export default Button;
