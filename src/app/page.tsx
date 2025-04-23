import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import ProjectRow from "@/components/ProjectRow";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Prototype Directory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Framework</CardTitle>
            <CardDescription>LeftNav & UtillityNav</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ProjectRow 
              projectName="Main Framework" 
              projectDescription="Core layout and utilities"
              buttonText="View"
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
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>aBot Experience</CardTitle>
            <CardDescription>Chatbot interaction prototype.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ProjectRow 
              projectName="aBot Chat UI" 
              projectDescription="Basic chat interface"
              buttonText="View"
            />
             <ProjectRow 
              projectName="aBot Advanced" 
              projectDescription="Chat with context memory"
              buttonText="View"
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
