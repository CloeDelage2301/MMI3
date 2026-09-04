import Button from "./Button";

function Profile({ name, job, image, connected }) {
    const statusColor = connected ? "bg-green-500" : "bg-red-500";

    return (
        <section className="flex w-full items-center justify-between gap-4 rounded-xl border-2 border-gray-200 bg-gray-50 p-4">
            <div className="flex min-w-0 items-center gap-4">
                <div className="relative">
                    <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover" />
                    <span className={`absolute right-0 bottom-0 block h-3 w-3 rounded-full  ${statusColor}`} />
                </div>

                <div className="min-w-0">
                    <h2 className="font-bold text-black">{name}</h2>
                    <p className="mt-0.5 text-sm font-medium text-gray-400">{job}</p>
                </div>
            </div>

            <Button className="ml-auto rounded-full px-3 py-2 text-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                </svg>
            </Button>
        </section>
    );
}

export default Profile;