import AboutContainer from './About/AboutContainer'
import WorkContainer from './Work/WorkContainer'
import ContactContainer from './Contact/ContactContainer'

function Views() {
  return (
    <div className="views-container" id="views">
      <AboutContainer />
      <WorkContainer />
      <ContactContainer />
    </div>
  )
}

export default Views
