
const DeleteTask = async (id) => {
    try {
        const response = await fetch(`/api/v1/tasks/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
        const data = await response.json();
        console.log('User deleted:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        return error;
    }
};
export default DeleteTask;