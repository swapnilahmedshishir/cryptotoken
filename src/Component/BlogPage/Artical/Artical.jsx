import { useParams } from "react-router-dom"
import ArticalColum from "../ArticalColum";

const Artical = () => {
    const {title} = useParams();
    console.log(title);
  return (
    <>
<div className="univarsal_div">
        <div className="container">
          <h1>blog text</h1>
          {/* blog text*/}

          {/* <div className="row">
            {currentArticals.map((d, i) => (
              <ArticalColum
                key={i}
                articalInfo={{
                  imgName: d.urlToImage,
                  title: d.title,
                  shortDes: d.description,
                  Author: d.author,
                }}
              />
            ))}
          </div> */}
          
        </div>
      </div>
    </>
  )
}

export default Artical