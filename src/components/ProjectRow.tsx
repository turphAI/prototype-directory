import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectRowProps {
  projectName: string;
  projectDescription: string;
  buttonText: string;
  projectUrl?: string;
  onButtonClick?: () => void;
}

export default function ProjectRow({
  projectName,
  projectDescription,
  buttonText,
  projectUrl,
  onButtonClick
}: ProjectRowProps) {
  return (
    <div className="flex items-center justify-between space-x-4 py-2">
      <div className="flex-grow">
        <p className="text-sm font-medium leading-none">{projectName}</p>
        <p className="text-sm text-muted-foreground">{projectDescription}</p>
      </div>
      {projectUrl ? (
        <Link 
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          {buttonText}
        </Link>
      ) : (
        <Button variant="outline" size="sm" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}