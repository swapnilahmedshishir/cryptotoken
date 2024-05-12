import { useParams } from "react-router-dom";
import ArticalColum from "../ArticalColum";
import { RxAvatar } from "react-icons/rx";
import { MdDateRange } from "react-icons/md";
import { useEffect, useState } from "react";
// import axios from "axios";
import FakData from "../../../FackData/data.json";

const Artical = () => {
  const { title } = useParams();

  //   state
  const [post, setPost] = useState([]);
  const [randomArticles, setRandomArticles] = useState([]);

  // FackData
  const fackData = FakData;
  const [article] = useState(fackData.articles);

  // Data filter
  useEffect(() => {
    const permalink = title.replaceAll(/-/g, " ");
    const matchItems = article.filter(
      (art) => art.title.toLowerCase() === permalink.toLowerCase()
    );
    setPost(matchItems);
  }, [article, title]);

  useEffect(() => {
    const fackData = FakData;
    const { articles } = fackData;

    // Shuffle the articles array
    const shuffledArticles = articles.sort(() => 0.5 - Math.random());

    // Get the first 3 articles
    const selectedArticles = shuffledArticles.slice(0, 3);

    setRandomArticles(selectedArticles);
  }, []);

  // Check if post[0] exists before accessing its properties
  const postTitle = post[0]?.title;
  const image = post[0]?.urlToImage;
  const summary = post[0]?.description;
  const author = post[0]?.author;
  const publishedAt = post[0]?.publishedAt;
  const content = post[0]?.content;

  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <div className="artical_img">
            <img className="img-fluid" src={image} alt={image} />
          </div>
          <div className="artical_text_div">
            <div className="artical_text_info">
              <ul>
                <li>
                  <a href="" className="infotext">
                    <RxAvatar className="infoIcon" /> {author}
                  </a>
                </li>
                <li>
                  <span className="infotext">
                    <MdDateRange className="infoIcon" /> {publishedAt}
                  </span>
                </li>
              </ul>
            </div>
            <h1 className="artical_title_text">{postTitle}</h1>
            {/* <div
      className='postSummary'
      dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(summary),
            }}
          ></div>  */}
            <p className="artical_des_text">{summary}</p>
            <p className="artical_des_text">{content}</p>
            <p className="artical_des_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptas repellendus eligendi quos sint provident accusamus alias
              ut cumque amet?
            </p>
            <p className="artical_des_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptas repellendus eligendi quos sint provident accusamus alias
              ut cumque amet?
            </p>{" "}
            <img
              className="img-fluid"
              src="https://media.npr.org/assets/img/2023/12/05/laine.ap_wide-37984ee9f92e03b4808261c714af31a312350ebb-s1400-c100.jpg"
              alt=""
            />
            <br />
            <br />
            <p className="artical_des_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptas repellendus eligendi quos sint provident accusamus alias
              ut cumque amet?
            </p>
          </div>

          {/* blog text*/}

          <div className="row">
            {randomArticles.map((article, index) => (
              <ArticalColum
                key={index}
                articalInfo={{
                  imgName: article.urlToImage,
                  title: article.title,
                  shortDes: article.description,
                  Author: article.author,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artical;

//   // state
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [blogpost, setBlogpost] = useState([]);
//   const [Artical, setArtical] = useState([]);
//     // blog data
// useEffect(() => {
//     axios
//       .get("http://localhost:8005/admin/blogpost")
//       .then((result) => {
//         if (result.data.Status) {
//           setBlogpost(result.data.Result);
//         } else {
//           setErrorMessage(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   // Data filter
//     useEffect(() => {
//       const permalink = title.replaceAll(/-/g, " ");
//       const matchProduct = blogpost.filter((art) => art.blogtitle === permalink);
//       setArtical(matchProduct);
//     }, [blogpost, title]);

//     // Check if post[0] exists before accessing its properties
//     const postTitle = Artical[0]?.blogtitle;
//     const image = Artical[0]?.blogImg;
//     const summary = Artical[0]?.description;
