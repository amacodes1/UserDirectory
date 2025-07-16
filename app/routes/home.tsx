import type { Route } from "./+types/home";
import { UserDirectory } from "../components/UserDirectory";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Directory" },
    { name: "description", content: "Find a list of users below" },
  ];
}

export default function Home() {
  return <UserDirectory />;
}
