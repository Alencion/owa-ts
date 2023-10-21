import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App openApiDocsUrl='https://redocly.github.io/redoc/openapi.yaml'/>);

});
