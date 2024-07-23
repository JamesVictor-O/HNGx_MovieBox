import Recommended from './recommended/Recommended'
import Poster from "./poster/Poster"
import LatestMovie from './recommended/leatestMovie/LatestMovie'
import { Footer } from "./../../components/footerComponet/footer"

const LandingPage = () => {
    return (
          <div className="flex flex-row mt-2 md:mt-0">
            <div>
              <Poster/>
              <Recommended/>
               <LatestMovie/>
               <Footer/>
            </div>
          </div>
    )
}

export default LandingPage