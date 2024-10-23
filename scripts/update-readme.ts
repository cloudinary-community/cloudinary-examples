import { promises as fs } from "fs";
import path from "path";

interface TechMapping {
  [key: string]: string;
}

interface Example {
  tech: string;
  name: string;
  url: string;
}

const repoUrl =
  "https://github.com/cloudinary-community/cloudinary-examples/tree/main/examples/";

async function loadTechs(): Promise<TechMapping> {
  const techsData = await fs.readFile("techs.json", "utf-8");
  return JSON.parse(techsData);
}

async function getExamples(
  techs: TechMapping
): Promise<Record<string, Example[]>> {
  const examplesByTech: Record<string, Example[]> = {};

  const folders = await fs.readdir("examples");
  for (const folder of folders) {
    const configPath = path.join("examples", folder, "config.json");
    try {
      const configData = await fs.readFile(configPath, "utf-8");
      const config = JSON.parse(configData);

      // If tech exists in mapping, use mapped name, otherwise use "Other"
      const tech = techs[config.tech] || techs["other"];

      if (!examplesByTech[tech]) {
        examplesByTech[tech] = [];
      }

      examplesByTech[tech].push({
        tech,
        name: config.name,
        url: repoUrl + encodeURIComponent(folder),
      });
    } catch (error) {
      console.error(`Error reading ${configPath}:`, error);
    }
  }

  return examplesByTech;
}

async function updateReadme() {
  const techs = await loadTechs();
  const examplesByTech = await getExamples(techs);

  const techList = Object.keys(techs)
    .map(key => `- [${techs[key]}](#${key})`)
    .join("\n");

  let exampleSections = Object.keys(techs)
    .map(key => {
      const tech = techs[key];
      if (examplesByTech[tech] && examplesByTech[tech].length > 0) {
        return `### ${tech}\n\n${examplesByTech[tech]
          .map(example => `- [${example.name}](${example.url})`)
          .join("\n")}`;
      }
      return null;
    })
    .filter(Boolean)
    .join("\n\n");

  let readmeContent = await fs.readFile("README.md", "utf-8");

  readmeContent = readmeContent.replace(
    /<!-- EXAMPLES_START -->[\s\S]*?<!-- EXAMPLES_END -->/,
    `<!-- EXAMPLES_START -->
${techList}

## 🧰 Examples

${exampleSections}
<!-- EXAMPLES_END -->`
  );

  await fs.writeFile("README.md", readmeContent.trim(), "utf-8");
}

updateReadme()
  .then(() => console.log("README updated successfully."))
  .catch(error => console.error("Error updating README:", error));
