import React, { PropTypes } from 'react';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light';
import js from 'highlight.js/lib/languages/javascript';
import syntaxTheme from 'react-syntax-highlighter/dist/styles/vs';

import './TrendCode.css';

registerLanguage('javascript', js);

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  params: PropTypes.shape({
    gradient: PropTypes.arrayOf(PropTypes.string).isRequired,
    radius: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    strokeLinecap: PropTypes.string.isRequired,
  }).isRequired,
};

const TrendCode = ({ data, params }) => {
  const codeString = `
import React from 'react';
import Trend from 'react-trend';

const YourComponent = () => (
  <Trend
    smooth
    autoDraw
    autoDrawDuration={3000}
    autoDrawEasing="ease-out"
    data={[${data}]}
    gradient={['${params.gradient.join("', '")}']}
    radius={${params.radius}}
    strokeWidth={${params.strokeWidth}}
    strokeLinecap={'${params.strokeLinecap}'}
  />
);
  `;

  return (
    <div className="trendCode">
      <SyntaxHighlighter language="js" style={syntaxTheme}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

TrendCode.propTypes = propTypes;

export default TrendCode;
