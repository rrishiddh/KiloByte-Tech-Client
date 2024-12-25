import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MostPopular = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="font-bold text-2xl mt-6 mb-2 text-center">Latest In Tech:</h1>
      <Tabs>
        <TabList>
          <Tab>Apple iPhone 16 Pro</Tab>
          <Tab>Samsung Galaxy Z Fold 6</Tab>
          <Tab>Sony WF-1000XM5</Tab>
          <Tab>Dell XPS 15 2024</Tab>
        </TabList>

        <TabPanel>
          <p className="italic">
            <b>Apple iPhone 16 Pro : Rumored Titanium Build and Camera Revamp</b> <br />
            Explore the latest rumors surrounding the iPhone 16 Pro, highlighting the possible shift to a titanium body. Discuss the implications of this design choice for durability, weight, and premium appeal. Examine the leaked renders of the updated camera module, potentially featuring a periscope zoom lens. Speculate on other enhancements, such as an even thinner bezel and under-display Face ID. Include high-quality renders or mockups to provide a visual context for readers.
          </p>
          <p className="mt-3 text-red-400">
            Source:{" "}
            <a className="text-blue-400 underline" href="https://www.gsmarena.com/apple_iphone_16_pro-13315.php" target="_blank">
              GSMARENA
            </a>
          </p>
        </TabPanel>
        
        <TabPanel>
          <p className="italic">
            <b>Samsung Galaxy Z Fold 6 :  A Refined Folding Experience</b> <br />
            Dive into the leaked specs and images of the Samsung Galaxy Z Fold 6, focusing on its slimmer hinge design and more durable folding mechanism. Analyze the larger cover screen, improved aspect ratio, and rumored integration of S Pen storage. Discuss how these changes might enhance usability and cater to productivity enthusiasts. Highlight potential upgrades in the software and performance department, backed by Snapdragon’s latest chipset. Share leaked visuals to enrich the discussion.
          </p>
          <p className="mt-3 text-red-400">
            Source:{" "}
            <a className="text-blue-400 underline" 
              href="https://www.gsmarena.com/samsung_galaxy_z_fold6-13147.php"
              target="_blank"
            >
              GSMARENA
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p className="italic">
            <b>Sony WF-1000XM5 : Leak Points to Smaller, Smarter Earpods</b> <br />
            Explore the leaked images and rumors about Sony&apos;s WF-1000XM5 earpods, emphasizing their sleeker and more compact design. Discuss potential improvements in active noise cancellation and battery life based on the updated form factor. Speculate on the introduction of new audio features, such as spatial audio and advanced equalizer settings, to compete with other premium earpods. Share high-quality leaked renders or images to offer readers a glimpse of what’s in store.
          </p>
          <p className="mt-3 text-red-400">
            Source:{" "}
            <a  className="text-blue-400 underline"  href="https://www.gsmarena.com/sony_wf1000xm5_review-news-59837.php" target="_blank">
            GSMARENA
            </a>
          </p>
        </TabPanel>      
        <TabPanel>
          <p className="italic">
            <b>Dell XPS 15 2024 : Leaks Suggest Powerful Upgrades and New Design</b> <br />
            Analyze the leaked details of the upcoming Dell XPS 15, focusing on its sleeker chassis and rumored edge-to-edge keyboard layout. Highlight the potential inclusion of the latest Intel Core i9 processors and NVIDIA RTX 40-series GPUs for a significant performance boost. Discuss the speculation about an upgraded OLED display with a higher refresh rate for an enhanced viewing experience. Leaked images suggest thinner bezels and improved thermal design. Include visuals to help readers visualize these exciting changes.
          </p>
          <p className="mt-3 text-red-400">
            Source:{" "}
            <a  className="text-blue-400 underline"  href="https://www.amazon.com/Dell-XPS-15-Microsoft-i7-13620H/dp/B0CYPVVFKS" target="_blank">
            AMAZON
            </a>
          </p>
        </TabPanel>      
      </Tabs>
    </div>
  );
};

export default MostPopular;
