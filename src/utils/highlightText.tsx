export const highlightText = (text: string) => {
  const keywords = ["nie należę", "należę", "chcę", "nie chcę"];

  const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));

  return (
    <>
      {parts.map((part, i) =>
        keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
          <strong key={i}>{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};
