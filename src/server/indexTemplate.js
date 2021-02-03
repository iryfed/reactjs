export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Demo</title>
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
      window.__token__ = '${token}'
    </script>
  </head>
  <body>
    <div id="react_root">${content}</div>
  </body>
</html>
`;
