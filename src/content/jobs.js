import React from "react"

export default {
  boucher: {
    title: "Research Scientist",
    location: "Boucher Laboratory",
    subject: "Bioinformatics Lab, Dept. of CISE, University of Florida",
    start: "Aug. 2017",
    end: "Aug. 2018",
    duties: [
      "Write programs to produce simulated metagenomic data for various tools we were developing",
      "Work in the high-performance computing remote cluster environment, and develop scripts to facilitate its use for other lab members",
      "Seek out and test competing SNP detection tools, including development of protocols and testing methodology for all of the programs",
    ],
    techs: ["Python", "Bash"],
    pub: `Bahar Alipanahi, Martin D Muggli, Musa Jundi, Noelle R Noyes, Christina Boucher, Metagenome SNP Calling via Read Colored de Bruijn Graphs, Bioinformatics, , btaa081, `,
    publink: "https://doi.org/10.1093/bioinformatics/btaa081",
  },
  freelance: {
    title: "Developer",
    location: "Freelance",
    subject: "Remote",
    start: "2014",
    end: "Current",
    duties: [
      "Developed static sites and tools for small businesses, sometimes using a headless CMS to provide security and convenience.",
      "Led a small remote team to build a static site and custom dynamic dashboard for a logistics company",
      "Provide tutoring services for maths up to linear algebra and introductory computer science",
    ],
    techs: ["React/Redux", "Node", "Mongo", "SCSS"],
  },
  kumar: {
    title: "Research Assistant",
    location: "Kumar Laboratory",
    subject: "Bioengineering, College of Eng., UC Berkeley",
    start: "Jun. 2014",
    end: "Jan. 2015",
    duties: [
      "Produced fluorescent and non-fluorescent microscopy images, as well as the editing and analysis of those images",
      "Created a protocol for measuring the spread of tumor matter throughout each brain sample",
      "Wrote the relevant methodology sections for the publication of the project",
    ],
    techs: ["ImageJ", "Python", "Photoshop"],
    pub: `Wong, S. Y., Ulrich, T. A., Deleyrolle, L. P., MacKay, J. L., Lin, J. M., Martuscello, R. T., Jundi, M. A., Reynolds, B. A., & Kumar, S. (2015). Constitutive activation of myosin-dependent contractility sensitizes glioma tumor-initiating cells to mechanical inputs and reduces tissue invasion. Cancer research, 75(6), 1113–1122.`,
    publink: "https://doi.org/10.1158/0008-5472.CAN-13-3426",
  },
  reynolds: {
    title: "Research Assistant",
    location: "Reynolds Laboratory",
    subject:
      "Neural Stem Cell Lab, Dept. of Neurosurgery, UF College of Medicine",
    start: "Feb. 2013",
    end: "Oct. 2014",
    duties: [
      "Handled the post-harvest preparation, sampling, imaging, and chemical analysis of delicate brain and tumor samples",
      "Refined the protocols for staining slide-mounted samples and preparing samples for flow cytometry",
      "Trained several research assistants on the protocols and tools mentioned above",
    ],
    techs: ["ImageJ", "Flow Cytometry", "Microscopy"],
    pub: `Martuscello, et al. (2016). A supplemented high-fat low-carbohydrate diet for the treatment of glioblastoma. Clinical Cancer Research, 22(10), 2482–2495.`,
    publink: "https://doi.org/10.1158/1078-0432.CCR-15-0916",
  },
  ta: {
    title: "Teaching Assistant",
    location: "COP2271 (Programming for Engineers)",
    subject: "Dept. of Engineering Education,  UF College of Engineering",
    start: "Aug. 2013",
    end: "July. 2014",
    duties: [
      "Held office hours for students who needed in-person help with study, assignments, preparing for exams, etc.",
      "Assisted in posting and updating grades, as well as grading exams and assignments",
      "Answered questions and addressed problems raised by students on the online class forum",
      "Implemented unit tests for grading assignments and projects",
    ],
    techs: ["C++", "Check (Testing Library)"],
    syllabus:
      "https://www.eng.ufl.edu/eed/wp-content/uploads/sites/115/2017/05/COP2271_C_Spring17.pdf",
  },
}
