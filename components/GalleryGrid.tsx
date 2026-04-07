import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const placeholderProjects = [
  { id: 1, title: "Residential Land Clearing", category: "Land Clearing" },
  { id: 2, title: "Commercial Site Prep", category: "Site Prep" },
  { id: 3, title: "Forestry Mulching Project", category: "Forestry Mulching" },
  { id: 4, title: "Horse Arena Build", category: "Horse Arena" },
  { id: 5, title: "Precision Grading", category: "Land Grading" },
  { id: 6, title: "Bush Hogging Cleanup", category: "Land Clearing" },
  { id: 7, title: "Driveway Installation", category: "Site Prep" },
  { id: 8, title: "Underbrush Clearing", category: "Forestry Mulching" },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {placeholderProjects.map((project) => (
        <Card
          key={project.id}
          className="overflow-hidden group hover:shadow-lg transition-shadow"
        >
          <div className="aspect-[4/3] bg-muted relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
              <ImageIcon className="h-10 w-10 mb-2 opacity-50" />
              <p className="text-xs opacity-50">Before / After</p>
            </div>
          </div>
          <CardContent className="p-4">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
              {project.category}
            </p>
            <h3 className="font-semibold text-sm">{project.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
