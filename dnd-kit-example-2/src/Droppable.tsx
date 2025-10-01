import { type ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  children: ReactNode;
  id: string;
};

export function Droppable({ children, id }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
