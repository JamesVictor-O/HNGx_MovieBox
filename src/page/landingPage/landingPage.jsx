import Recommended from './recommended/Recommended'
import Poster from "./poster/Poster"
const LandingPage = () => {
    return (
          <div className="flex flex-col">
            <div>
              <Poster/>
              <Recommended/>
            </div>

          </div>
    )
}

export default LandingPage