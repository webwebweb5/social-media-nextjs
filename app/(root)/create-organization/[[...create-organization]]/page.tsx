import { CreateOrganization } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function CreateOrganizationPage() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <CreateOrganization
        path="/create-organization"
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
}
