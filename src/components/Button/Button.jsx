import { ButtonStuled } from "./Button.stuled"

const Button = ({children, type="submit"}) => {
    return (
        <ButtonStuled type={type}>{children}</ButtonStuled>
    )
}

export default Button;