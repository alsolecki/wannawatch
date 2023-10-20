import React from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable} from '@dnd-kit/sortable'

import LineItem from './LineItem.jsx'

const MovieList = ({ items, handleDelete, setItems }) => {


  return (

        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
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