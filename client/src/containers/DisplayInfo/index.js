import React, { useState, useEffect } from "react";
// import { data } from '../../data/data';
import "./style.css";
import Table from "../../components/table";
import UpdateForm from "../../components/update-form";
import DropDown from "../../components/drop-down";

import ListTasks from "../../services/list-tasks";
import { mapData } from "../../data/data";
import DeleteTask from "../../services/delete-task";
import UpdateTask from "../../services/update-task";
import Form from "../Form";

const DisplayInfo = () => {
  const [ascending, setAscending] = useState(true);
  const [baseData, setData] = useState("");
  const [useData, setUseData] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedUpdateItemId, setSelectedUpdateItemId] = useState(null);
  const [isRefetch, setRefetch] = useState(false);
  const fetchUsers = async () => {
    const data = await ListTasks();
    if (data !== undefined){
    const mappedData = mapData(data);
    setData(mappedData);
    setUseData(mappedData);
    }
    // console.log(mappedData);
  };
  useEffect(() => {
    fetchUsers();
  }, [isRefetch]);

  const removeItem = async (id) => {
    const updatedData = baseData.filter((item) => item.id !== id);
    setData(updatedData);
    setSelectedItemId(null);
    const deletedTask = await DeleteTask(id);
    setRefetch((prev) => !prev);
  };
  const updateItem = async (id, updatedData) => {
    // console.log(id, updatedData);
    const updateTask = await UpdateTask(id, updatedData);
    // console.log(updateUser);
    setRefetch((prev) => !prev);
    setSelectedItemId(null);
  };
  const closeModal = () => {
    setSelectedItemId(null);
    setSelectedUpdateItemId(null);
  };
  const onClickDelete = (id) => {
    setSelectedItemId(id);
  };
  const onClickUpdate = (id) => {
    setSelectedUpdateItemId(id);
  };

  const sortByTaskName = (ascending = true) => {
    const sortedData = [...baseData].sort((a, b) => {
      const order = ascending ? 1 : -1;
      return order * a.taskName.localeCompare(b.taskName);
    });
    setData(sortedData);
    setAscending((prev) => !prev);
  };

  const sortByPriority = (ascending = true) => {
    const priorityOrder = { low: 1, medium: 2, high: 3 };

    const sortedData = [...baseData].sort((a, b) => {
      const order = ascending ? 1 : -1;
      return order * (priorityOrder[a.priority] - priorityOrder[b.priority]);
    });

    setData(sortedData);
    setAscending((prev) => !prev);
  };

  return (
    <>
      <div className='full-container'>
        <Form setRefetch={setRefetch} />
        <div className='table-wrapper'>
          <div className='searchbar-dropdown-wrapper'>
            {/* <SearchBar /> */}
            <button onClick={() => sortByTaskName(ascending)}>
              Sort By Task-Name
            </button>
            <button onClick={() => sortByPriority(ascending)}>
              Sort By Priority
            </button>
            <DropDown
              data={baseData}
              setData={setData}
              setRefetch={setRefetch}
              useData={useData}
            />
          </div>
          <Table
            headers={["Task-Name", "Priority"]}
            data={baseData}
            onDelete={onClickDelete}
            onUpdate={onClickUpdate}
          />
        </div>
        {selectedItemId && (
          <div className='modal'>
            <div className='modal-content'>
              <h2>Confirm Deletion</h2>
              <p>Are you sure you want to delete this item?</p>
              <div>
                <button
                  onClick={() => {
                    removeItem(selectedItemId);
                  }}
                >
                  Yes
                </button>
                <button onClick={closeModal}>No</button>
              </div>
            </div>
          </div>
        )}
        {selectedUpdateItemId && (
          <div className='modal'>
            <div className='modal-content'>
              <UpdateForm
                id={selectedUpdateItemId}
                onUpdate={updateItem}
                closeModal={closeModal}
              />
              <button onClick={closeModal}>No</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayInfo;
