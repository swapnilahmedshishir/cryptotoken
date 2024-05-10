import { useState } from 'react';
import HeroText from '../UniversalComponent/HeroText/HeroText';
import ArticalColum from './ArticalColum';
import Pagination from './Pagination';
import FakData from '../../FackData/data.json';

const BlogPage = () => {
  const fackData = FakData;
  const [results] = useState(fackData.totalResults);
  const [artical] = useState(fackData.articles);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(results / itemsPerPage);
  console.log(totalPages);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the start and end index of articles for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, artical.length);

  // Get the articles for the current page
  const currentArticals = artical.slice(startIndex, endIndex);

  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText heroText={{ text1: 'OUR', text2: 'BLOG', description: '' }} />

          {/* blog text*/}

          <div className="row">
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
          </div>
          <Pagination
            /* Total number of items */
            totalItems={results}
            /* Number of items per page */
            itemsPerPage={itemsPerPage}
            /* Function to handle page change */
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPage;





















// import HeroText from "../UniversalComponent/HeroText/HeroText";
// import ArticalColum from "./ArticalColum";
// import Pagination from "./Pagination";
// import { useState } from "react";
// const BlogPage = () => {
//   const handlePageChange = (pageNumber) => {
//     console.log(pageNumber == artical);
//     // Logic to update the displayed articles based on the page number
//     // For example, you might fetch the articles for the selected page
//   };

//   return (
//     <>
//       <div className="univarsal_div">
//         <div className="container">
//           <HeroText
//             heroText={{ text1: "OUR", text2: "BLOG", description: "" }}
//           />

//           {/* blog text*/}

//           <div className="row">
//             {
//               artical &&  artical.map((d,i) =>(
//                 <ArticalColum key={i}
//                 articalInfo={{
//                   imgName: d.urlToImage,
//                   title:d.title,
//                   shortDes:d.description,
//                   Author: d.author,
//                 }}
//               />
//               ))}
//           </div>
//           <Pagination
//             /* Total number of items */
//             totalItems={results}
//             /* Number of items per page */
//             itemsPerPage={6}
//             /* Function to handle page change */
//             onPageChange={handlePageChange}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogPage;
