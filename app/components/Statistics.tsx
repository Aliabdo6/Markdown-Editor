interface StatisticsProps {
  markdown: string;
}

const Statistics: React.FC<StatisticsProps> = ({
  markdown,
}) => {
  const wordCount = markdown
    .trim()
    .split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words/minute

  return (
    <div className="flex gap-6 text-sm text-gray-600">
      <div>Characters: {markdown.length}</div>
      <div>Words: {wordCount}</div>
      <div>Reading time: {readingTime} min</div>
    </div>
  );
};

export default Statistics;
