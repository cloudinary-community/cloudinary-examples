import fs from "node:fs/promises";
import path from "node:path";

type TechMapping = Record<string, string>;
type ExampleMapping = Record<string, Example[]>;
type ExampleConfig = Omit<Example, "url">;
interface Example {
  name: string;
  tech: string;
  url: string;
}

const repoUrl =
  "https://github.com/cloudinary-community/cloudinary-examples/tree/main/examples/";

async function loadTechs(): Promise<TechMapping> {
  const techsData: TechMapping = await Bun.file("techs.json").json();
  return techsData;
}

async function getExamples(techs: TechMapping): Promise<ExampleMapping> {
  const examplesByTech: ExampleMapping = {};

  const folders = await fs.readdir("examples");
  for (const folder of folders) {
    const configPath = path.join("examples", folder, "config.json");
    try {
      const config: ExampleConfig = await Bun.file(configPath).json();

      if (!techs[config.tech]) {
        const errorMsg = `Tech '${config.tech}' not found in techs.json. Please add it in the JSON format: "yourtech": "YourTech"`;
        await Bun.write("error.log", errorMsg);
        throw new Error(errorMsg);
      }

      const tech = techs[config.tech];

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
      throw error;
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

  const exampleSections = Object.keys(techs)
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

  await Bun.write("README.md", readmeContent.trim());
}

updateReadme()
  .then(() => console.log("README updated successfully."))
  .catch(error => {
    console.error("Error updating README:", error);
    process.exit(1);
  });
