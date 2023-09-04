function Home() {
  return (
    <div>
      <div className="relative isolate px-6 lg:px-8 bg-gray-100 rounded-full">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              튜너봇 설명서 읽으러 가기{" "}
              <a href="/detail" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                이동 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              튜너봇 초대하기
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              메이플스토리 관련 다양한 유틸리티 기능 제공
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => {
                  window.open(
                    "https://discord.com/api/oauth2/authorize?client_id=1142082877148893278&permissions=8&scope=bot%20applications.commands",
                    "_blank"
                  );
                }}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                서버에 초대하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
