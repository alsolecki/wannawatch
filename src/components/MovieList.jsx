import React from 'react'
import { DndContext, closestCenter, TouchSensor, MouseSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import LineItem from './LineItem.jsx'

const MovieList = ({ items, handleDelete, setItems }) => {

  const keyboardSensor = useSensor(KeyboardSensor);
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 5,
      tolerance: 5,
    },
  });

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
  );

  return (

        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            sensors={sensors}
        >
            <ul>
                <SortableContext
                    items={items}
                    strategy={verticalListSortingStrategy}
                >
                    {items.map((item)=>(
                        <LineItem 
                            key={item.id}
                            item={item}
                            handleDelete={handleDelete}
                            setItems={setItems}
                        />
                    ))}
                </SortableContext>
            </ul>
        </DndContext>
  )

  function handleDragEnd(event) {
    // console.log("Drag and called");
    const {active, over} = event;
    // console.log(event)
    // console.log("ACTIVE: " + active.id);
    // console.log("OVER: " + over.id);

    //logic for setting new array
    if(active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(f => f.id === active.id);
        const newIndex = items.findIndex(f => f.id === over.id);
        // console.log(arrayMove(items, oldIndex, newIndex));
        return arrayMove(items, oldIndex, newIndex);
      })
    }
  }

}

export default MovieList