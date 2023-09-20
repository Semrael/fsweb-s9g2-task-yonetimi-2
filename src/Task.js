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
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span className={accentCkass}>{kalanGun}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-[5px] px-3  text-sm  border-[1px] border-[#ccc] mr-1 mb-1.5 rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
