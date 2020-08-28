import { useState } from "react"

function useForm(initialValues: any) {
    const [values, setValues] = useState(initialValues)

    const handleChange = (event: any) => {
        console.log(event.target)
        setValue(event.target.getAttribute('name') || '', event.target.value)
    }

    const setValue = (name: string, value: string) => {
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        handleChange,
    }
}

export default useForm