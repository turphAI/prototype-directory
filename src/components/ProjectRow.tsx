import { Button } from "@/components/ui/button";

interface ProjectRowProps {
  projectName: string;
  projectDescription: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function ProjectRow({
  projectName,
  projectDescription,
  buttonText,
  onButtonClick
}: ProjectRowProps) {
  return (
    <div className="flex items-center justify-between space-x-4 py-2">
      <div className="flex-grow">
        <p className="text-sm font-medium leading-none">{projectName}</p>
        <p className="text-sm text-muted-foreground">{projectDescription}</p>
      </div>
      <Button variant="outline" size="sm" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
}