import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskList = ({
  tasks,
  onDelete,
  onUpdate,
}: {
  tasks: Task[];
  onDelete: (id: number) => void;
  onUpdate: (task: Task) => void;
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-gray-200 p-2 mb-2 rounded"
        >
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onUpdate({ ...task, completed: !task.completed })}
              className="mr-2"
            />
            <span>{task.title}</span>
          </div>
          <button onClick={() => onDelete(task.id)} className="text-red-500">
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
