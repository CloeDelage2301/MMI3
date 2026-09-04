
function User({src, name, work}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Work : {work}</p>
    </div>
  );
}

function App() {
  
  return (
    <>
    <div>
      <h1> Room </h1>
      <h2> 5 people are around right now</h2>
    </div>
 
      <User name="Dale Houston" work="Software Engineer" />
      <User name="Madge Murphy" work="Product Designer" />
      <User name="Margaret Garner" work="Writer & Journalist" />
      <User name="Gertrude Roberts" work="Fashion Designer" />
      <User name="Joshua Olson" work="Photographer" />
  
  </>
  );
}

export default App
