import { useQuery } from "npm:@tanstack/react-query";
import { DataService } from "../data.service.ts";

export function BusinessCategories() {
  const { isLoading, error, data, isFetching } = useQuery(["key", () => {
    const service = new DataService();
    return service.fetchBusinessCategories();
  }])

  return (
    <div>
      <h2 className="text-center">Categories</h2>
      {JSON.stringify(data)}
    </div>
  );
}
