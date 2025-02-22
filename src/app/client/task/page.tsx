"use client"
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { FaCalendar, FaUserCircle, FaEllipsisV, FaPlus } from 'react-icons/fa';

// Priority badges with your theme colors
const PriorityBadge = ({ priority }) => {
  const colors = {
    High: 'bg-red-500',
    Medium: 'bg-yellow-500',
    Low: 'bg-green-500'
  };
  return (
    <span className={`${colors[priority]} text-xs px-2 py-1 rounded-full`}>
      {priority}
    </span>
  );
};

export default function TaskBoard() {
  const [columns, setColumns] = useState({
    upcoming: {
      title: 'Upcoming',
      tasks: [
        {
          id: '1',
          title: 'Android App homepage',
          description: 'Design the homepage layout for the Android application with a clean and user-friendly interface.',
          priority: 'High',
          dueDate: 'Oct 16, 2025',
          assignees: ['user1', 'user2'],
        },
        // Add more initial tasks
      ]
    },
    inProgress: {
      title: 'In Progress',
      tasks: []
    },
    inReview: {
      title: 'In Review',
      tasks: []
    },
    completed: {
      title: 'Completed',
      tasks: []
    }
  });

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
  });

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceTasks = [...sourceColumn.tasks];
      const destTasks = [...destColumn.tasks];
      const [removed] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceTasks
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destTasks
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedTasks = [...column.tasks];
      const [removed] = copiedTasks.splice(source.index, 1);
      copiedTasks.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          tasks: copiedTasks
        }
      });
    }
  };

  const handleAddTask = () => {
    if (!newTask.title) return;
    
    const task = {
      id: Date.now().toString(),
      ...newTask,
      assignees: ['user1']
    };

    setColumns({
      ...columns,
      upcoming: {
        ...columns.upcoming,
        tasks: [...columns.upcoming.tasks, task]
      }
    });

    setNewTask({
      title: '',
      description: '',
      priority: 'Medium',
      dueDate: ''
    });
    setIsAddingTask(false);
  };

  return (
    <div className="p-6 bg-[#0b0c23] min-h-screen">
      {/* Board Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Task Board</h1>
        <button
          onClick={() => setIsAddingTask(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" /> Add New Task
        </button>
      </div>

      {/* Add Task Modal */}
      {isAddingTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#0f1535] rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-white">Add New Task</h2>
            <input
              type="text"
              placeholder="Task Title"
              className="w-full bg-[#0b0c23] text-white p-2 rounded mb-4"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="w-full bg-[#0b0c23] text-white p-2 rounded mb-4"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <select
              className="w-full bg-[#0b0c23] text-white p-2 rounded mb-4"
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
            <input
              type="date"
              className="w-full bg-[#0b0c23] text-white p-2 rounded mb-4"
              value={newTask.dueDate}
              onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsAddingTask(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddTask}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Kanban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(columns).map(([columnId, column]) => (
            <div key={columnId} className="bg-[#0f1535] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">{column.title}</h2>
                <span className="bg-[#0b0c23] text-white px-2 py-1 rounded">
                  {column.tasks.length}
                </span>
              </div>
              
              <Droppable droppableId={columnId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-4 min-h-[200px]"
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-[#0b0c23] p-4 rounded-lg shadow"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-white font-medium">{task.title}</h3>
                              <div className="flex items-center space-x-2">
                                <PriorityBadge priority={task.priority} />
                                <button className="text-gray-400 hover:text-white">
                                  <FaEllipsisV />
                                </button>
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{task.description}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-2 text-gray-400">
                                <FaCalendar className="text-sm" />
                                <span className="text-sm">{task.dueDate}</span>
                              </div>
                              <div className="flex -space-x-2">
                                {task.assignees.map((assignee, i) => (
                                  <FaUserCircle
                                    key={i}
                                    className="w-6 h-6 text-blue-500 bg-[#0b0c23] rounded-full"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}