import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'

interface Props {
  id: string
}

function NavSelected(props: Props) {
  const { id } = props
  const { navSelection } = useContext(Context)
  const [headerText, setHeaderText] = useState('')

  useEffect(() => {
    setHeaderText(id)
  }, [navSelection, id])

  return (
    <div className="vertical-text">
      <p>-</p>
      <span className="vertical-text__selection">
        <h2>{headerText}</h2>
      </span>
    </div>
  )
}

export default NavSelected
