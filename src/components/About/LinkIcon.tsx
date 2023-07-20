import { Link } from "react-router-dom"

interface Props {
  url: string
  name: string
}

function LinkIcon(props: Props) {
  const { url, name } = props
  const imgPath = `/${name}-green.svg`

  return (
    <Link to={url} target={"_blank"}>
      <div className="link-icon">
        <img className="link-icon__svg" src={imgPath} alt={name} />
      </div>
    </Link>
  )
}

export default LinkIcon