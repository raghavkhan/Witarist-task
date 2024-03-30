const UpdateTask = async (id, updatedData) => {
  const body = updatedData;
  try {
    const response = await fetch(`/api/v1/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export default UpdateTask;
