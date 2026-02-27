import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? '4173');

app.use('/dist', express.static(`${process.cwd()}/dist`));
app.use('/src', express.static(`${process.cwd()}/src`));

app.get('/api/health', (_req: unknown, res: { json: (data: unknown) => void }) => {
  res.json({ ok: true, service: 'airi-react-express' });
});

app.get('*', (_req: unknown, res: { sendFile: (path: string) => void }) => {
  res.sendFile(`${process.cwd()}/index.html`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`AIRI app running on http://localhost:${port}`);
});
