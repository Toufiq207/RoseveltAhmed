import React from "react";
import Container from "../Component/Container";
import Heading from "../Component/Heading";
import ProjectComponent from "../Component/ProjectComponent";

import ProjectOne from "../assets/projectone.jpg";
import ProjectTwo from "../assets/projecttwo.jpg";
import ProjectThree from "../assets/projectthree.jpg";

const projects = [
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    category: "Facebook Page",
    alt: "Prime Ecom Network Facebook page project",
  },
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img: ProjectTwo,
    category: "Facebook Page",
    alt: "Brandora Digital Facebook page project",
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    category: "Facebook Group",
    alt: "Fastawa Facebook group project",
  },
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    category: "Facebook Page",
    alt: "Prime Ecom Network Facebook page project",
  },
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img: ProjectTwo,
    category: "Facebook Page",
    alt: "Brandora Digital Facebook page project",
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    category: "Facebook Group",
    alt: "Fastawa Facebook group project",
  },
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    category: "Facebook Page",
    alt: "Prime Ecom Network Facebook page project",
  },
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img: ProjectTwo,
    category: "Facebook Page",
    alt: "Brandora Digital Facebook page project",
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    category: "Facebook Group",
    alt: "Fastawa Facebook group project",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      aria-labelledby="project-heading"
      className="my-10"
    >
      <Container>
        <Heading
          id="project-heading"
          className="mb-10"
          text="My Projects"
        />

        <p className="sr-only">
          Explore my digital marketing, social media marketing,
          Facebook page, and Facebook group projects.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {projects.map((item) => (
            <article key={item.id}>
              <ProjectComponent
                text={item.name}
                img={item.img}
                web={item.link}
                category={item.category}
                alt={item.alt}
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Project;