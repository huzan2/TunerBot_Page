import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { BookOpenIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const menu = [
  {
    name: "홈",
    description: "튜너봇 메인 페이지",
    href: "/TunerBot_Page/",
    icon: HomeIcon,
  },
  {
    name: "설명서",
    description: "튜너봇 사용설명서",
    href: "/TunerBot_Page/detail",
    icon: BookOpenIcon,
  },
  {
    name: "튜너봇 패치노트",
    description: "튜너봇 패치 및 업데이트 내역",
    href: "/TunerBot_Page/history",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "상태",
    description: "튜너봇 온라인 상태 확인",
    href: "/TunerBot_Page/status",
    icon: ChartBarIcon,
  },
];

const submenu = [
  {
    name: "개발자 블로그",
    href: "https://huzan2.tistory.com/",
    icon: PencilSquareIcon,
  },
  {
    name: "개발자 오픈채팅",
    href: "https://open.kakao.com/me/pedaltuner",
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function NavBar() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Menu</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {menu.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {submenu.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    window.open(item.href, "_blank");
                  }}
                  className="flex items-center cursor-pointer justify-center gap-x-2.5 p-2 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
