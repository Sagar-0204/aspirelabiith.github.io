import { createMetadata } from "@/lib/metadata";
import Image from "next/image";
import UAVImage from "@/public/uav.jpg";
import HumanoidImage from "@/public/humanoid.png";
import CBlockImage from "@/public/cblock.png";
import { Logo } from "@/components/logo";

export const metadata = createMetadata({
  title: "ASPIRE Lab - Autonomous Systems Research at IIT Hyderabad",
  description:
    "ASPIRE Lab at IIT Hyderabad advances autonomous robotic systems with perception, learning, and intelligent decision-making. Research includes aerial drones, quadruped robots, humanoid robots, and underwater robots using deep reinforcement learning and robot vision.",
  keywords: [
    "robotics research",
    "autonomous systems",
    "deep reinforcement learning",
    "robot vision",
    "aerial drones",
    "quadruped robots",
    "humanoid robots",
    "underwater robots",
    "AUV",
    "human-robot interaction",
    "control theory",
  ],
});

export default function Home() {
  return (
    <>
      {/* Split Hero - Image Left, Text Right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-8 lg:gap-16 p-8 lg:p-16">
        <div className="relative min-h-[600px] lg:min-h-screen overflow-hidden rounded-3xl order-2 lg:order-1">
          <Image
            src={UAVImage}
            alt="Aerial Drones and UAV Research"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex items-center justify-center px-8 md:px-16 py-16 lg:py-32 order-1 lg:order-2">
          <div className="space-y-12 max-w-xl text-center">
            <Logo />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              ASPIRE Lab
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed bg-background">
              Advancing Autonomous Robotic Systems with Perception, Learning,
              and Intelligent Decision-Making
            </p>
          </div>
        </div>
      </section>

      {/* Split Section - First para left, UAV Right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-8 lg:gap-16 p-8 lg:p-16">
        <div className="flex items-center justify-center bg-background px-8 md:px-16 py-16 lg:py-32">
          <div className="space-y-6 max-w-xl text-lg md:text-xl leading-relaxed">
            <p>
              <strong>ASPIRE Lab</strong> at IITH focuses on advancing{" "}
              <strong>autonomous robotic systems</strong> endowed with
              perception, learning, and intelligent decision-making in complex
              environments. Our research covers a broad spectrum of robotic
              platforms, including but not limited to, swarms of aerial drones,
              quadruped robots, biped / humanoid robots, human-robot
              interaction, wheeled mobile robots, and AUVs / underwater robots.
            </p>
          </div>
        </div>
        <div className="relative min-h-[600px] lg:min-h-screen overflow-hidden rounded-3xl">
          <Image
            src={HumanoidImage}
            alt="Humanoid Robot Research"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Split Section - Humanoid Left, Second para right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-8 lg:gap-16 p-8 lg:p-16">
        <div className="relative min-h-[600px] lg:min-h-screen overflow-hidden rounded-3xl">
          <Image
            src={CBlockImage}
            alt="C-Block - Department Building"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex items-center justify-center bg-background px-8 md:px-16 py-16 lg:py-32">
          <div className="space-y-6 max-w-xl text-lg md:text-xl leading-relaxed">
            <p>
              Our work combines principles of conventional{" "}
              <strong>control</strong> theory with learning-based approaches
              such as <strong>deep reinforcement learning</strong> and{" "}
              <strong>robot vision</strong> to develop systems capable of
              adaptive, data-driven behavior. Through these efforts,{" "}
              <strong>ASPIRE</strong> aims to integrate model-based
              understanding with data-driven intelligence to develop reliable
              and efficient autonomous systems for <strong>exploration</strong>,
              interaction, and real-world operation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
