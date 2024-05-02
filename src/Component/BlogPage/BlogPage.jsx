import HeroText from "../UniversalComponent/HeroText/HeroText";
import ArticalColum from "./ArticalColum";
import Pagination from "./Pagination";

const BlogPage = () => {
  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    // Logic to update the displayed articles based on the page number
    // For example, you might fetch the articles for the selected page
  };

  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{ text1: "OUR", text2: "BLOG", description: "" }}
          />

          {/* blog text*/}

          <div className="row">
            <ArticalColum
              articalInfo={{
                imgName: "Tojo images-16.png",
                title:
                  "TOJO Global: Your One-Stop Shop for Digital Transformation",
                shortDes:
                  "In today's digital age, navigating the ever-changing landscape can be overwhelming. TOJO Global simplifies your journey by offering a comprehensive suite of services under one roof. From Management and Marketing to Development, Design, and Listing, we empower businesses of all sizes to thrive online. Discover how TOJO Global can be your trusted partner in achieving digital success.",
                Author: "By Author 12/12/2024",
              }}
            />

            <ArticalColum
              articalInfo={{
                imgName: "Tojo images-10.png",
                title:
                  "Unlocking Growth: Data-Driven Strategies for Your Business",
                shortDes:
                  " Data is the fuel that propels successful digital strategies. At TOJO Global, we don't just create marketing campaigns or design websites – we leverage data insights to craft targeted solutions that deliver measurable results. Learn how our data-driven approach can help you unlock growth and achieve your business goals. (This blog post can showcase a specific client success story or highlight a particular service that utilizes data analysis.",
                Author: "By Author 12/12/2024",
              }}
            />

            <ArticalColum
              articalInfo={{
                imgName: "Tojo images-12.png",
                title:
                  "The Future of Work: Embracing Technology for a Competitive Edge",
                shortDes:
                  "The digital landscape is constantly evolving, and businesses need to adapt to stay ahead of the curve. In this blog post, TOJO Global explores the latest technological trends and how they are impacting the way we work. Discover how our team of experts can help you integrate emerging technologies into your business and gain a competitive edge. (This blog post positions TOJO Global as a thought leader and highlights their expertise in staying current with digital advancements.",
                Author: "By Author 12/12/2024",
              }}
            />

            <ArticalColum
              articalInfo={{
                imgName: "Tojo images-13.png",
                title:
                  "TOJO Global: Your One-Stop Shop for Digital Transformation",
                shortDes:
                  "In today's digital age, navigating the ever-changing landscape can be overwhelming. TOJO Global simplifies your journey by offering a comprehensive suite of services under one roof. From Management and Marketing to Development, Design, and Listing, we empower businesses of all sizes to thrive online. Discover how TOJO Global can be your trusted partner in achieving digital success.",
                Author: "By Author 12/12/2024",
              }}
            />

            <ArticalColum
              articalInfo={{
                imgName: "Tojo images-15.png",
                title:
                  "Unlocking Growth: Data-Driven Strategies for Your Business",
                shortDes:
                  " Data is the fuel that propels successful digital strategies. At TOJO Global, we don't just create marketing campaigns or design websites – we leverage data insights to craft targeted solutions that deliver measurable results. Learn how our data-driven approach can help you unlock growth and achieve your business goals. (This blog post can showcase a specific client success story or highlight a particular service that utilizes data analysis.",
                Author: "By Author 12/12/2024",
              }}
            />

            <ArticalColum
              articalInfo={{
                imgName: "Tojo images-18.png",
                title:
                  "The Future of Work: Embracing Technology for a Competitive Edge",
                shortDes:
                  "The digital landscape is constantly evolving, and businesses need to adapt to stay ahead of the curve. In this blog post, TOJO Global explores the latest technological trends and how they are impacting the way we work. Discover how our team of experts can help you integrate emerging technologies into your business and gain a competitive edge. (This blog post positions TOJO Global as a thought leader and highlights their expertise in staying current with digital advancements.",
                Author: "By Author 12/12/2024",
              }}
            />
          </div>
          <Pagination
            /* Total number of items */
            totalItems={30}
            /* Number of items per page */
            itemsPerPage={6}
            /* Function to handle page change */
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
