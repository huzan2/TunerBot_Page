import { PaperClipIcon } from "@heroicons/react/24/outline";

const arr = [
  {
    title: "2차 CBT",
    description: "GCP VM에서 24시간 시험가동을 시작합니다.",
    when: "2023-08-28",
  },
  {
    title: "튜너봇 신버전 시작",
    description: "djs-commander 라이브러리를 이용해 봇을 재구성합니다.",
    when: "2023-08-18",
  },
  {
    title: "1차 CBT",
    description: "길드 디스코드에서 1차 시험가동을 진행합니다.",
    when: "2023-08-03",
  },
  {
    title: "튜너봇 기획 및 개발시작",
    description: "봇 구상 및 개발시작",
    when: "2023-07-26",
  },
];

export default function History() {
  return (
    <div className="mx-4 lg:mx-80 my-4">
      <p className="text-center font-sans font-semibold text-lg my-4">
        튜너봇 패치노트
      </p>
      <ul className="divide-y divide-gray-100">
        {arr.map((note) => (
          <li
            key={note.description}
            className="flex justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <PaperClipIcon className="mt-2 h-8 mx-auto w-auto" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {note.title}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {note.description}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {note.when}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
