import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";

const faculty = [
  {
    name: "R Prasanth Kumar",
    role: "Head of the Lab",
    positions: [
      "Professor, Department of Mechaincal & Aerospace Engineering",
      "Affiliate Professor, Department of Artificial Intelligence",
    ],
    email: "ni.ca.htii.eam [ta] ramukpr",
    web: "https://www.iith.ac.in/~rpkumar",
  },
];

const phdStudents = [
  { name: "Krishnendu Roy" },
  { name: "Aashish Sahu" },
  { name: "B V Shiva Reddy" },
];

const mastersStudents = [
  { name: "S Rami Reddy", program: "Mechanics and Design" },
  { name: "Chinni Krishna Yadav", program: "Robotics and Intelligent Systems" },
  { name: "Arkaprabha Sinha Roy", program: "Artificial Intelligence" },
  { name: "B Vijaya Sathwik", program: "Mechanics and Design" },
  { name: "Saurabh Shukla", program: "Mechanics and Design" },
  { name: "VVS Viswa Kiran", program: "Artifical Intelligence" },
];

const undergradStudents = [
  { name: "Shriram Hari", program: "Mechanical Engineering" },
];

export default function PeoplePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Group Members</h1>
        <p className="text-muted-foreground">
          Meet our research team at ASPIRE Lab
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Faculty</h2>
        <div className="grid gap-4">
          {faculty.map((person) => (
            <Card key={person.name}>
              <CardHeader>
                <CardTitle>{person.name}</CardTitle>
                <CardDescription>{person.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {person.positions.map((position, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {position}
                    </p>
                  ))}
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Email:</span>
                    <span
                      className="font-mono text-xs"
                      style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
                    >
                      {person.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={person.web}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">PhD Students</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {phdStudents.map((student) => (
            <Card key={student.name}>
              <CardHeader>
                <CardTitle className="text-lg">{student.name}</CardTitle>
                <Badge variant="secondary">PhD Student</Badge>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Masters Students</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mastersStudents.map((student) => (
            <Card key={student.name}>
              <CardHeader>
                <CardTitle className="text-lg">{student.name}</CardTitle>
                <CardDescription>
                  MTech Student ({student.program})
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Undergraduate Research Students
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {undergradStudents.map((student) => (
            <Card key={student.name}>
              <CardHeader>
                <CardTitle className="text-lg">{student.name}</CardTitle>
                <CardDescription>
                  BTech Student ({student.program})
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
