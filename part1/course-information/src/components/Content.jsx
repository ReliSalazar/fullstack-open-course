function Content({parts}) {
  return (
    <>
      {parts.map((part) => {
        return (
          <p key={part.name}>
            {part.name} {part.exercises}
          </p>
        )
      })}
    </>
  );
}

export default Content;
