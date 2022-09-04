function Header({title}) {
  return(
    <>
      <h1>{title}</h1>
    </>
  );
}

function Part({name, exercises}) {
  return (
    <p>
      {name} {exercises}
    </p>
  );
}

function Content({parts}) {
  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.name} name={part.name} exercises={part.exercises} />
        )
      })}
    </>
  );
}

function Total({parts}) {
  const total = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises
  }, 0);
  return (
    <p>Number of exercises {total}</p>
  );
}

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10
  const part2 = "Using props to pass data";
  const exercises2 = 7
  const part3 = "State of a component";
  const exercises3 = 14

  const parts = [
    {
      name: part1,
      exercises: exercises1,
    },
    {
      name: part2,
      exercises: exercises2,
    },
    {
      name: part3,
      exercises: exercises3,
    },
  ]

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
