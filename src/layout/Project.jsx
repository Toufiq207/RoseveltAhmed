import React from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'
import ProjectComponent from '../Component/ProjectComponent'
import ProjectOne from '../assets/projectone.jpg'
import  Projecttwo from '../assets/projecttwo.jpg'
import ProjectThree from '../assets/projectthree.jpg'
const project = [
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    catagory:"Facebook pageOne"
  },
 
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img:  Projecttwo,
    catagory:"Facebook pageTwo"
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    catagory:"Facebook pageThree"
  },
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    catagory:"Facebook pageOne"
  },
 
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img:  Projecttwo,
    catagory:"Facebook pageTwo"
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    catagory:"Facebook pageThree"
  },
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    catagory:"Facebook pageOne"
  },
 
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img:  Projecttwo,
    catagory:"Facebook pageTwo"
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    catagory:"Facebook pageThree"
  },
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    catagory:"Facebook pageOne"
  },
 
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img:  Projecttwo,
    catagory:"Facebook pageTwo"
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    catagory:"Facebook pageThree"
  },
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    catagory:"Facebook pageOne"
  },
 
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img:  Projecttwo,
    catagory:"Facebook pageTwo"
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    catagory:"Facebook pageThree"
  },
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    catagory:"Facebook pageOne"
  },
 
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img:  Projecttwo,
    catagory:"Facebook pageTwo"
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    catagory:"Facebook pageThree"
  },
  {
    id: 1,
    name: "Prime Ecom Network",
    link: "https://www.facebook.com/primeecomnetwork",
    img: ProjectOne,
    catagory:"Facebook pageOne"
  },
 
  {
    id: 2,
    name: "Brandora Digital",
    link: "https://www.facebook.com/profile.php?id=61593841647618",
    img:  Projecttwo,
    catagory:"Facebook pageTwo"
  },
  {
    id: 3,
    name: "Fastawa",
    link: "https://www.facebook.com/groups/981110811223567/user/100063613604932",
    img: ProjectThree,
    catagory:"Facebook pageThree"
  },
  
  
]
const Project = () => {
  return (
    <section className='my-10'>
        <Container>
            <Heading className='mb-10' text="Project"/>
<div  className=' flex justify-center flex-wrap gap-12'>
  {
  project.map(item=>(

      <ProjectComponent
       key={item.id}
    text={item.name}
    img={item.img}
    web={item.link}
    catagory={item.catagory}
      />
   
  ))
}
</div>
          
        </Container>
    </section>
  )
}

export default Project