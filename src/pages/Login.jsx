import {useState} from "react"


export default function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        showPassword: false,
    })

    const handleChange = (event) => {
        console.log(formData)
        setFormData( prev => {
            const {name, value, type, checked} = event.target
            console.log(checked)

            return ({
                ...prev,
                [name]: type === "checkbox"? checked : value,
            })
        })
    }

    return(
            <form className="mx-auto max-w-[500px] shadow rounded p-6 ">

                <h1>Welcome back to Dexk builder. Please Login to Continue</h1>

                <div className="space-y-6">
                <div className="relative z-0">
                    <input type="text" id="username" name="username" className="floating-input peer" placeholder=" " onChange={handleChange}/>

                    <label htmlFor="username"
                        className="floating-label"
                    >Username</label>
                </div>

                <div className="relative z-0">
                    <input type={formData.showPassword ? "text" : "password"} id="password" name="password" className="floating-input peer" placeholder=" " onChange={handleChange}/>

                    <label htmlFor="password"
                        className="floating-label"
                    >Password</label>
                </div>
                </div>
                <input type="checkbox" name="showPassword" id="showPassword" onChange={handleChange}/>
                <label htmlFor="showPassword">Show Password</label>

            </form>
    )
}