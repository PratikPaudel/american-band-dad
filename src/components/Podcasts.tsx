import { useState } from "react"
import AudioPlayer from "./AudioPlayer";

const Podcasts = () => {

    const [toggleState, setToggleState] = useState(1);

        const toggleTab = (index:any) => {
            setToggleState(index)
            console.log(index)
            console.log(toggleState)
        }

    // const podcastContents = [
    //     {
    //         imageUrl: './public/doctor 2.jpg',
    //         title: 'Bond with Son vs Son in Band',
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.'
    //     },
    //     {
    //         imageUrl: './public/doctor 2.jpg',
    //         title: 'Bond with Son vs Son in Band',
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.'
    //     }
    // ]

    // const [podcastContentArray, setPodcastContentArray] = useState(podcastContents);

  return (
    <div className="container">
        <div className="toggle-container">
          <div className="bloc-tabs">
            <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={()=>toggleTab(1)}
            >All</div>
            <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={()=>toggleTab(2)}
            >Series A</div>
            <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={()=>toggleTab(3)}
            >Series B</div>
          </div>
          <div className="content-tabs">
            <div className={toggleState === 1 ? "contents active-content" : "content"}>
                <div>
                    <div className="podcast-content">
                        <img src="./public/doctor 2.jpg" alt="doctor" />
                        <div>Bond with Son vs Son in Band</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</div>
                        <AudioPlayer />

                    </div>
                    <div className="podcast-content">
                        <img src="./public/lawyer 1.jpg" alt="doctor" />
                        <div>Football vs Orchestra?</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</div>
                    </div>
                    <div className="podcast-content">
                        <img src="./public/engineer 3.jpg" alt="doctor" />
                        <div>Sound Engineer - what's that?</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</div>
                    </div>
                </div>
            </div>
            <div className={toggleState === 2 ? "contents active-content" : "content"}>
                <div className="podcast-content">
                    <img src="./public/doctor 2.jpg" alt="doctor" />
                    <div>Bond with Son vs Son in Band</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</div>
                </div>
                <div className="podcast-content">
                        <img src="./public/engineer 3.jpg" alt="doctor" />
                        <div>Sound Engineer - what's that?</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</div>
                    </div>
            </div>
            <div className={toggleState === 3 ? "contents active-content" : "content"}>
                <div className="podcast-content">
                    <img src="./public/lawyer 1.jpg" alt="doctor" />
                    <div>Football vs Orchestra?</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Podcasts
