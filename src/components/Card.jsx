import React from "react";
import Card from "react-bootstrap/Card";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "react-bootstrap";
const CardCol = ({ id, title, description }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id.toString(), data: { title, description } });
  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        width: "18rem",
        padding: "10px",
        marginBottom: "10px",
        background: "lightblue",
        cursor: "grab",
        transform: CSS.Transform.toString(transform),

        transition: transition,
      }}
    >
      <Card.Body>
        <Card.Title>
          <div className="d-flex gap-5 justify-content-between">
          <p>{title}</p>
          <Button variant="danger">delete</Button>
          </div>
        </Card.Title>
        <div className="d-flex">
          {description ? <p>{description}</p> : null}
        </div>
      </Card.Body>
    </Card>
    
  );
};

export default CardCol;
