import { Text } from "@/components/common";
import { combineClassNames } from "@/utils/common";
import "./LandingPage.scss";

const LandingPage = () => {
  const SKILLS = [
    "Javascript / Typescript",
    "ReactJS / NextJS",
    "MUI, Antd, Chakra, Redux, redux-toolkit",
    "Testing / Selenium / Appium",
  ];

  const HOBBIES = ["Gaming", "Basketball, badminton and swimming", "Pet lover"];

  return (
    <div className="landing-page">
      {/* SECTION FOR MAIN CARD*/}
      <div className="main card">
        <Text variant="h5" fontWeight={600}>
          Khanh Dao
        </Text>
        <Text size="title" fontWeight={600}>
          Software Engineer
        </Text>
        <div className="card__image">
          <img src="images/profile.png" />
        </div>
        <p>
          I am a JavaScript developer with 5 years of experience specializing in
          both front-end and back-end development. I have a strong background in
          building scalable web applications using modern frameworks like React,
          Node.js, and Express. My expertise includes designing responsive user
          interfaces, integrating RESTful APIs, and optimizing performance
          across platforms. I’m passionate about clean code, agile development,
          and delivering high-quality user experiences
        </p>
      </div>

      <div className="details">
        <div className={combineClassNames("details", "__first-row")}>
          {/* SECTION FOR SKILLS*/}
          <div className="card">
            <Text variant="h5">Skills</Text>
            <div>
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
            <div>
              {HOBBIES.map((hob, index) => (
                <li key={index}>
                  <Text size="text-lg">{hob}</Text>
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION FOR PAST PROJECTS*/}
        <div className="past-jobs">
          <div className="card ">
            <Text variant="h5">Past projects</Text>
            <div className={combineClassNames("past-jobs", "__wrapper")}>
              <div className={combineClassNames("past-jobs", "__job-details")}>
                <Text size="text-lg" fontWeight={600}>
                  Portal for Restaurant Management
                </Text>
                <span>
                  The built-in portal where the restaurant owner can manage
                  their menu, campaign and promotions.
                </span>
                <span>
                  Also showing the restaurant statistics and current orders at
                  restaurant
                </span>
              </div>
              <div className={combineClassNames("past-jobs", "__images")}>
                <img src="images/statics.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
