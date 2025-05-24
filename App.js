
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const mockStudents = [
  {
    id: 1,
    name: "Jane Doe",
    year: "2nd Year",
    department: "Computer Science",
    interests: ["AI", "Web Dev"],
    projects: ["PeerConnect"],
  },
  {
    id: 2,
    name: "John Smith",
    year: "3rd Year",
    department: "Electrical",
    interests: ["IoT", "AI"],
    projects: ["Smart Campus"],
  },
];

export default function PeerConnectApp() {
  const [profile, setProfile] = useState(null);
  const [connections, setConnections] = useState([]);
  const [form, setForm] = useState({
    name: "",
    collegeId: "",
    year: "",
    department: "",
    skills: "",
    projects: "",
  });

  const handleProfileSubmit = () => {
    setProfile({ ...form });
    toast.success("Profile created");
  };

  const handleConnect = (student) => {
    toast("Connection request sent to " + student.name);
    setConnections([...connections, student]);
  };

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">PeerConnect</h1>
      <Tabs defaultValue="profile">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">My Profile</TabsTrigger>
          <TabsTrigger value="browse">Browse Students</TabsTrigger>
          <TabsTrigger value="connections">My Connections</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          {profile ? (
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{profile.name}</h2>
                <p>ID: {profile.collegeId}</p>
                <p>Year: {profile.year}</p>
                <p>Department: {profile.department}</p>
                <p>Skills: {profile.skills}</p>
                <p>Projects: {profile.projects}</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              <Input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input placeholder="College ID" onChange={(e) => setForm({ ...form, collegeId: e.target.value })} />
              <Input placeholder="Year" onChange={(e) => setForm({ ...form, year: e.target.value })} />
              <Input placeholder="Department" onChange={(e) => setForm({ ...form, department: e.target.value })} />
              <Textarea placeholder="Skills/Interests" onChange={(e) => setForm({ ...form, skills: e.target.value })} />
              <Textarea placeholder="Project Areas" onChange={(e) => setForm({ ...form, projects: e.target.value })} />
              <Button onClick={handleProfileSubmit}>Create Profile</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="browse">
          <div className="grid md:grid-cols-2 gap-4">
            {mockStudents.map((student) => (
              <Card key={student.id}>
                <CardContent className="p-4">
                  <h2 className="text-lg font-bold">{student.name}</h2>
                  <p>{student.year} - {student.department}</p>
                  <p>Interests: {student.interests.join(", ")}</p>
                  <p>Projects: {student.projects.join(", ")}</p>
                  <Button onClick={() => handleConnect(student)} className="mt-2">Connect</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="connections">
          <div className="grid md:grid-cols-2 gap-4">
            {connections.map((student) => (
              <Card key={student.id}>
                <CardContent className="p-4">
                  <h2 className="text-lg font-bold">{student.name}</h2>
                  <p>{student.year} - {student.department}</p>
                  <p>Interests: {student.interests.join(", ")}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
