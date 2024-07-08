import Nav from "../components/Nav/Nav";
// import Footer from "../components/Footer/Footer";
import SectionIntro from "../components/Section_Intro/Section_intro";
import SectionProjects from "../components/Section_Projects/Section_projects";
import SectionSkills from "../components/Section_Skills/Section_skills";

const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <SectionIntro />
        <SectionProjects />
        <SectionSkills />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
