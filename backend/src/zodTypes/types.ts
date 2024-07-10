import z,{date, number, string} from "zod"

export const loginInputs = z.object({
    email: string().email(),
    password: string().min(8)
})

export const createuserInputs = z.object({
    name: string(),
    email: string().email(),
    password: string().min(8),
    phone: string(),
})  

