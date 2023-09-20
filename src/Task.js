import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const tarih = new Date(taskObj.deadline);
  const kalanGun = formatDistanceToNow(tarih, {
    addSuffix: true,
    local: tr,
  });

  const accentCkass =
    differenceInDays(tarih, new Date()) <= 3 ? "normal" : "urgent";
  console.log(taskObj.deadline, differenceInDays(tarih, new Date()));

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0,0,0,0.1)]">
      <h3 className="text-lg text-turuncu">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{" "}
        <span className={`${accentCkass} py-1 px-2 rounded-sm inline-block`}>
          {kalanGun}
        </span>
      </div>
      <p className="pt-2 pb-3 text-sm text-gri">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-[5px] px-3  text-sm  border-2 border-solid border-borderColor mr-1 mb-1.5 rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0,0,0,0.05)] rounded-1 border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
