import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/programs/crm")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/programs/crm"!</div>;
}
