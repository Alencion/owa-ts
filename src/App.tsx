import React  from 'react';
import { parseOpenApi } from './openapi/parser';

interface Props {
  'openApiDocsUrl': string
}

function App({openApiDocsUrl}: Props) {
  parseOpenApi(openApiDocsUrl).then(document => {
    console.log(document)
    return document
  })


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
