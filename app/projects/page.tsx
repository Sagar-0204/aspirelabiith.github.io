import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const currentProjects = [
  {
    title:
      "Design and Development of Autonomous Wheeled Humanoid Robot for Anubhava Mantapa",
    pi: "R Prasanth Kumar",
    duration: "Feb 2025 - Ongoing",
    agency: "Bharath Aap Technologies",
  },
  {
    title:
      "Fabrication and Maintenance of Autonomous Wheeled Humanoid Robot for Anubhava Mantapa",
    pi: "R Prasanth Kumar",
    duration: "Feb 2025 - Ongoing",
    agency: "Nurture and Nature Enterprises",
  },
];

const completedProjects = [
  {
    title:
      "Design and Development of Collaborative Payload Maneuvering with 04 Number of UAVs",
    pi: "R Prasanth Kumar",
    duration: "April 2021 - April 2025",
    agency: "Asymmetric Technologies, DYSL-AT, Hyderabad",
  },
  {
    title: "Design and Fabrication of Autonomous Passenger Drone",
    pi: "Vineeth Balasubramanian",
    coPi: "B Venkatesham",
    investigator: "R Prasanth Kumar",
    duration: "2019 - 2024",
    agency: "MEITY",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Current Projects</h1>
          <p className="text-muted-foreground">
            Ongoing research and development initiatives
          </p>
        </div>

        <div className="grid gap-4">
          {currentProjects.map((project, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="default">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm space-y-1">
                  <p>
                    <span className="font-medium">Principal Investigator:</span>{" "}
                    {project.pi}
                  </p>
                  <p>
                    <span className="font-medium">Duration:</span>{" "}
                    {project.duration}
                  </p>
                  <p>
                    <span className="font-medium">Agency:</span>{" "}
                    {project.agency}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Recently Completed Projects</h1>
          <p className="text-muted-foreground">
            Successfully delivered research projects
          </p>
        </div>

        <div className="grid gap-4">
          {completedProjects.map((project, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="secondary">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm space-y-1">
                  <p>
                    <span className="font-medium">Principal Investigator:</span>{" "}
                    {project.pi}
                  </p>
                  {project.coPi && (
                    <p>
                      <span className="font-medium">Co-PI:</span> {project.coPi}
                    </p>
                  )}
                  {project.investigator && (
                    <p>
                      <span className="font-medium">Investigator:</span>{" "}
                      {project.investigator}
                    </p>
                  )}
                  <p>
                    <span className="font-medium">Duration:</span>{" "}
                    {project.duration}
                  </p>
                  <p>
                    <span className="font-medium">Agency:</span>{" "}
                    {project.agency}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
