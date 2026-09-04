import Profile from "./components/Profile";
import data from "./data/data";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-black">Room</h1>
          <p className="text-sm font-medium text-gray-400">5 people are around right now</p>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((user) => (
            <Profile
              key={user.id}
              name={user.name}
              job={user.job}
              image={user.image}
              connected={user.connected}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;