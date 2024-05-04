
import { SuggestedConatiner } from "../../styles/components/Suggested";
import {AdsData} from '../../data/AdsData' 
import Ads from "../Ads";
const Suggested = () => {
  return (
    <SuggestedConatiner>

      {
         AdsData.map((items, index) =>( 
          <Ads key={index} id={items.id} title={items.title} description={items.description} img={items.img}/>
          ))
      }
    </SuggestedConatiner>
  )
}

export default Suggested
