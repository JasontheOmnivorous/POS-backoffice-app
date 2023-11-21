import BackOfficeLayout from "@/components/backOfficeLayout";
import { useRouter } from "next/router";

const UpdateMenu = () => {
  const router = useRouter();

  return (
    <BackOfficeLayout>
      <h1>Menu id to update: {router.query.id}</h1>
    </BackOfficeLayout>
  );
};

export default UpdateMenu;
