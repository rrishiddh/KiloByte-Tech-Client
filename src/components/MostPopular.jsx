import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MostPopular = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="font-bold text-2xl mt-6 mb-2 text-center">
        Latest In Tech
      </h1>
      <Tabs>
        <TabList>
          <Tab>Apple iPhone 16 Pro</Tab>
          <Tab>Samsung Galaxy Z Fold 6</Tab>
          <Tab>Sony WF-1000XM5</Tab>
          <Tab>Poco X7 Pro Iron Man Edition</Tab>
        </TabList>

        <TabPanel className="grid grid-cols-2">
          <div>
            <p className="italic text-justify">
              <b>
                Apple iPhone 16 Pro : Rumored Titanium Build and Camera Revamp
              </b>{" "}
              <br />
              Explore the latest rumors surrounding the iPhone 16 Pro,
              highlighting the possible shift to a titanium body. Discuss the
              implications of this design choice for durability, weight, and
              premium appeal. Examine the leaked renders of the updated camera
              module, potentially featuring a periscope zoom lens. Speculate on
              other enhancements, such as an even thinner bezel and
              under-display Face ID. Include high-quality renders or mockups to
              provide a visual context for readers.
            </p>
            <p className="my-3 text-xs text-red-400">
              Source:{" "}
              <a
                className="text-blue-400 underline"
                href="https://www.gsmarena.com/apple_iphone_16_pro-13315.php"
                target="_blank"
              >
                GSMARENA
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://fdn.gsmarena.com/imgroot/reviews/24/apple-iphone-16-pro/lifestyle/-1024w2/gsmarena_001.jpg"
              className="  object-cover mx-auto rounded-xl"
            />
            <img
              src="https://fdn.gsmarena.com/imgroot/reviews/24/apple-iphone-16-pro/lifestyle/-1024w2/gsmarena_003.jpg"
              className="  object-cover mx-auto rounded-xl"
            />
          </div>
        </TabPanel>

        <TabPanel className="grid grid-cols-2">
          <div>
            <p className="italic text-justify">
              <b>Samsung Galaxy Z Fold 6 : A Refined Folding Experience</b>{" "}
              <br />
              Dive into the leaked specs and images of the Samsung Galaxy Z Fold
              6, focusing on its slimmer hinge design and more durable folding
              mechanism. Analyze the larger cover screen, improved aspect ratio,
              and rumored integration of S Pen storage. Discuss how these
              changes might enhance usability and cater to productivity
              enthusiasts. Highlight potential upgrades in the software and
              performance department, backed by Snapdragon’s latest chipset.
              Share leaked visuals to enrich the discussion.
            </p>
            <p className="my-3 text-xs text-red-400">
              Source:{" "}
              <a
                className="text-blue-400 underline"
                href="https://www.gsmarena.com/samsung_galaxy_z_fold6-13147.php"
                target="_blank"
              >
                GSMARENA
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-z-fold6/lifestyle/-1024w2/gsmarena_004.jpg"
              className="  object-cover mx-auto rounded-xl"
            />
            <img
              src="https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-z-fold6/lifestyle/-1024w2/gsmarena_005.jpg"
              className="  object-cover mx-auto rounded-xl"
            />
          </div>
        </TabPanel>
        <TabPanel className="grid grid-cols-2">
          <div>
            <p className="italic text-justify">
              <b>Sony WF-1000XM5 : Leak Points to Smaller, Smarter Earpods</b>{" "}
              <br />
              Explore the leaked images and rumors about Sony&apos;s WF-1000XM5
              earpods, emphasizing their sleeker and more compact design.
              Discuss potential improvements in active noise cancellation and
              battery life based on the updated form factor. Speculate on the
              introduction of new audio features, such as spatial audio and
              advanced equalizer settings, to compete with other premium
              earpods. Share high-quality leaked renders or images to offer
              readers a glimpse of what’s in store.
            </p>
            <p className="my-3 text-xs text-red-400">
              Source:{" "}
              <a
                className="text-blue-400 underline"
                href="https://www.gsmarena.com/sony_wf1000xm5_review-news-59837.php"
                target="_blank"
              >
                GSMARENA
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://fdn.gsmarena.com/imgroot/news/23/09/sony-wf-1000-xm5-review/inline/-1200w5/gsmarena_001.jpg"
              className="  object-cover mx-auto rounded-xl"
            />
            <img
              src="https://fdn.gsmarena.com/imgroot/news/23/09/sony-wf-1000-xm5-review/inline/-1200w5/gsmarena_008.jpg"
              className="  object-cover mx-auto rounded-xl"
            />
          </div>
        </TabPanel>
        <TabPanel className="grid grid-cols-2">
          <div>
            <p className="italic text-justify">
              <b>Poco X7 Pro Iron Man Edition : True Iron Man!</b> <br />
              Say hello to the just announced Poco X7 Pro! Even better,
              it&apos;s the special Poco X7 Pro Iron Man Edition! The phone
              ships in a striking Iron Man-themed box and brings a special case
              that doesn&apos;t hide the design and a red USB-A to USB-C cable.
              You also get an Arc Reactor token! This special edition comes in a
              single 12/512GB configuration in Red, while the normal model also
              adds Black, Green, and Yellow, and in 8/256GB, 12/256GB
              versions.The Poco X7 Pro Iron Man Edition has a custom 3D Iron Man
              rear panel design with Marvel&apos;s Avengers logo. The HyperOS 2
              interface is also dressed in an Iron Man UI theme.Special edition
              aside, the Poco X7 Pro is all about performance, endurance, and
              design. It has a 6.67-inch 120Hz AMOLED, a 6,000mAh battery with
              90W charging, and is IP68 rated for water and dust.
            </p>
            <p className="my-3 text-xs text-red-400 ">
              Source:{" "}
              <a
                className="text-blue-400 underline"
                href="https://www.gsmarena.com/poco_x7_pro_iron_man_edition_in_for_review-news-66013.php"
                target="_blank"
              >
                GSMARENA
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://fdn.gsmarena.com/imgroot/news/25/01/poco-x7-pro-ifr/-1200w5/gsmarena_004.jpg"
              className="  object-cover mx-auto rounded-xl"
            />
            <img
              src="https://fdn.gsmarena.com/imgroot/news/25/01/poco-x7-pro-ifr/-1200x900mw5/gsmarena_002.jpg"
              className="  object-cover mx-auto rounded-xl"
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MostPopular;
