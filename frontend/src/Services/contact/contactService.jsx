import { api } from "../../Config/api/apiConfig";


const findAll = async () => {
    try {
        const response = await api.get("/api/contact")
        console.log(response)
    } catch (e) {
        
    }
};

export {findAll}