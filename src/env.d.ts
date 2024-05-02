interface ImportMetaEnv {
    readonly POLYGON_API_KEY: string;
    readonly OPENAI_API_KEY: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }