const templates = {
  blog: `# Blog Post Title\n\n## Introduction\n\nYour introduction here...\n\n## Main Content\n\nYour main content here...\n\n## Conclusion\n\nYour conclusion here...`,
  readme: `# Project Name\n\n## Description\n\n## Installation\n\n## Usage\n\n## Contributing\n\n## License`,
  meeting: `# Meeting Notes\n\n## Date: [Date]\n\n## Attendees\n\n## Agenda\n\n## Action Items\n\n## Next Steps`,
};

interface TemplateSelectorProps {
  setMarkdown: (value: string) => void;
}

const TemplateSelector: React.FC<
  TemplateSelectorProps
> = ({ setMarkdown }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="template-select"
        className="sr-only"
      >
        Select a template
      </label>
      <select
        id="template-select"
        onChange={(e) =>
          setMarkdown(
            templates[
              e.target
                .value as keyof typeof templates
            ]
          )
        }
        className="px-3 py-2 border rounded"
      >
        <option value="">Select Template</option>
        <option value="blog">Blog Post</option>
        <option value="readme">README</option>
        <option value="meeting">
          Meeting Notes
        </option>
      </select>
    </div>
  );
};

export default TemplateSelector;
