import SeekerForm from "../../components/auth/SeekerForm";
import EmployerForm from "../../components/auth/EmployerForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-svh">
      <Tabs defaultValue="seeker" className="w-full max-w-sm p-4 ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="seeker">Seeker</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
        </TabsList>
        <TabsContent value="seeker" className="h-[30rem]">
          <SeekerForm />
        </TabsContent>
        <TabsContent value="company">
          <EmployerForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Register;
