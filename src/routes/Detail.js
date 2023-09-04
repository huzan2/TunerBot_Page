import { PlusCircleIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import helpCommand from "../helpCommand.png";
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
  {
    name: "/경험치",
    option: "시작레벨, 목표레벨",
    typeOption: "정수",
    description: "시작레벨부터 목표레벨까지 필요 경험치 총량 확인",
    addition: "레벨 범위(0<레벨<301)를 잘 확인해주세요.",
  },
  {
    name: "/극성비",
    option: "레벨",
    typeOption: "정수",
    description: "레벨별 극성비 사용시 경험치 상승량 확인",
    addition: "레벨 범위(250<레벨<300)를 잘 확인해주세요.",
  },
  {
    name: "/추옵",
    option: "무기 레벨제한",
    typeOption: "정수",
    description: "무기 레벨제한별 공격력/마력 추가옵션 정보 확인",
    addition:
      "무기 레벨제한을 정확하게 입력해주세요. 제네시스 무기는 300을 입력하면 됩니다. 150 - 카루타, 160-앱솔랩스, 200-아케인셰이드, 300-제네시스",
  },
  {
    name: "/방무",
    option: "데미지/추가/감소, 방무 수치",
    typeOption: "SubCommand, 유리수",
    description: "방어율 무시 수치 관련 유틸",
    addition:
      "본인의 방무 수치를 입력하면 보스 방어율에 따른 데미지, 추가/삭제시 방무 수치 계산이 가능합니다.",
  },
  {
    name: "/포스",
    option: "아케인/어센틱, 요구수치, 본인 포스량",
    typeOption: "문자열, 정수",
    description: "아케인/어센틱포스 차이에 따른 데미지량 확인",
    addition: "아케인포스와 어센틱포스를 꼭 구분해주세요.",
  },
  {
    name: "/레시피",
    option: "직업군",
    typeOption: "문자열",
    description: "직업군별 레시피 드랍 몬스터 정리",
    addition:
      "직업군 이름을 올바르게 입력해주세요. (공통/전사/궁수/마법사/도적/해적)",
  },
  {
    name: "/재획계산기",
    option: "몬스터 레벨, 마릿수",
    typeOption: "정수",
    description: "1재획(2시간)당 대략적인 메소 수입을 추정합니다.",
    addition:
      "계산 기준: 리부트/아획67%/템메획100%/재획비사용/유부,어빌메획 등 추가 메획 x",
  },
  {
    name: "/환산링크",
    option: "없음",
    typeOption: "-",
    description: "환산계산기 메인링크 + 대피링크 출력",
    addition: "-",
  },
  {
    name: "/추천곡",
    option: "없음",
    typeOption: "-",
    description: "노래 추천",
    addition: "선곡 기준은 100% 개발자 취향 반영",
  },
];

function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetCommand, setTargetCommand] = useState({});
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const cancelButtonRef = useRef(null);
  return (
    <div className="mx-4 lg:mx-80 my-4">
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                        <SquaresPlusIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="span"
                          className="text-base font-semibold pr-5 leading-5 text-gray-900"
                        >
                          {targetCommand.name}
                        </Dialog.Title>
                        <div className="bg-gray-500 px-2 pb-1 inline rounded-full">
                          <span className="font-mono text-xs text-white">
                            option:
                          </span>
                          <span className="text-sm text-white">
                            {targetCommand.option}
                          </span>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {targetCommand.description}
                          </p>
                          <p className="text-sm text-gray-700">
                            {targetCommand.addition}
                          </p>
                        </div>
                        <img
                          src={helpCommand}
                          className="max-h-fit w-auto mx-auto"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <p className="text-center font-sans font-semibold text-lg my-4">
        튜너봇 명령어 모음
      </p>
      <ul className="divide-y">
        {commands.map((command) => (
          <li key={command.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <span className="text-lg font-semibold">{command.name}</span>
                <p className="font-noraml text-base">{command.description}</p>
              </div>
            </div>
            <div>
              <PlusCircleIcon
                className="h-5 mt-5 leading-5 mx-auto w-auto cursor-pointer"
                onClick={() => {
                  handleToggle();
                  setTargetCommand(command);
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Detail;
