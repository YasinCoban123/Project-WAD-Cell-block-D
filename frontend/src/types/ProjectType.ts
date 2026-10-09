export interface ProjectType {
  id: number;
  name: string;
  description: string;
  tools: string[];
  webAddress: string;
  timePerTool: number;
  status: 'active' | 'published';
}