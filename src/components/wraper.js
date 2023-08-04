import Navigation from "./navigation/navigation"
import ContentComponent from './content';
const Wrapper = () => {
    return (
        <div className="fd df ht_100vh">
            <div className="navigation">
                <Navigation />
            </div>
            <div className="contentComp">
                <ContentComponent />
            </div>
        </div>
    )
}
export default Wrapper;