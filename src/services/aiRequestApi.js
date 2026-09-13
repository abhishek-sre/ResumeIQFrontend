import axios from "axios";

const sendRequestForAi = async (data) => {
    try {
        const response = await axios.post(
            "https://resume-iq-backend.vercel.app/api/ai/resume/analyser",
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