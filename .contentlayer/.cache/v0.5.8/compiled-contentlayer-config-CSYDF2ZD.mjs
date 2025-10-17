// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the document",
      required: false
    },
    publishedAt: {
      type: "date",
      description: "The date the document was published",
      required: false
    },
    updatedAt: {
      type: "date",
      description: "The date the document was last updated",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CSYDF2ZD.mjs.map
