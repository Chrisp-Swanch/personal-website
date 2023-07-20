import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context'

interface Props {
  id: string
}

function VerticalText(props: Props) {
  const { id } = props
  const { navSelection } = useContext(Context)
  const [verticalText, setVerticalText] = useState('')

  useEffect(() => {
    setVerticalText(id)
    console.log(navSelection)
  }, [navSelection, id])

  return (
    <div className="vertical-text">
      <p>-</p>
      <span className="vertical-text__selection">
        <h2>{verticalText}</h2>
      </span>
    </div>
  )
}

export default VerticalText
