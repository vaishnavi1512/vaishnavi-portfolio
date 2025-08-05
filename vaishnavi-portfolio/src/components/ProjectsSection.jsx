import { ArrowRight, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Geronimo – Translation & Localization Management System",
    description:
      "Integrated Smartling TMS with Node.js services to automate translation ingestion for 30+ languages. Managed region-specific translations using PostgreSQL with caching. Designed GraphQL APIs for dynamic string fetching based on locale and app context, improving localization delivery by 40%.",
    tags: ["Node.js", "PostgreSQL", "GraphQL", "Smartling API"],
  },
  {
    id: 2,
    title: "CRM Ecosystem Rebuild & Marketing Automation",
    description:
      "Led a migration from legacy SFMC systems to a modern AWS-based serverless architecture. Developed Lambda functions interacting with Optimove for personalized campaigns. Built an in-house event ingestion pipeline using Kafka, SQS, and ECS. Synced data between RDS and Snowflake for analytics.",
    tags: [
      "AWS Lambda",
      "API Gateway",
      "Segment",
      "RDS",
      "Snowflake",
      "Optimove",
      "Kinesis",
      "Kafka",
      "ECS",
      "SQS",
    ],
  },
  {
    id: 3,
    title: "Real-Time Notification Engine for Sports CRM",
    description:
      "Architected a real-time notification system to push alerts based on sports events. Used ECS tasks and Lambda for stream processing. Enriched data in MongoDB and streamed events via Kafka to Apache NiFi, which triggered Airship notifications based on user preferences.",
    tags: ["ECS", "Lambda", "Kafka", "MongoDB", "Apache NiFi", "Airship"],
  },
  {
    id: 4,
    title: "Live Streaming Ad Insertion Platform",
    description:
      "Built a live video delivery solution using OBS Studio, S3, and AWS MediaConvert. Stream segments were stored and used to insert dynamic ads with minimal latency. Ensured seamless playback and multi-resolution encoding for adaptive bitrate streaming.",
    tags: ["JavaScript", "OBS Studio", "AWS S3", "AWS MediaConvert"],
  },
  {
    id: 5,
    title: "A/B Testing Platform for Frontend Campaigns",
    description:
      "Developed a frontend framework for A/B testing, enabling marketers to create control and variant groups. Included dynamic UI experimentation and campaign performance tracking via custom analytics.",
    tags: ["JavaScript", "TypeScript", "HTML5", "CSS"],
  },
  {
    id: 6,
    title: "Career Path Application (MEAN Stack Project)",
    description:
      "Designed a career management platform using the MEAN stack. Built REST APIs with Node.js and Express, and Angular components for dynamic UIs. Stored user journeys and career data in MongoDB.",
    tags: ["MongoDB", "Express.js", "Angular", "Node.js", "CSS3"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-24 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          My
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A collection of production-grade, scalable, and high-impact solutions
          developed with a blend of modern technologies and creative
          problem-solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative mb-4">
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center justify-center w-6 h-6 bg-primary/10 text-primary rounded-full shadow-sm">
                    <Code size={14} />
                  </div>
                  <h3 className="text-base font-semibold tracking-wide text-primary group-hover:underline decoration-dotted underline-offset-4 transition-all">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary text-xs px-2 py-1 rounded-full text-secondary-foreground border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            target="_blank"
            href="https://github.com/vaishnavi1512"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
