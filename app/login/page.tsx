export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white border border-gray-400 w-xl py-4 px-8 rounded-lg">
        <div className="flex justify-center items-center px-6 py-4 border-b border-gray-400">
          <h1 className="text-[#003032] text-2xl font-semibold">
            🩺 NexaHealth
          </h1>
        </div>
        <div className="p-6">
          <div className="mb-4 w-full flex flex-col">
            <label className="text-[#003032] mb-2 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="p-2 bg-slate-100 rounded-lg focus:outline-[#c5d67a] text-sm font-light placeholder-slate-300"
            />
          </div>
          <div className="mb-8 w-full flex flex-col">
            <label className="block text-[#003032] mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="new-password"
              className="p-2 bg-slate-100 rounded-lg focus:outline-[#c5d67a] text-sm font-light placeholder-slate-300"
            />
          </div>
          <div className="w-full flex flex-col">
            <button  className="bg-[#003032] py-2 text-white font-semibold rounded-lg cursor-pointer active:bg-[#c5d67a] active:text-[#003032]">
              <p>LOGIN</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
