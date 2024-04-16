import SyntaxHighlighter from 'react-syntax-highlighter';

interface HiglighterProps {
  code: string;
  language?: string;
}

const Highlight = ({ code, language = 'javascript'} : HiglighterProps) => {
  return (
    <SyntaxHighlighter customStyle={{ fontSize: '18px' }}  language={language}>
      {code}
    </SyntaxHighlighter>
  );
};

export default Highlight