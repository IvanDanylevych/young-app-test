interface TitleProps {
  text: string,
  classname: string
}

const Title = ({ text, classname }: TitleProps) => (
  <h1 className={classname}>{text}</h1>
)

export default Title;