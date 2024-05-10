import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const handleType = (count, number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div>
      <div className="w-full  bg-gradient-to-r from-[#14261C] to-[#F3F6F3]  md:flex md:justify-between  gap-5 md:items-center p-5 ">
        <div className="md:w-2/4 ">
          {/* <img src="https://lottie.host/embed/42cd3f01-e5b6-4393-8bc5-4c7ba9e47be4/zWrSoFbTVr.json" alt="" className="w-full" /> */}
          <iframe
            src="https://lottie.host/embed/42cd3f01-e5b6-4393-8bc5-4c7ba9e47be4/zWrSoFbTVr.json"
            className="w-full min-h-screen"
          ></iframe>
        </div>
        <div className="md:w-2/4">
          <div>
            <div className="bg-gradient-to-r from-[rgba(21,21,21,0)] rounded-lg outline-none to-[#F3F6F3] p-2">
              <h1 className="md:text-3xl text-2xl font-bold text-[#14261C] text-center">
                Welcome to Simple Blog
              </h1>
              <p className="text-[#4F5655]">
                "Welcome to Our Simple Blog: Your Gateway to Knowledge,
                Inspiration, and Connection! Dive into a world of endless
                possibilities as you explore our diverse collection of articles,
                insights, and stories. Whether you're seeking expert advice,
                creative inspiration, or thought-provoking discussions, our blog
                hub is your go-to destination.
              </p>
              <h1
                style={{
                  paddingTop: "1rem",
                  margin: "auto 0",
                  fontWeight: "normal",
                }}
                className="text-center text-2xl"
              >
                Dive into the realm of Blog{" "}
                <span className="text-[#00AC97]" style={{ fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[
                      "The Creative Corner",
                      "Health & Wellness Hub",
                      "Tech Talk Central",
                      "Travel Tales & Adventures",
                      "Foodie Finds & Culinary Delights",
                      "Mindful Living Magazine",
                      "Career Compass: Navigating Your Professional Journey",
                      "Parenting Perspectives",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
