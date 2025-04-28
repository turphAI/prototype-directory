import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import ProjectRow from "@/components/ProjectRow";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Prototype Directory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Frameworks</CardTitle>
            <CardDescription>High level structures and experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ProjectRow 
              projectName="Response: Basic wireframe" 
              projectDescription="What are the base parts of a response?"
              buttonText="View"
              projectUrl="https://response-framework.vercel.app/"
            />
            <ProjectRow 
              projectName="AI: Floating container" 
              projectDescription="When the display is above the page"
              buttonText="View"
              projectUrl="https://floating-chi.vercel.app/"
            />
            <ProjectRow 
              projectName="AI: Embedded container" 
              projectDescription="When the display is imbedded in the page"
              buttonText="View"
              projectUrl=""
            />
            <ProjectRow 
              projectName="AI: Immersive Experience" 
              projectDescription="When the display is a full conversation"
              buttonText="View"
              projectUrl=""
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Search Experience</CardTitle>
            <CardDescription>CDE: Conversational Discovery Experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ProjectRow 
              projectName="Search V1" 
              projectDescription="Initial search bar and results"
              buttonText="View"
              projectUrl="https://ui-shadcn-three.vercel.app/"              
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>fBot Experience</CardTitle>
            <CardDescription>Chatbot interaction prototype.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ProjectRow 
              projectName="fBot Chat UI" 
              projectDescription="Basic chat interface"
              buttonText="View"
            />
             <ProjectRow 
              projectName="fBot Advanced" 
              projectDescription="Chat with context memory"
              buttonText="View"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Responses</CardTitle>
            <CardDescription>Prototypes related to response generation/display.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ProjectRow 
              projectName="overall structure" 
              projectDescription="Layout and flow of responses"
              buttonText="View"
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
