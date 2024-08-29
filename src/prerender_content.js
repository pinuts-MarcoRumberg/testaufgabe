import path from "path";
import fse from "fs-extra";
import "./Objs";
import "./Widgets";
import { configure } from "./config";
import { prerenderObjs } from "./prerenderContent/prerenderObjs";
import { prerenderSitemap } from "./prerenderContent/prerenderSitemap";
import { extendRedirects } from "./prerenderContent/extendRedirects";
import { reportError } from "./prerenderContent/reportError";

configure({ priority: "background" });

const PRERENDER_OBJ_CLASSES_BLACKLIST = [
  "Download",
  "Image",
  "Redirect",
  "Video",
];

const SITEMAP_OBJ_CLASSES_WHITELIST = [
  "Author",
  "Blog",
  "BlogPost",
  "Event",
  "Homepage",
  "Job",
  "LandingPage",
  "Page",
];

const SOURCE_DIR = "build";
const TARGET_DIR = "buildPrerendered";

async function prerenderContent() {
  console.time("[prerenderContent]");

  if (!process.env.SCRIVITO_ORIGIN) {
    throw new Error(
      'The environment variable "SCRIVITO_ORIGIN" is not defined.' +
        " Prerendered pages need a configured origin or base URL."
    );
  }

  const assetManifest = await fse.readJson(
    path.join(SOURCE_DIR, "asset-manifest.json")
  );

  console.log(`  📦 [prerenderContent] Removing ${TARGET_DIR}/`);
  await fse.remove(TARGET_DIR);

  console.log(
    `  📦 [prerenderContent] Copying ${SOURCE_DIR}/ to ${TARGET_DIR}/`
  );
  await fse.copy(SOURCE_DIR, TARGET_DIR);

  await fse.remove(path.join(TARGET_DIR, "asset-manifest.json"));

  await prerenderSitemap(TARGET_DIR, SITEMAP_OBJ_CLASSES_WHITELIST);

  const objFiles = await prerenderObjs(
    TARGET_DIR,
    PRERENDER_OBJ_CLASSES_BLACKLIST,
    assetManifest
  );

  await extendRedirects(TARGET_DIR, objFiles, SOURCE_DIR);

  console.log(
    `  📦 [prerenderContent] Added ${objFiles.length} files to ${TARGET_DIR}.`
  );

  console.timeEnd("[prerenderContent]");
}

prerenderContent().catch((e) => {
  reportError("An error occurred!", e);
  process.exitCode = 1;
});
