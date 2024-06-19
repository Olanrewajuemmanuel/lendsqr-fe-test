import { http, HttpResponse } from "msw";

export const handlers = [
  // Add mock endpoints

  http.get("/api/users", () => {
    return HttpResponse.json([
      {
        id: "",
      },
    ]);
  }),
];
