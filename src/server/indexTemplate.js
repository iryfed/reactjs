export const indexTemplate = (content) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Demo</title>
    <script src="/static/client.js" type="application/javascript"></script>
  </head>
  <body>
    <div id="react_root">${content}</div>
  </body>
</html>
`;
