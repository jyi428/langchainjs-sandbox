import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { promises as fs } from "fs";

try {
  const text = await fs.readFile("text-info.txt", "utf8");
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    separators: ["\n\n", "\n", " ", ""],
    chunkOverlap: 50,
  });
  const output = await splitter.createDocuments([text]);
  console.log(output);
} catch (err) {
  console.log(err);
}
