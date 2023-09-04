import { useState, useEffect } from "react";
import axios from "axios";
import lalaicon from "../lalaicon.png";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

function BotStatus() {
  const [online, setOnline] = useState(false);
  const [botPing, setBotPing] = useState(0);
  const fetchData = async () => {
    try {
      const url = `http://${process.env.REACT_APP_BOT_SERVER}`;
      var t0 = performance.now();
      const botStatus = await axios.get(url);
      if (botStatus.data === "online") {
        setOnline(true);
      }
      var t1 = performance.now();
      setBotPing(t1 - t0);
    } catch (error) {
      console.log(error);
      setOnline(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-20 w-auto" src={lalaicon} alt="TunerBot" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Bot Status
        </h2>
        <p className="text-center text-sm font-semibold">튜너봇은 지금...</p>
      </div>
      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        {online ? (
          <div className="text-center">
            <CheckCircleIcon className="mx-auto h-20 w-auto fill-green-500" />
            <p className="font-bold text-xl">온라인입니다</p>
            <p className="font-normal text-sm font-mono py-1">
              Ping: {botPing.toFixed(2)}ms
            </p>
          </div>
        ) : (
          <div className="text-center">
            <ExclamationCircleIcon className="mx-auto h-20 w-auto fill-red-500" />
            <p className="font-bold text-xl">오프라인입니다</p>
            <p className="font-normal text-lg py-1">
              개발자 오픈채팅으로 제보해주세요!
            </p>
          </div>
        )}
        <div>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 my-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={fetchData}
          >
            새로고침
          </button>
        </div>
      </div>
    </div>
  );
}
export default BotStatus;
