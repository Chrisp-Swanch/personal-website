import { useContext, useEffect } from 'react'

import WorkSideBar from './WorkSideBar'
import WorkFeatures from './WorkFeatures'
import features from '../../features.json'
import { Context } from '../../context'

function WorkContent() {
  const [selectedFeature, setSelectedFeature] = useContext(Context)

  useEffect(() => {
    setSelection(features[0].id)
  }, [])

  return (
    <div className="section-container__work__content">
      <WorkSideBar
        features={features}
        selection={selection}
        setSelection={setSelection}
      />
      <WorkFeatures
        features={features}
        selection={selection}
        setSelection={setSelection}
      />
    </div>
  )
}

export default WorkContent