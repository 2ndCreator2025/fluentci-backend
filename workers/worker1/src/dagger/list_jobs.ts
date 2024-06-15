import { brightGreen, stringifyTree } from "../../deps.js";
import { runnableJobs, jobDescriptions, Job } from "./jobs.js";

const tree = {
  name: brightGreen("cloudflare_pipeline"),
  children: (Object.keys(runnableJobs) as Job[]).map((job) => ({
    name: jobDescriptions[job]
      ? `${brightGreen(job)} - ${jobDescriptions[job]}`
      : brightGreen(job),
    children: [],
  })),
};

console.log(
  stringifyTree(
    tree,
    (t) => t.name,
    (t) => t.children
  )
);
