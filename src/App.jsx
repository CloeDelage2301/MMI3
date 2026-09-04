import Profile from "./components/Profile";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md border-gray-200 bg-white p-6 shadow-lg">
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold text-black">Room</h1>
          <p className="text-sm font-medium text-gray-400">5 people are around right now</p>
        </div>

        <div className="flex flex-col gap-3">
          <Profile
            name="Dale Houston"
            job="Software Engineer"
            image="https://picsum.photos/200/300?1"
          />
          <Profile
            name="Madge Murphy"
            job="Product Designer"
            image="https://picsum.photos/200/300?2"
          />
          <Profile
            name="Margaret Garner"
            job="Writer & Journalist"
            image="https://picsum.photos/200/300?3"
          />
          <Profile
            name="Gertrude Roberts"
            job="Fashion Designer"
            image="https://picsum.photos/200/300?4"
          />
          <Profile
            name="Joshua Olson"
            job="Photographer"
            image="https://picsum.photos/200/300?5"
          />
        </div>
      </div>
    </div>
  );
}

export default App;