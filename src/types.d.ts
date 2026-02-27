declare const React: any;
declare const ReactDOM: any;

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'express' {
  const express: any;
  export default express;
}

declare const process: {
  cwd: () => string;
  env: Record<string, string | undefined>;
};
