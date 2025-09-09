import { Text } from "@/components/common";
import { useScreenSize } from "@/hooks";
import { combineClassNames } from "@/utils/common";
import "./LandingPage.scss";

const LandingPage = () => {
  const { isMobile } = useScreenSize();
  const SKILLS = [
    "Javascript / Typescript",
    "ReactJS / NextJS",
    "MUI, Antd, Chakra, Redux, redux-toolkit",
  ];

  const HOBBIES = ["Gaming", "Basketball, badminton and swimming", "Pet lover"];

  return (
    <div className="landing__page">
      {/* SECTION FOR MAIN CARD*/}
      <div className="main__card card">
        <div className="main__card__title">
          <Text variant="h5" fontWeight={600}>
            Khanh Dao
          </Text>
          <Text
            size="title"
            fontWeight={600}
            align={isMobile ? "left" : "right"}
          >
            <em>Software Engineer</em>
          </Text>
        </div>
        <div className="card__image">
          <img src="images/profile.png" />
        </div>
        <p style={{ paddingBottom: "48px" }}>
          <i>
            I am a JavaScript developer with 5 years of experience specializing
            in both front-end and back-end development. I have a strong
            background in building scalable web applications using modern
            frameworks like React, Node.js, and Express. My expertise includes
            designing responsive user interfaces, integrating RESTful APIs, and
            optimizing performance across platforms. I’m passionate about clean
            code, agile development, and delivering high-quality user
            experiences
          </i>
        </p>
      </div>

      <div className="details">
        <div className={combineClassNames("details", "__first-row")}>
          {/* SECTION FOR SKILLS*/}
          <div className="card">
            <Text variant="h5">Skills</Text>
            <div style={{ marginTop: isMobile ? "15px" : "28px" }}>
              {SKILLS.map((skill, index) => (
                <li key={index}>
                  <Text size="text-lg">{skill}</Text>
                </li>
              ))}
            </div>
          </div>

          {/* SECTION FOR HOBBIES*/}
          <div className="card">
            <Text variant="h5">Hobbies</Text>
            <div style={{ marginTop: isMobile ? "16px" : "28px" }}>
              {HOBBIES.map((hob, index) => (
                <li key={index}>
                  <Text size="text-lg">{hob}</Text>
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION FOR PAST PROJECTS*/}
        <div className="past__jobs">
          <Text variant="h5" className="past__jobs__title">
            Past projects
          </Text>
          <div className={combineClassNames("past__jobs", "__wrapper")}>
            <div className="past__jobs__job-details">
              <Text size="text-lg" fontWeight={600}>
                Portal for Restaurant Management
              </Text>
              <div style={{ paddingTop: "16px" }}>
                The built-in portal where the restaurant owner can manage their
                menu, campaign and promotions.
              </div>
              <div>
                Also showing the restaurant statistics and current orders at
                restaurant
              </div>
            </div>
            <div className="past__jobs__image__container">
              <img src="images/statics.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
