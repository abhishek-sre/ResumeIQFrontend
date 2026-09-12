import axios from "axios";

const sendRequestForAi = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/ai/resume/analyser",
            data
        )
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export{
    sendRequestForAi
}