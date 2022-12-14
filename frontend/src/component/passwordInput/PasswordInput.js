import "./PasswordInput.scss"
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = function({ placeholder, name, onChange, value, onPaste }) {
    const [ showPassword, setShowPassword ] = useState(false)

    const togglePassword = function() {
        setShowPassword(!showPassword)
    }
    return(
        <div
        className="password">
            <input type={ showPassword ? "text" : "password"}
            placeholder={placeholder}
            required
            name={name}
            onChange={onChange}
            value={value}
            onPaste={onPaste}
             />
             <div className="icon" onClick={togglePassword}>
                {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
             </div>
        </div>
    )
}

export default PasswordInput