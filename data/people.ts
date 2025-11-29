import RPKumarImage from "@/public/people/Prasanth_Kumar_R.png";
import { Faculty, Student } from "../lib/types";

const faculty: Faculty[] = [
  {
    name: "R Prasanth Kumar",
    role: "Head of the Lab",
    positions: [
      "Professor, Department of Mechaincal & Aerospace Engineering",
      "Affiliate Professor, Department of Artificial Intelligence",
    ],
    email: "ni.ca.htii.eam [ta] ramukpr",
    web: "https://www.iith.ac.in/~rpkumar",
    image: RPKumarImage,
  },
];

const phdStudents: Student[] = [
  { name: "Krishnendu Roy", image: undefined },
  { name: "Aashish Sahu", image: undefined },
  { name: "B V Shiva Reddy", image: undefined },
];

const mastersStudents: Student[] = [
  { name: "S Rami Reddy", program: "Mechanics and Design", image: undefined },
  {
    name: "S Chinnikrishna Yadav",
    program: "Robotics and Intelligent Systems",
    image: undefined,
  },
  {
    name: "Arkaprabha Sinha Roy",
    program: "Artificial Intelligence",
    image: undefined,
  },
  {
    name: "B Vijaya Sathwik",
    program: "Mechanics and Design",
    image: undefined,
  },
  { name: "Saurabh Shukla", program: "Mechanics and Design", image: undefined },
  {
    name: "VVS Viswa Kiran",
    program: "Artificial Intelligence",
    image: undefined,
  },
];

const undergradStudents: Student[] = [
  { name: "Shriram Hari", program: "Mechanical Engineering", image: undefined },
];

export { faculty, phdStudents, mastersStudents, undergradStudents };
