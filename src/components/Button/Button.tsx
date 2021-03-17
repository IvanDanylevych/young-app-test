interface ButtonProps {
  text: string,
  onClick: () => void,
  classname?: string
}

const Button = ({ text, onClick, classname }: ButtonProps) => (
  <button className={classname} onClick={onClick}>{text}</button>
)

export default Button;