import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

const Comunity = () => {
  const defaultContent =
    "Furthermore, we strive to maintain transparency and accountability by openly communicating our actions and decisions based on the feedback received. This fosters trust and strengthens the bond between our community and the platform, creating a collaborative environment where everyone feels empowered to actively shape the future of our community";

  return (
    <div>
      <section>
        <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
          <h1 className="md:text-4xl text-2xl font-bold  underline  text-[#14261C] ">
            Join Our Community
          </h1>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mt-2"
          >
            "Join Our Community" is an inclusive space where enthusiasts,
            professionals, and learners converge to share insights, experiences,
            and knowledge about our shared passions. Whether you're an expert in
            the field or just starting out, our community welcomes everyone with
            open arms. By joining our community, you gain access to a wealth of
            resources, including forums, discussion boards, and interactive
            sessions, where you can engage in meaningful conversations, ask
            questions, seek advice, and connect with like-minded individuals who
            share your interests. Participating in our community opens doors to
            networking opportunities, collaborations, and partnerships, allowing
            you to expand your horizons, learn from others, and grow both
            personally and professionally
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#D1E1AE] rounded-lg outline-none to-[#D9CCE1]">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="md:text-4xl text-2xl font-bold leading-none text-gray-900">
              Join Our Community
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
              Our community is fueled by the collective wisdom and experiences
              of its members, creating a vibrant ecosystem where ideas flourish,
              innovations thrive, and friendships blossom. Together, we foster a
              supportive environment where everyone feels valued, respected, and
              empowered to contribute.
            </p>
            <div className="flex flex-wrap justify-center">
              <Accordion selectionMode="multiple">
                <AccordionItem
                  key="1"
                  aria-label="Chung Miller"
                  startContent={
                    <Avatar
                      isBordered
                      color="primary"
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                  }
                  subtitle="4 unread messages"
                  title="Chung Miller"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Janelle Lenard"
                  startContent={
                    <Avatar
                      isBordered
                      color="success"
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  }
                  subtitle="3 incompleted steps"
                  title="Janelle Lenard"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Zoey Lang"
                  startContent={
                    <Avatar
                      isBordered
                      color="warning"
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                    />
                  }
                  subtitle={
                    <p className="flex">
                      2 issues to
                      <span className="text-primary ml-1">fix now</span>
                    </p>
                  }
                  title="Zoey Lang"
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <img
          src="https://i.ibb.co/ZcwtSW8/Women-Power-Museum-Tour.png"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40"
        />
      </section>
    </div>
  );
};

export default Comunity;
