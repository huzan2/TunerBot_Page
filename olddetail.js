import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const commands = [
  {
    name: "/튜너봇설명서",

    option: "없음",
    typeOption: "-",
    description: "튜너봇 명령어 목록을 출력합니다",
    addition: "-",
  },
  {
    name: "/캐릭터",
    option: "닉네임",
    typeOption: "문자열",
    description: "캐릭터 정보 카드를 출력합니다",
    addition: "정보는 Maple.gg에서 검색된 내용을 가져옵니다.",
  },
  {
    name: "/보스",
    option: "보스명",
    typeOption: "문자열",
    description: "보스 정보 카드를 출력합니다",
    addition:
      "보스 이름(난이도) 형식에 주의해주세요. 띄어쓰기는 하지 않습니다. ex) 스우(노말), 검은마법사(하드)",
  },
];

function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-4 lg:mx-80 my-4">
      <p className="text-center font-sans font-semibold text-lg my-4">
        튜너봇 명령어 모음
      </p>
      <ul className="divide-y">
        {commands.map((command) => (
          <li key={command.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <span className="text-lg font-semibold">{command.name}</span>
                <span className="text-base font-semibold pl-12 pr-4">
                  option: {command.option}
                </span>
                <span className="text-sm font-normal">
                  type: {command.typeOption}
                </span>
                <p>{command.description}</p>
              </div>
            </div>
            <div>
              <PlusCircleIcon
                className="h-5 mt-5 leading-5 mx-auto w-auto cursor-pointer"
                onClick={handleToggle}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Detail;
