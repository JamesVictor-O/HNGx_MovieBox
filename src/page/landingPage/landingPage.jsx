import Recommended from './recommended/Recommended'
import Poster from "./poster/Poster"
import LatestMovie from './recommended/leatestMovie/LatestMovie'
const LandingPage = () => {
    return (
          <div className="flex flex-row mt-8 md:mt-0">
            <div>
              <Poster/>
              <Recommended/>
               <LatestMovie/>
            </div>
          </div>
    )
}

export default LandingPage