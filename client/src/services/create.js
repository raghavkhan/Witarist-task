
const Create = async() => {
    try {
        const response = await fetch(`http://localhost:8000/api/v1/home`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        // console.log('Error:', error);
        return error;
    }
}

export default Create;