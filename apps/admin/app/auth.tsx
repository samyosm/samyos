export async function Auth() {
  const onClick = () => {
    console.log('hello, world!');
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-indigo-500 p-10 rounded-md shadow-2xl flex flex-col gap-5">
        <h1 className="font-bold text-xl text-indigo-100 text-center">
          Admin Dashboard
        </h1>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="p-3 rounded-md outline-none"
            placeholder="Admin Password"
          />
          <button className="bg-emerald-500 font-semibold text-emerald-900 shadow-sm hover:bg-emerald-600 active:bg-emerald-500 py-2 rounded-md mt-5">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
