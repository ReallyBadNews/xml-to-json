import * as fs from "fs/promises";
import * as xml2js from "xml2js";

const inputPath = process.argv[2];

async function parseXmlToJson(
  xmlFilePath: string,
  jsonFilePath: string
): Promise<void> {
  try {
    const xml = await fs.readFile(xmlFilePath, "utf8");
    const parser = new xml2js.Parser({ explicitArray: false });

    parser.parseString(xml, async (err, result) => {
      if (err) throw err;

      const json = JSON.stringify(result, null, 2); // Pretty print JSON
      await fs.writeFile(jsonFilePath, json);
      console.log(`JSON saved to ${jsonFilePath}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

parseXmlToJson(inputPath, "./dist/output.json");
